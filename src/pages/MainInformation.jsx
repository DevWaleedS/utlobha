import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

// import ImageUploading library
import ImageUploading from 'react-images-uploading';

// useDropzone to upload store Icon
import { useDropzone } from 'react-dropzone';

// IMPORT ICON
import howIcon from '../data/Icons/icon_24_home.svg';
import { MdFileUpload } from 'react-icons/md';
import { ReactComponent as CountryIcon } from '../data/Icons/icon-24-country.svg';
import { ReactComponent as CitIcon } from '../data/Icons/icon-24-town.svg';
import { ReactComponent as EditIcon } from '../data/Icons/document_text_outlined.svg';

const MainInformation = () => {
	// Use State to set some meThods
	const [storeLogo, setStoreLogo] = React.useState([]);

	//import some methods from useDropzone
	const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
		accept: {
			'image/*': [],
		},
		maxFiles: 1,
	});

	// looping to put the image in ui design
	const files = acceptedFiles.map((file) => (
		<span key={file.path}>
			{file.path} - {file.size} bytes
		</span>
	));

	// Select country
	const [country, seCountry] = React.useState('');

	// maxNumbers of files uploaded
	const maxNumber = 1;

	// onchange function for select country
	const handleCountryChange = (event) => {
		seCountry(event.target.value);
	};

	const onChange = (imageList, addUpdateIndex) => {
		// data for submit
		console.log(imageList, addUpdateIndex);
		setStoreLogo(imageList);
	};

	// ---------------------------
	return (
		<section className='main-info-page p-3'>
			<div className='head-category mb-4'>
				<div className='row'>
					<nav aria-label='breadcrumb'>
						<ol className='breadcrumb'>
							<li className='breadcrumb-item'>
								<img src={howIcon} alt='' />
								<Link to='/' className='me-2'>
									الرئيسية
								</Link>
							</li>
							<li className='breadcrumb-item ' aria-current='page'>
								الإعدادات
							</li>
							<li className='breadcrumb-item active ' aria-current='page'>
								البيانات الأساسية
							</li>
						</ol>
					</nav>
				</div>
			</div>

			<div className='main-info-form'>
				<div className='row'>
					<div className='col-12 mb-4'>
						{/** Upload Logo row */}
						<div className='row d-flex justify-content-center align-items-center mb-3'>
							<div className='col-6'>
								{/** Image Perv Section */}
								<div className='upload-logo-set d-flex justify-content-center align-items-center flex-column'>
									{/** Upload Image  */}
									<ImageUploading value={storeLogo} onChange={onChange} maxNumber={maxNumber} dataURLKey='data_url'>
										{({ imageList, onImageUpload, dragProps }) => (
											// Ui For Upload Log
											<Fragment>
												{/** Preview Image Box */}
												<div className='upload-image-wrapper'>
													{imageList.map((image, index) => (
														<div key={index} className='upload-image-bx mb-2'>
															<img src={image['data_url']} alt='' className='logo-img-uploaded' />
														</div>
													))}
												</div>

												{/** upload btn */}
												<button className='upload-log-btn' onClick={onImageUpload} {...dragProps}>
													<span> رفع الشعار </span>
													<MdFileUpload />
												</button>
											</Fragment>
										)}
									</ImageUploading>
								</div>
							</div>
						</div>
					</div>
					<div className='col-12 mb-3'>
						<div className='row d-flex justify-content-center align-items-center'>
							<div className='col-8'>
								<div className='select-country'>
									<div className='select-icon'>
										<CountryIcon />
									</div>
									<select className='form-select' aria-label='Default select example' onChange={handleCountryChange}>
										<option defaultValue>اختر الدولة </option>
										<option value='1'>
											<div className='d-flex justify-content-between align-items-center items-option'>
												<span className='country-count'>950</span>
												<span className='country-name'>المملكة العربية السعودية</span>
											</div>
										</option>
										<option value={'ksa'}>
											<div className='d-flex justify-content-between align-items-center'>
												<span className='country-count'>950</span>
												<span className='country-name'> الأردن</span>
											</div>
										</option>
										<option value={'jordan'}>
											<div className='d-flex justify-content-between align-items-center'>
												<span className='country-count'>950</span>
												<span className='country-name'> فلسطين</span>
											</div>
										</option>
									</select>
								</div>
							</div>
						</div>
					</div>
					<div className='col-12 mb-4'>
						<div className='row d-flex justify-content-center align-items-center'>
							<div className='col-8'>
								<div className='select-country'>
									<div className='select-icon'>
										<CitIcon className=''/>
									</div>
									<select className='form-select' aria-label='Default select example' onChange={handleCountryChange}>
										<option defaultValue>اختر المدينة </option>
										<option value='1'>
											<div className='d-flex justify-content-between align-items-center items-option'>
												<span className='country-name'>جدة</span>
											</div>
										</option>
										<option value={'ksa'}>
											<div className='d-flex justify-content-between align-items-center'>
												<span className='country-name'> الرياض</span>
											</div>
										</option>
										<option value={'jordan'}>
											<div className='d-flex justify-content-between align-items-center'>
												<span className='country-name'> الدمام</span>
											</div>
										</option>
									</select>
								</div>
							</div>
						</div>
					</div>
					<div className='col-12 mb-4'>
						{/** Upload Icon row */}
						<div className='row d-flex justify-content-center align-items-center'>
							<div className='col-8'>
								<div className='select-country'>
									<label htmlFor='upload-icon' className='upload-icon-label'>ايقونة تبويب المتجر في المتصفح</label>
									<div className='upload-icon-btn' {...getRootProps()}>
										<input {...getInputProps()} id='upload-icon' />
										{files}
										<MdFileUpload />
									</div>
									<p className='upload-icon-hint'>المقاس الأنسب 32 بكسل  عرض 32 بكسل الارتفاع</p>
								</div>
							</div>
						</div>
					</div>
					<div className='col-12 mb-2'>
						<div className='row d-flex justify-content-center align-items-center'>
							<div className='col-8'>
								<div className='select-country'>
									<div className='select-icon'>
										<EditIcon  className='edit-icon'/>
									</div>
									<textarea class='form-control store-desc' placeholder='وصف المتجر' rows='3' onResize={false}></textarea>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/** Upload Logo row */}
			</div>
		</section>
	);
};

export default MainInformation;
