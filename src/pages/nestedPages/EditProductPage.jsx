import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import Dropzone Library
import { useDropzone } from 'react-dropzone';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

// icons and images
import { ReactComponent as UploadIcon } from '../../data/Icons/icon-24-uplad.svg';
import ProductImage from '../../data/Icons/person.jpg'

// close page modal function  
import { closeEditProductPageModal } from '../../store/slices/EditProductPage-slice';

const style = {
	position: 'absolute',
	top: '97px',
	left: '-1%',
	transform: 'translate(0%, 0%)',
	width: '70%',
	height: '100%',
	overflow: 'auto',
	bgcolor: '#fff',
	boxShadow: 24,
	// p: 4,
};
const EditProductPage = () => {
	const { isOpen } = useSelector((state) => state.editProductPageModal);
	const dispatch = useDispatch(false);

	const handleSubmit = (event) => {
		event.preventDefault();
	};

	// Use state with useDropzone library to set banners
	const [icon, setIcon] = React.useState([]);

	// Get some methods form useDropZone
	const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
		accept: {
			'image/*': ['jpg', 'png'],
		},

		onDrop: (acceptedFiles) => {
			setIcon(
				acceptedFiles.map((banners) =>
					Object.assign(banners, {
						preview: URL.createObjectURL(banners),
					})
				)
			);
		},
	});

	// get banners
	const bannersImage = icon.map((banner) => (
		<div key={banner.name}>
			<div className='banner-preview' key={banner.path}>
				<img
					src={banner.preview}
					alt='upload banner'
					// Revoke data uri after image is loaded
					onLoad={() => {
						URL.revokeObjectURL(banner.preview);
					}}
				/>
			</div>
		</div>
	));

	/* UseEffects TO Handle memory leaks */
	useEffect(() => {
		// Make sure to revoke the data uris to avoid memory leaks, will run on unmount
		return () => icon.forEach((banner) => URL.revokeObjectURL(banner.preview));
	}, []);

	return (
		<div className='add-category-form' open={isOpen}>
			<Modal open={isOpen} aria-labelledby='modal-modal-title' aria-describedby='modal-modal-description'>
				<Box sx={style}>
					<div className='add-form-wrapper'>
						<div className='row '>
							<div className='col-12'>
								<div className='form-title  '>
									<h5 className='mb-3'> تعديل المنتج</h5>
									<p> قم بتحديث منتجك والمعلومات الضرورية من هنا</p>
								</div>
							</div>
						</div>
						<form onSubmit={handleSubmit}>
							<div className='form-body'>
								<div className='row mb-5'>
									<div className='col-3'>
										<label htmlFor='product-image'> صورة المنتج</label>
									</div>
									<div className='col-7'>
										<div {...getRootProps()}>
											<div className='add-image-btn-box '>
												<UploadIcon />
												<div className='add-image-btn'>
													<label htmlFor='add-image'> اسحب الصورة هنا</label>
													<input {...getInputProps()} id='add-image' />
												</div>
												<span>( سيتم قبول الصور jpeg & png )</span>
											</div>
										</div>

										{/** preview banner here */}
										<div className=' banners-preview-container'>{bannersImage.length === 0 ?
											<img src={ProductImage} alt='' /> : bannersImage}</div>
									</div>
								</div>
								<div className='row mb-5'>
									<div className='col-3'>
										<label htmlFor='product-number'> رقم المنتج SKU </label>
									</div>
									<div className='col-7'>
										<input type='text' id='product-number' placeholder='  رقم المنتج SKU' value='9AF428' />
									</div>
								</div>
								<div className='row mb-5'>
									<div className='col-3'>
										<label htmlFor='product-name'> أسم المنتح </label>
									</div>
									<div className='col-7'>
										<input type='text' id='product-name' placeholder=' أسم المنتج' value='سماعة هدفون' />
									</div>
								</div>
								<div className='row mb-5'>
									<div className='col-3'>
										<label htmlFor='product-desc'> وصف المنتح </label>
									</div>
									<div className='col-7'>
										<textarea id='product-desc' placeholder='  قم بكتابه واضح للمنتج'>
											هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى
											.يولدها التطبيق
										</textarea>
									</div>
								</div>
								<div className='row mb-5'>
									<div className='col-3'>
										<label htmlFor='product-category'> التصنيف </label>
									</div>
									<div className='col-7'>
										<select className='form-select' id='product-category'>
											<option defaultValue={'الكل'}>الكل</option>
											<option value={'اجهزة جوال'}>اجهزة جوال </option>
											<option value={'اكسسوارات'}>اكسسوارات</option>
											<option value={'لابتوب'}>لابتوب</option>
										</select>
									</div>
								</div>
							</div>

							<div className='form-footer'>
								<div className='row d-flex justify-content-center align-items-center'>
									<div className='col-4'>
										<button className='save-btn'>حفظ</button>
									</div>
									<div className='col-4'>
										<button className='close-btn' onClick={() => dispatch(closeEditProductPageModal())}>
											إلغاء
										</button>
									</div>
								</div>
							</div>
						</form>
					</div>
				</Box>
			</Modal>
		</div>
	);
};

export default EditProductPage;
