import * as React from 'react';

import editIcon from '../data/Icons/editt 2.svg';
import deleteIcon from '../data/Icons/icon-24-delete.svg';
// import icons
import carImage from '../data/Icons/image car.png';
import { IoIosArrowForward, IoIosArrowBack, IoIosArrowDown } from 'react-icons/io';




const OrdersTable = () => {
	
	return (
		<React.Fragment>
			<div className='table-head '>
				<div className='check-all'>
					<div className='form-check d-flex flex-lg-row-reverse'>
						<label className='form-check-label me-5' htmlFor='flexCheckIndeterminate'>
							تحديد الكل
						</label>
						<input className='form-check-input checkbox' type='checkbox' value='' id='flexCheckIndeterminate' />
					</div>
				</div>
			</div>
			<table className='table'>
				<thead>
					<tr>
						<th scope='col' className='text-end'></th>
						<th scope='col' className='text-end'>
							م
						</th>
						<th scope='col' className='text-center' colSpan='1'>
							ID
						</th>
						<th scope='col' className='text-end pe-4'>
							الأساسي
						</th>
						<th scope='col' className='text-end px-2'>
							فرعي
						</th>
						<th scope='col' className='text-center'>
							التصنيفات الفرعية
						</th>
						<th scope='col' className='text-end'>
							نشر
						</th>
						<th scope='col' className='text-end'>
							اجراء
						</th>
					</tr>
				</thead>
				<tbody>
					{/* */}
					<tr>
						<th scope='row'>
							<input className='form-check-input checkbox' type='checkbox' value='' id='flexCheckIndeterminate' />
						</th>
						<td>01</td>
						<td className='text-center'>9586</td>
						<td className='text-end pe-4'>
							<div className='cate-prim'>
								<img src={carImage} alt='img' />
								<span className='me-3'>جوالات</span>
							</div>
						</td>
						<td className='text-center'>3</td>
						<td className='text-center'>
							<div className='sub-categories'>
								<span>ايفون</span>
								<span>سوني</span>
								<span>سامسونج</span>
							</div>
						</td>
						<td className='text-center'>
							<div className='form-check form-switch'>
								<input className='form-check-input switch' type='checkbox' id='flexSwitchCheckChecked' />
							</div>
						</td>
						<td className='text-center'>
							<div className='actions d-flex justify-content-evenly'>
								<span>
									<img src={editIcon} alt='edit' title='edit' />
								</span>
								<span>
									<img src={deleteIcon} alt='delete' title='delete' />
								</span>
							</div>
						</td>
					</tr>

					{/* */}
					<tr>
						<th scope='row'>
							<input className='form-check-input checkbox' type='checkbox' value='' id='flexCheckIndeterminate' />
						</th>
						<td>02</td>
						<td className='text-center'>5648</td>
						<td className='text-end pe-4'>
							<div className='cate-prim'>
								<img src={carImage} alt='img' />
								<span className='me-3'>اكسسوارات</span>
							</div>
						</td>
						<td className='text-center'>1</td>
						<td className='text-center'>
							<div className='sub-categories'>
								<span>سماعات</span>
								<span>شاحن</span>
							</div>
						</td>
						<td className='text-center'>
							<div className='form-check form-switch'>
								<input className='form-check-input switch' type='checkbox' id='flexSwitchCheckChecked' />
							</div>
						</td>
						<td className='text-center'>
							<div className='actions d-flex justify-content-evenly'>
								<span>
									<img src={editIcon} alt='edit' title='edit' />
								</span>
								<span>
									<img src={deleteIcon} alt='delete' title='delete' />
								</span>
							</div>
						</td>
					</tr>

					{/* */}
					<tr>
						<th scope='row'>
							<input className='form-check-input checkbox' type='checkbox' value='' id='flexCheckIndeterminate' />
						</th>
						<td>03</td>
						<td className='text-center'>5785</td>
						<td className='text-end pe-4'>
							<div className='cate-prim'>
								<img src={carImage} alt='img' />
								<span className='me-3'>اكسسوارات</span>
							</div>
						</td>
						<td className='text-center'>2</td>
						<td className='text-center'>
							<div className='sub-categories'>
								<span>سماعات</span>
								<span>شاحن</span>
							</div>
						</td>
						<td className='text-center'>
							<div className='form-check form-switch'>
								<input className='form-check-input switch' type='checkbox' id='flexSwitchCheckChecked' />
							</div>
						</td>
						<td className='text-center'>
							<div className='actions d-flex justify-content-evenly'>
								<span>
									<img src={editIcon} alt='edit' title='edit' />
								</span>
								<span>
									<img src={deleteIcon} alt='delete' title='delete' />
								</span>
							</div>
						</td>
					</tr>

					{/* */}
					<tr>
						<th scope='row'>
							<input className='form-check-input checkbox' type='checkbox' value='' id='flexCheckIndeterminate' />
						</th>
						<td>04</td>
						<td className='text-center'>213</td>
						<td className='text-end pe-4'>
							<div className='cate-prim'>
								<img src={carImage} alt='img' />
								<span className='me-3'>لابتوتب</span>
							</div>
						</td>
						<td className='text-center'>5</td>
						<td className='text-center'>
							<div className='sub-categories'>
								<span>HP</span>
								<span>DELL</span>
								<span>LENOVO</span>
							</div>
						</td>
						<td className='text-center'>
							<div className='form-check form-switch'>
								<input className='form-check-input switch' type='checkbox' id='flexSwitchCheckChecked' />
							</div>
						</td>
						<td className='text-center'>
							<div className='actions d-flex justify-content-evenly'>
								<span>
									<img src={editIcon} alt='edit' title='edit' />
								</span>
								<span>
									<img src={deleteIcon} alt='delete' title='delete' />
								</span>
							</div>
						</td>
					</tr>

					{/* */}
					<tr>
						<th scope='row'>
							<input className='form-check-input checkbox' type='checkbox' value='' id='flexCheckIndeterminate' />
						</th>
						<td>05</td>
						<td className='text-center'>67854</td>
						<td className='text-end pe-4'>
							<div className='cate-prim'>
								<img src={carImage} alt='img' />
								<span className='me-3'>اكسسوارات</span>
							</div>
						</td>
						<td className='text-center'>6</td>
						<td className='text-center'>
							<div className='sub-categories'>
								<span>سماعات</span>
								<span>شاحن</span>
							</div>
						</td>
						<td className='text-center'>
							<div className='form-check form-switch'>
								<input className='form-check-input switch' type='checkbox' id='flexSwitchCheckChecked' />
							</div>
						</td>
						<td className='text-center'>
							<div className='actions d-flex justify-content-evenly'>
								<span>
									<img src={editIcon} alt='edit' title='edit' />
								</span>
								<span>
									<img src={deleteIcon} alt='delete' title='delete' />
								</span>
							</div>
						</td>
					</tr>

					{/* */}
					<tr>
						<th scope='row'>
							<input className='form-check-input checkbox' type='checkbox' value='' id='flexCheckIndeterminate' />
						</th>
						<td>06</td>
						<td className='text-center'>213</td>
						<td className='text-end pe-4'>
							<div className='cate-prim'>
								<img src={carImage} alt='img' />
								<span className='me-3'>لابتوتب</span>
							</div>
						</td>
						<td className='text-center'>8</td>
						<td className='text-center'>
							<div className='sub-categories'>
								<span>HP</span>
								<span>DELL</span>
								<span>LENOVO</span>
							</div>
						</td>
						<td className='text-center'>
							<div className='form-check form-switch'>
								<input className='form-check-input switch' type='checkbox' id='flexSwitchCheckChecked' />
							</div>
						</td>
						<td className='text-center'>
							<div className='actions d-flex justify-content-evenly'>
								<span>
									<img src={editIcon} alt='edit' title='edit' />
								</span>
								<span>
									<img src={deleteIcon} alt='delete' title='delete' />
								</span>
							</div>
						</td>
					</tr>

					{/* */}
					<tr>
						<th scope='row'>
							<input className='form-check-input checkbox' type='checkbox' value='' id='flexCheckIndeterminate' />
						</th>
						<td>07</td>
						<td className='text-center'>3456</td>
						<td className='text-end pe-4'>
							<div className='cate-prim'>
								<img src={carImage} alt='img' />
								<span className='me-3'>جوالات</span>
							</div>
						</td>
						<td className='text-center'>1</td>
						<td className='text-center'>
							<div className='sub-categories'>
								<span>ايفون</span>
								<span>سوني</span>
								<span>سامسونج</span>
							</div>
						</td>
						<td className='text-center'>
							<div className='form-check form-switch'>
								<input className='form-check-input switch' type='checkbox' id='flexSwitchCheckChecked' />
							</div>
						</td>
						<td className='text-center'>
							<div className='actions d-flex justify-content-evenly'>
								<span>
									<img src={editIcon} alt='edit' title='edit' />
								</span>
								<span>
									<img src={deleteIcon} alt='delete' title='delete' />
								</span>
							</div>
						</td>
					</tr>

					{/* */}
					<tr>
						<th scope='row'>
							<input className='form-check-input checkbox' type='checkbox' value='' id='flexCheckIndeterminate' />
						</th>
						<td>08</td>
						<td className='text-center'>213</td>
						<td className='text-end pe-4'>
							<div className='cate-prim' colSpan='9'>
								<img src={carImage} alt='img' />
								<span className='me-3'>لابتوتب</span>
							</div>
						</td>
						<td className='text-center'>10</td>
						<td className='text-center'>
							<div className='sub-categories'>
								<span>سماعات</span>
								<span>شاحن</span>
							</div>
						</td>
						<td className='text-center'>
							<div className='form-check form-switch'>
								<input className='form-check-input switch' type='checkbox' id='flexSwitchCheckChecked' />
							</div>
						</td>
						<td className='text-center'>
							<div className='actions d-flex justify-content-evenly'>
								<span>
									<img src={editIcon} alt='edit' title='edit' />
								</span>
								<span>
									<img src={deleteIcon} alt='delete' title='delete' />
								</span>
							</div>
						</td>
					</tr>

					{/* */}
					<tr>
						<th scope='row'>
							<input className='form-check-input checkbox' type='checkbox' value='' id='flexCheckIndeterminate' />
						</th>
						<td>09</td>
						<td className='text-center'>9586</td>
						<td className='text-end pe-4'>
							<div className='cate-prim'>
								<img src={carImage} alt='img' />
								<span className='me-3'> بور بانك </span>
							</div>
						</td>
						<td className='text-center'>4</td>
						<td className='text-center'>
							<div className='sub-categories'>
								<span>Dragon</span>
							</div>
						</td>

						<td className='text-center'>
							<div className='form-check form-switch'>
								<input className='form-check-input switch' type='checkbox' id='flexSwitchCheckChecked' />
							</div>
						</td>
						<td className='text-center'>
							<div className='actions d-flex justify-content-evenly '>
								<span>
									<img src={editIcon} alt='edit' title='edit' />
								</span>
								<span>
									<img src={deleteIcon} alt='delete' title='delete' />
								</span>
							</div>
						</td>
					</tr>

					{/* */}
					<tr>
						<th scope='row'>
							<input className='form-check-input checkbox' type='checkbox' value='' id='flexSwitchCheckChecked' />
						</th>
						<td>10</td>
						<td className='text-center'>4567</td>
						<td className='text-end pe-4'>
							<div className='cate-prim'>
								<img src={carImage} alt='img' />
								<span className='me-3'>اكسسوارات</span>
							</div>
						</td>
						<td className='text-center'>8</td>
						<td className='text-center'>
							<div className='sub-categories'>
								<span>سماعات</span>
								<span>شاحن</span>
							</div>
						</td>
						<td className='text-center'>
							<div className='form-check form-switch'>
								<input className='form-check-input switch' type='checkbox' id='flexSwitchCheckChecked' />
							</div>
						</td>
						<td className='text-center'>
							<div className='actions d-flex justify-content-evenly'>
								<span>
									<img src={editIcon} alt='edit' title='edit' />
								</span>
								<span>
									<img src={deleteIcon} alt='delete' title='delete' />
								</span>
							</div>
						</td>
					</tr>
				</tbody>
			</table>

			<div className='  d-flex justify-content-between align-items-center'>
				<nav className='navigation d-flex align-self-center' aria-label='Page navigation ' dir='ltr'>
					<ul className='pagination '>
						<li className='page-item'>
							<button className='page-link'>
								<IoIosArrowBack />
							</button>
						</li>
						<li className='page-item'>
							<button className='page-link active'>1</button>
						</li>
						<li className='page-item'>
							<button className='page-link'>2</button>
						</li>
						<li className='page-item'>
							<button className='page-link'>3</button>
						</li>
						<li className='page-item'>
							<button className='page-link'>...</button>
						</li>
						<li className='page-item'>
							<button className='page-link'>
								<IoIosArrowForward />
							</button>
						</li>
					</ul>
				</nav>

				<div className='select-wrapper'>
					<select className='form-select  table-columns-select' aria-label='Default select '>
						<option defaultValue>عدد الصفوف</option>
						<option className='5'>5</option>
						<option className='10'>10</option>
						<option className='15'>15</option>
					</select>
					<IoIosArrowDown />
				</div>
			</div>
		</React.Fragment>
	);
}
export default OrdersTable;









