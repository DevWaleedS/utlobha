import * as React from 'react';
import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Switch from '@mui/material/Switch';

import TablePagination from './TablePagination';

// Icons
import { ReactComponent as DeletteIcon } from '../data/Icons/icon-24-delete.svg';

import { Link } from 'react-router-dom';

// Sweet alert function
import Swal from 'sweetalert2';

function descendingComparator(a, b, orderBy) {
	if (b[orderBy] < a[orderBy]) {
		return -1;
	}
	if (b[orderBy] > a[orderBy]) {
		return 1;
	}
	return 0;
}

function getComparator(order, orderBy) {
	return order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
	const stabilizedThis = array.map((el, index) => [el, index]);
	stabilizedThis.sort((a, b) => {
		const order = comparator(a[0], b[0]);
		if (order !== 0) {
			return order;
		}
		return a[1] - b[1];
	});
	return stabilizedThis.map((el) => el[0]);
}

function EnhancedTableHead(props) {
	const { order, orderBy, onRequestSort } = props;
	const createSortHandler = (property) => (event) => {
		onRequestSort(event, property);
	};

	return (
		<TableHead sx={{ backgroundColor: '#d9f2f9' }}>
			<TableRow>
				<TableCell align='center' sx={{ color: '#02466a' }}>
					م
				</TableCell>
				<TableCell align='center' sx={{ color: '#02466a' }}>
					SKU
				</TableCell>
				<TableCell align='right' sx={{ color: '#02466a' }}>
					اسم المنتج
				</TableCell>
				<TableCell align='center' sx={{ color: '#02466a' }}>
					التصنيف
				</TableCell>
				<TableCell align='right' sx={{ color: '#02466a' }}>
					السعر SAR
				</TableCell>
				<TableCell align='right' sx={{ color: '#02466a' }}>
					الكمية
				</TableCell>
				<TableCell align='right' sx={{ color: '#02466a' }}>
					نشر
				</TableCell>
				<TableCell sx={{ color: '#02466a' }}> اجراء</TableCell>
			</TableRow>
		</TableHead>
	);
}

EnhancedTableHead.propTypes = {
	numSelected: PropTypes.number.isRequired,
	onRequestSort: PropTypes.func.isRequired,
	onSelectAllClick: PropTypes.func.isRequired,
	order: PropTypes.oneOf(['asc', 'desc']).isRequired,
	orderBy: PropTypes.string.isRequired,
	rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
	const { numSelected, onClick, rowCount, onSelectAllClick } = props;

	return (
		<Toolbar
			sx={{
				pl: { sm: 2 },
				pr: { xs: 1, sm: 1 },

				display: 'flex',
				justifyContent: 'space-between',
				flexDirection: 'row-reverse',
			}}
		>
			<div className=' d-flex flex-row-reverse  justify-content-between align-items-center '>
				<div></div>
				{numSelected > 0 && (
					<div>
						<Tooltip onClick={onClick} className='delete-all'>
							<IconButton>
								<DeletteIcon />
								حذف الكل
							</IconButton>
						</Tooltip>

						<Tooltip className='switch-all'>
							<IconButton>
								<Switch />
								تعطيل الكل
							</IconButton>
						</Tooltip>
					</div>
				)}
			</div>

			<div className=' d-flex align-items-center flex-row-reverse pe-2'>
				<h2
					className='h4'
					style={{
						fontSize: '20px',
						fontWeight: '500',
						color: '#02466a',
					}}
				>
					تحديد الكل
				</h2>

				<Checkbox
					sx={{
						color: '#356b88',
						'& .MuiSvgIcon-root': {
							color: '#356b88',
						},
					}}
					indeterminate={numSelected > 0 && numSelected < rowCount}
					checked={rowCount > 0 && numSelected === rowCount}
					onChange={onSelectAllClick}
					inputProps={{
						'aria-label': 'select all desserts',
					}}
				/>
			</div>
		</Toolbar>
	);
}

EnhancedTableToolbar.propTypes = {
	numSelected: PropTypes.number.isRequired,
};

export default function BigProductsTable() {
	// Get Data From Redux Store
	const rows = useSelector((state) => state.BigProductsTableData);

	const [order, setOrder] = React.useState('asc');
	const [orderBy, setOrderBy] = React.useState('calories');
	const [selected, setSelected] = React.useState([]);
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);
	const [data, setData] = React.useState(rows);

	const handleRequestSort = (property) => {
		const isAsc = orderBy === property && order === 'asc';
		setOrder(isAsc ? 'desc' : 'asc');
		setOrderBy(property);
	};

	const handleSelectAllClick = (event) => {
		if (event.target.checked) {
			const newSelected = data.map((n) => n.name);
			setSelected(newSelected);
			return;
		}
		setSelected([]);
	};

	function deleteItems() {
		const array = [...data];
		selected.forEach((item, idx) => {
			const findIndex = array.findIndex((i) => item === i.name);
			array.splice(findIndex, 1);
		});
		setData(array);
		setSelected([]);
	}

	function deleteItems() {
		Swal.fire({
			title: 'هل أنت متأكد!',
			text: 'سيتم حذف جميع منتجات المتجر وهذةالخظوة غير قابلة للرجوع',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#02466a',
			cancelButtonColor: '#ffffff',
			confirmButtonText: 'تأكيد الحذف',
			cancelButtonText: 'الغاء الحذف',
		}).then((result) => {
			// Delete ALL function
			if (result.isConfirmed) {
				const array = [...data];
				selected.forEach((item, idx) => {
					const findIndex = array.findIndex((i) => item === i.idx);
					array.splice(findIndex, 1);
				});
				setData(array);
				setSelected([]);

				let timerInterval;

				// success message
				Swal.fire({
					title: 'تم حذف جميع منتجات المتجر بنجاح',
					icon: 'success',
					timer: 4000,
					showCloseButton: true,
					timerProgressBar: true,
					showConfirmButton: false,

					willClose: () => {
						clearInterval(timerInterval);
					},
				});
			}
		});
	}

	const handleClick = (event, name) => {
		const selectedIndex = selected.indexOf(name);
		let newSelected = [];

		if (selectedIndex === -1) {
			newSelected = newSelected.concat(selected, name);
		} else if (selectedIndex === 0) {
			newSelected = newSelected.concat(selected.slice(1));
		} else if (selectedIndex === selected.length - 1) {
			newSelected = newSelected.concat(selected.slice(0, -1));
		} else if (selectedIndex > 0) {
			newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
		}

		setSelected(newSelected);
	};

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	const isSelected = (name) => selected.indexOf(name) !== -1;

	// Avoid a layout jump when reaching the last page with empty rows.
	const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

	return (
		<Box sx={{ width: '100%' }}>
			<Paper sx={{ width: '100%', mb: 2 }}>
				<EnhancedTableToolbar onClick={deleteItems} numSelected={selected.length} rowCount={data.length} onSelectAllClick={handleSelectAllClick} />
				<TableContainer>
					<Table sx={{ minWidth: 750 }} aria-labelledby='tableTitle'>
						<EnhancedTableHead numSelected={selected.length} order={order} orderBy={orderBy} onSelectAllClick={handleSelectAllClick} onRequestSort={handleRequestSort} rowCount={data.length} />

						<TableBody>
							{/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.sort(getComparator(order, orderBy)).slice() */}
							{stableSort(data, getComparator(order, orderBy))
								.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
								.map((row, index) => {
									const isItemSelected = isSelected(row.productNumber);
									const labelId = `enhanced-table-checkbox-${index}`;

									return (
										<TableRow
											hover
											//   onClick={(event) => handleClick(event, row.name)}
											role='checkbox'
											aria-checked={isItemSelected}
											tabIndex={-1}
											key={index}
											selected={isItemSelected}
										>
											<TableCell component='th' id={labelId} scope='row' align='right'>
												<div className='flex items-center gap-2'>
													<Checkbox
														sx={{
															color: '#356b88',
															'& .MuiSvgIcon-root': {
																color: '#356b88',
															},
														}}
														checked={isItemSelected}
														onClick={(event) => handleClick(event, row.productNumber)}
														inputProps={{
															'aria-labelledby': labelId,
														}}
													/>
													{row.productNumber}
												</div>
											</TableCell>

											<TableCell align='center'>{row.SKU}</TableCell>
											<TableCell align='right'>
												<div className='cate-prim d-flex align-items-center'>
													<img src={row.productImg} alt='img' />
													<span className='me-3'>{row.productName}</span>
												</div>
											</TableCell>
											<TableCell align='center'>{row.productCategory}</TableCell>
											<TableCell align='center'>{row.price}</TableCell>
											<TableCell align='center'> {row.total}</TableCell>

											<TableCell align='center'>
												<div className='form-check form-switch'>
													<Switch
														// checked={row.opened}
														onChange={() => {
															const findIndex = data.findIndex((item) => item.productNumber === row.productNumber);

															const arr = [...data];

															arr[findIndex].opened = !arr[findIndex].opened;
															setData(arr);
														}}
														className=''
														sx={{
															'& .Mui-checked .MuiSwitch-thumb': {
																backgroundColor: '#3AE374',
															},
															'&.MuiSwitch-root .Mui-checked+.MuiSwitch-track': {
																backgroundColor: '#3AE374',
															},
														}}
													/>
												</div>
											</TableCell>

											<TableCell align='right'>
												<div className='actions d-flex justify-content-evenly'>
													<Link to={`EditProduct-${row.productNumber}`} style={{ cursor: 'pointer' }}>
														<img src={row.editIcon} alt='edit' title='edit' />
													</Link>
													<span>
														<DeletteIcon
															onClick={() => {
																const findIndex = data.findIndex((item) => item.productNumber === row.productNumber);
																const arr = [...data];
																arr.splice(findIndex, 1);
																setData(arr);
															}}
															style={{
																cursor: 'pointer',
																color: 'red',
																fontSize: '1.2rem',
															}}
														></DeletteIcon>
													</span>
												</div>
											</TableCell>
										</TableRow>
									);
								})}
							{emptyRows > 0 && (
								<TableRow
									style={{
										height: 53 * emptyRows,
									}}
								>
									<TableCell colSpan={6} />
								</TableRow>
							)}
						</TableBody>
					</Table>
				</TableContainer>
			</Paper>
			<TablePagination />
		</Box>
	);
}
