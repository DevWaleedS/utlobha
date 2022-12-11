import * as React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { ReactComponent as ReportIcon } from '../data/Icons/icon-24-actions-info_outined.svg';
import { ReactComponent as DeleteIcon } from '../data/Icons/icon-24-delete.svg';

const OrdersTableData = () => {
	const orderData = useSelector((state) => state.ordersTablesData);

	return (
		<div className='new-orders-table'>
			<div className='row mb-3'>
				<div className='col-12'>
					<div className='comp-title d-flex justify-content-between '>
						<h4>أحدث الطلبات </h4>
						<BsArrowLeft className='arrow-style' />
					</div>
				</div>
			</div>

			<div className='row'>
				<div className='table-wrapper table-responsive'>
					<table className='table table-borderless orders-table text-center'>
						<thead>
							<tr>
								<th scope='col' className='pr-rad-right'></th>
								<th scope='col'>رقم الطلب</th>
								<th scope='col'> الاسم</th>
								<th scope='col' className=' text-center'>
									الحالة
								</th>
								<th scope='col' className=' text-end'>
									الموقع
								</th>
								<th scope='col' className=' text-end pr-rad-left'>
									الاجراء
								</th>
							</tr>
						</thead>
						<tbody>
							{orderData.map((order) => (
								<React.Fragment key={order.id}>
									<tr>
										<th scope='row'>
											<img className=' rounded-circle ' src={order.icon} alt={order.icon} />
										</th>
										<td className=' text-end pe-3'> {order.number}</td>
										<td> {order.name}</td>
										<td>
											<span className='status' style={{ backgroundColor: order.bgColor, color: order.color }}>
												{order.stats}
											</span>
										</td>
										<td> {order.location}</td>
										<td className=' text-start action-icon'>
											<div className='dropdown'>
												<div className='' data-bs-toggle='dropdown' aria-expanded='false'>
													{order.actionIcon}
												</div>

												<ul className='dropdown-menu new-orders-dropdown-menu'>
													<li>
														<Link className='dropdown-item' to='Orders/OrderDetails'>
															<ReportIcon className='report-icon' />
														</Link>
													</li>
													<li className='delete'>
														<button className='dropdown-item'>
															<DeleteIcon />
														</button>
													</li>
												</ul>
											</div>
										</td>
									</tr>
								</React.Fragment>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default OrdersTableData;
