import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeEditCategoryPageModal } from '../../store/slices/EditCategoryPage-slice';

// import Dropzone Library
import { useDropzone } from 'react-dropzone';
// sweet alert
import Swal from 'sweetalert2';

//
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

// icons
import { ReactComponent as UploadIcon } from '../../data/Icons/icon-24-uplad.svg';
import CategoryImage from '../../data/Icons/person.jpg';

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
const EditCategoryPage = () => {
	const { isOpen } = useSelector((state) => state.editCategoryPageModal);
	const dispatch = useDispatch(false);

	const handleSubmit = (event) => {
		event.preventDefault();
	};

	// Sweet alert function
	const succMessage = () => {
		dispatch(closeEditCategoryPageModal());
		let timerInterval;

		Swal.fire({
			title: 'تم  تعديل التصنيف  بنجاح',
			icon: 'success',
			timer: 4000,
			showCloseButton: true,
			timerProgressBar: true,
			showConfirmButton: false,
			didOpen: () => {
				const b = Swal.getHtmlContainer().querySelector('b');
				timerInterval = setInterval(() => {
					b.textContent = Swal.getTimerLeft();
				}, 100);
			},
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
									<h5 className='mb-3'> تعديل تصنيف</h5>
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
										<div className=' banners-preview-container'>{bannersImage.length === 0 ? <img src={CategoryImage} alt='' /> : bannersImage}</div>
									</div>
								</div>
								<div className='row mb-5'>
									<div className='col-3'>
										<label htmlFor='category-number'> رقم التصنيف ID</label>
									</div>
									<div className='col-7'>
										<input type='text' id='category-number' placeholder='أدخل رقم التصنيف' value={'9586'} />
									</div>
								</div>
								<div className='row mb-5'>
									<div className='col-3'>
										<label htmlFor='category-name'> أسم التصنيف </label>
									</div>
									<div className='col-7'>
										<input type='text' id='category-name' placeholder='أدخل أسم التصنيف' value={'اجهزة جوال'} />
									</div>
								</div>
								<div className='row mb-5'>
									<div className='col-3'>
										<label htmlFor='sub-categories'> التصنيفات الفرعية </label>
									</div>
									<div className='col-7'>
										<input type='text' id='sub-categories' value={'جوالات'} />
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
										<button className='close-btn' onClick={() => dispatch(closeEditCategoryPageModal())}>
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

export default EditCategoryPage;
