import * as React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { useSelector } from 'react-redux';

const ProductsTableData = () => {
	const productsData = useSelector((state) => state.salesTablesData);

	return (
		<div className='new-products-table'>
			<div className='row mb-3'>
				<div className='col-12'>
					<div className='comp-title d-flex justify-content-between '>
						<h4> المنتجات الأكثر مبيعاً </h4>
						<BsArrowLeft className='arrow-style' />
					</div>
				</div>
			</div>

			<div className='row'>
				<div className='table-wrapper table-responsive'>
					<table className='table  table-borderless products-table text-center'>
						<thead>
							<tr>
								<th scope='col' className='pr-rad-right'></th>
								<th scope='col'>رقم المنتج</th>
								<th scope='col'> الاسم</th>
								<th scope='col' className=' text-end'>
									التصنيف
								</th>
								<th scope='col' className=' text-end'>
									السعر
								</th>
								<th scope='col' className=' text-center pr-rad-left'>
									اجمالي المبيعات
								</th>
							</tr>
						</thead>
						<tbody>
							{productsData.map((product) => (
								<React.Fragment key={product.id}>
									<tr>
										<th scope='row'>
											<img className=' rounded' src={product.icon} alt={product.icon} />
										</th>
										<td> {product.ProductNumber}</td>
										<td> {product.productName}</td>
										<td> {product.category}</td>
										<td> {product.price}</td>
										<td className=' text-center'> {product.totalSales}</td>
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

export default ProductsTableData;
