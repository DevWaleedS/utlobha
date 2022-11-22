import React, { Fragment } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

// IMPORT ICONS
import { ReactComponent as HomeIcon } from '../data/Icons/icon_24_home.svg';
import { ReactComponent as DocumentIcon } from '../data/Icons/document_text_outlined.svg';
import { ReactComponent as EditIcon } from '../data/Icons/icon-24-write.svg';
import { ReactComponent as CreatedIcon } from '../data/Icons/icon-24-create link.svg';

const SeoWeight = () => {
	const [value, setValue] = React.useState('female');

	const handleChange = (event) => {
		setValue(event.target.value);
	};
	return (
		<Fragment>
			<div className='seo-weight-edit-box mb-4'>
				<div className='title'>
					<h4>الكلمات المفتاحية SEO</h4>
				</div>

				<FormControl variant='standard'>
					<div className='row'>
						<div className='col-12 mb-4'>
							<div className='input-bx'>
								<TextField
									id='outlined-textarea'
									placeholder='عنوان الصفحة الرئيسية'
									InputProps={{
										startAdornment: (
											<InputAdornment position='start'>
												<HomeIcon />
											</InputAdornment>
										),
									}}
								/>
							</div>
						</div>

						<div className='col-12 mb-4'>
							<div className='input-bx'>
								<TextField
									id='outlined-textarea'
									placeholder='وصف الصفحة الرئيسية'
									InputProps={{
										startAdornment: (
											<InputAdornment position='start'>
												<DocumentIcon />
											</InputAdornment>
										),
									}}
								/>
							</div>
						</div>

						<div className='col-12 mb-4'>
							<div className='input-bx'>
								<TextField
									id='outlined-textarea'
									placeholder='   الكلمات المفتاحية'
									multiline
									InputProps={{
										startAdornment: (
											<InputAdornment position='start'>
												<EditIcon />
											</InputAdornment>
										),
									}}
								/>
							</div>
						</div>

						<div className='col-12 mb-5'>
							<div className='input-bx'>
								<FormLabel id='demo-radio-buttons-group-label'>طريقة عرض روابط صفحات المتجر</FormLabel>
								<RadioGroup aria-labelledby='demo-controlled-radio-buttons-group' name='controlled-radio-buttons-group' value={value} onChange={handleChange}>
									<div className='seo-form-check mb-2'>
										<FormControlLabel value='shortLink' control={<Radio />} />
										<label className='seo-form-check-label me-2' htmlFor='shortLink'>
											<span>رابط مختصر</span>
											<span className='link me-2'>(https://sample.utlopha.com) </span>
										</label>
									</div>
									<div className='seo-form-check '>
										<FormControlLabel value='normalLink' control={<Radio />} />
										<label className='seo-form-check-label  me-2' htmlFor='normalLink'>
											<span> رابط باسم الصفحة</span>
											<span className='link me-2'>(الرئيسية//https://sample.utlopha.com) </span>
										</label>
									</div>
								</RadioGroup>
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

			<div className='seo-weight-edit-box mb-4'>
				<div className='title'>
					<h4> ربط جوجل انليتكس Google Analytics </h4>
				</div>

				<FormControl variant='standard'>
					<div className='row'>
						<div className='col-12 mb-5'>
							<div className='input-bx'>
								<TextField
									id='outlined-textarea'
									placeholder=' توليد رابط خاص بجوجل انليتكس'
									InputProps={{
										startAdornment: (
											<InputAdornment position='start'>
												<CreatedIcon />
											</InputAdornment>
										),
									}}
								/>
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

			<div className='seo-weight-edit-box '>
				<div className='title'>
					<h4> إعدادات ملف Robots </h4>
				</div>

				<FormControl variant='standard' className='edit-robot-teat-area'>
					<div className='row'>
						<div className='col-12 mb-4'>
							<div className='input-bx'>
								<h5 className='mb-2'>تعديل ملف txt.Robots</h5>
								<TextField
									style={{ textAlign: 'left' }}
									id='outlined-textarea'
									defaultValue='Sitemap: https://utlopha.sa/sitemap.xml
: *User-agent
: /Allow
Disallow: /*<iframe
=Disallow: /*?currency'
									multiline
								/>
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

export default SeoWeight;
