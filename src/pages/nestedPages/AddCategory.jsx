import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeVerifyModal } from '../../store/slices/VerifyStoreModal-slice';

// import Dropzone Library
import { useDropzone } from 'react-dropzone';

// sweet alert
import Swal from 'sweetalert2';

// MUI
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

// ICONS
import { ReactComponent as UploadIcon } from '../../data/Icons/icon-24-uplad.svg';

const style = {
	position: 'absolute',
	top: '97px',
	left: '-1%',
	transform: 'translate(0%, 0%)',
	width: '70%',
	height: '100%',
	overflow: 'auto',
	bgcolor: '#fff',
};
const AddCategory = () => {
	const { isOpen } = useSelector((state) => state.VerifyModal);
	const dispatch = useDispatch(false);

	const handleSubmit = (event) => {
		event.preventDefault();
	};

	// Sweet alert function
	const succMessage = () => {
		dispatch(closeVerifyModal());
		let timerInterval;

		Swal.fire({
			title: 'تم إضافه التصنيف بنجاح',
			icon: 'success',
			timer: 400000,
			showCloseButton: true,
			timerProgressBar: true,
			showConfirmButton: false,

			willClose: () => {
				clearInterval(timerInterval);
			},
		}).then((result) => {
			/* Read more about handling dismissals below */
			if (result.dismiss === Swal.DismissReason.timer) {
				console.log('I was closed by the timer');
			}
		});
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
									<h5 className='mb-3'> اضافة تصنيف</h5>
									<p>قم بتحديث التصنيف والمعلومات الضرورية من هنا</p>
								</div>
							</div>
						</div>
						<form onSubmit={handleSubmit}>
							<div className='form-body'>
								<div className='row mb-5'>
									<div className='col-3'>
										<label htmlFor='add-icon'>ايقونة التصنيف</label>
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
										<div className=' banners-preview-container'>{bannersImage}</div>
									</div>
								</div>
								<div className='row mb-5'>
									<div className='col-3'>
										<label htmlFor='category-number'> رقم التصنيف ID</label>
									</div>
									<div className='col-7'>
										<input type='text' id='category-number' placeholder='أدخل رقم التصنيف' />
									</div>
								</div>
								<div className='row mb-5'>
									<div className='col-3'>
										<label htmlFor='category-name'> أسم التصنيف </label>
									</div>
									<div className='col-7'>
										<input type='text' id='category-name' placeholder='أدخل أسم التصنيف' />
									</div>
								</div>
								<div className='row mb-5'>
									<div className='col-3'>
										<label htmlFor='sub-categories'> التصنيفات الفرعية </label>
									</div>
									<div className='col-7'>
										<input type='text' id='sub-categories' />
									</div>
								</div>
							</div>

							<div className='form-footer'>
								<div className='row d-flex justify-content-center align-items-center'>
									<div className='col-4'>
										<button
											className='save-btn'
											onClick={() => {
												succMessage();
											}}
										>
											حفظ
										</button>
									</div>
									<div className='col-4'>
										<button className='close-btn' onClick={() => dispatch(closeVerifyModal())}>
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

export default AddCategory;
