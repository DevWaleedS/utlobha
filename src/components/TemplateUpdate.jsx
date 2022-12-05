import React, { Fragment, useEffect } from 'react';
import Button from '@mui/material/Button';

// import Dropzone Library
import { useDropzone } from 'react-dropzone';

// import ImageUploading library
import ImageUploading from 'react-images-uploading';

// IMPORT ICONS
import { MdFileUpload } from 'react-icons/md';
import { BsArrowLeft } from 'react-icons/bs';
import { FormControl, Switch } from '@mui/material';
import { ReactComponent as CommentIcon } from '../data/Icons/icon-32-comment.svg';
import { ReactComponent as Client } from '../data/Icons/icon-24-ratings.svg';

// Import Demo
import DemoLogo from '../data/Icons/demo-logo.png';
import BannerImage from '../data/Icons/banner.jpg';
import { Link } from 'react-router-dom';

const TemplateUpdate = () => {
	// Use state with useDropzone library to set banners
	const [banners, setBanners] = React.useState([]);

	// Get some methods form useDropZone
	const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
		accept: {
			'image/*': [],
		},

		onDrop: (acceptedFiles) => {
			setBanners(
				acceptedFiles.map((banners) =>
					Object.assign(banners, {
						preview: URL.createObjectURL(banners),
					})
				)
			);
		},
	});

	// get banners
	const bannersImage = banners.map((banner) => (
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
		return () => banners.forEach((banner) => URL.revokeObjectURL(banner.preview));
	}, []);

	/** --------------------------------------------------------------------------------------------------------------- */

	// Use state with ImageUploading library to set Logo
	const [logo, setLogo] = React.useState([]);

	// maxNumbers of files uploaded
	const maxNumber = 1;

	const onChange = (imageList, addUpdateIndex) => {
		// data for submit
		setLogo(imageList);
	};

	return (
		<Fragment>
			<div className='seo-weight-edit-box template-edit-box mb-4'>
				<div className='title'>
					<h4>
						الشعار <span>( تستطيع تغيير الشعار الذي يظهر في الهيدر في الصفحة الرئيسية )</span>
					</h4>
				</div>

				<FormControl variant='standard'>
					<div className='row'>
						<div className='col-12 mb-5'>
							<div className='input-bx'>
								{/** Upload Image  */}
								<ImageUploading value={logo} onChange={onChange} maxNumber={maxNumber} dataURLKey='data_url'>
									{({ imageList, onImageUpload, dragProps }) => (
										// Ui For Upload Log
										<Fragment>
											{/** Preview Image Box */}
											<div className='logo-preview-container'>
												{imageList.map((image, index) => (
													<div key={index} className='upload-image-bx mb-2'>
												
														<img src={image['data_url']} alt='' className='logo-img-uploaded' />
													</div>
												))}
											</div>

											{/** upload btn */}
											<div className='upload-files-input'>
												<button className=' d-flex justify-content-between align-items-center w-100' onClick={onImageUpload} {...dragProps}>
													<span> تحديث الشعار </span>
													<MdFileUpload />
												</button>
											</div>
										</Fragment>
									)}
								</ImageUploading>
							</div>
						</div>

						<div className='col-12'>
							<div className='btn-bx'>
								<Button variant='contained'>حفظ</Button>
							</div>
						</div>
					</div>
				</FormControl>
			</div>

			<div className='seo-weight-edit-box template-edit-box mb-4'>
				<div className='title'>
					<h4>
						البنرات الإعلانية <span> ( تستطيع تغيير الصورة التي تظهر كإعلانات في وسط الموقع وبين الأقسام )</span>
					</h4>
				</div>

				<FormControl variant='standard'>
					<div className='row'>
						<div className='col-12 '>
							<div className='input-bx'>
								{/** preview banner here */}
								<div className=' banners-preview-container'>{bannersImage.length === 0 ?
									<img style={{borderRadius: "18px"}} src={BannerImage} alt='' /> : bannersImage}</div>
							</div>
						</div>
						<div className='col-12 mb-5'>
							<div className='add-banners-bts-wrapper'>
								{/** Btn to upload banners */}
								<div {...getRootProps()}>
									<div className='add-banner-btn-box d-flex justify-content-start align-items-center'>
										<label htmlFor='add-banner-1'>بانر إعلاني رقم 1</label>
										<input {...getInputProps()} id='add-banner-1' />
										<div className='wrapper'>
											<div className='upload-files-input mb-2'>
												<span> تحديث البانر </span>
												<MdFileUpload />
											</div>
										</div>

										<div className='switches-group'>
											<Switch defaultChecked />
										</div>
									</div>
									<div className='add-banner-btn-box d-flex justify-content-start align-items-center'>
										<label htmlFor='add-banner-1'>بانر إعلاني رقم 2</label>
										<input {...getInputProps()} id='add-banner-1' />
										<div className='wrapper'>
											<div className='upload-files-input mb-2'>
												<span> تحديث البانر </span>
												<MdFileUpload />
											</div>
										</div>

										<div className='switches-group'>
											<Switch defaultChecked />
										</div>
									</div>
									<div className='add-banner-btn-box d-flex justify-content-start align-items-center'>
										<label htmlFor='add-banner-1'>بانر إعلاني رقم 3</label>
										<input {...getInputProps()} id='add-banner-1' />
										<div className='wrapper'>
											<div className='upload-files-input mb-2'>
												<span> تحديث البانر </span>
												<MdFileUpload />
											</div>
										</div>

										<div className='switches-group'>
											<Switch defaultChecked />
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className='col-12'>
							<div className='btn-bx'>
								<Button variant='contained'>حفظ</Button>
							</div>
						</div>
					</div>
				</FormControl>
			</div>

			<div className='seo-weight-edit-box template-edit-box '>
				<div className='title d-flex justify-content-between align-items-center'>
					<h4>
						التعليقات والعملاء <span> (تستطيع تفعيل وتعطيل العملاء المميزين والتعليقات )</span>
					</h4>
					<div className='view-more-btn mx-4'>
						<Link to='' variant='contained'>
							<span>عرض التفاصيل</span>
							<BsArrowLeft className='me-2' />
						</Link>
					</div>
				</div>

				<FormControl variant='standard' className='edit-robot-teat-area'>
					<div className='row'>
						<div className='col-12 mb-4'>
							<div className='input-bx'>
								<div className='switch-widget mb-2 d-flex justify-content-between align-items-center'>
									<div className='widget-text'>
										<Client className='client-icon' />
										<span className='me-3'>العملاء المميزن</span>
									</div>
									<div className='switch-btn'>
										<Switch defaultChecked />
									</div>
								</div>
								<div className='switch-widget d-flex justify-content-between align-items-center'>
									<div className='widget-text'>
										<CommentIcon />
										<span className='me-3'> تعليقات العملاء</span>
									</div>
									<div className='switch-btn'>
										<Switch defaultChecked />
									</div>
								</div>
							</div>
						</div>

						<div className='col-12'>
							<div className='btn-bx'>
								<Button variant='contained'>حفظ</Button>
							</div>
						</div>
					</div>
				</FormControl>
			</div>
		</Fragment>
	);
};

export default TemplateUpdate;
