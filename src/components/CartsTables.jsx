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
// import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import { TextField } from '@mui/material';

import TablePagination from './TablePagination';
// Import icon
import { FiSearch } from 'react-icons/fi';
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
				<TableCell></TableCell>
				<TableCell sx={{ color: '#02466a' }} align='right'>
					{' '}
					م
				</TableCell>
				<TableCell sx={{ color: '#02466a' }} align='center'>
					اسم العميل
				</TableCell>
				<TableCell sx={{ color: '#02466a' }} align='right'>
					{' '}
					تاريخ السلة
				</TableCell>
				<TableCell sx={{ color: '#02466a' }}> عدد المنتجات</TableCell>
				<TableCell sx={{ color: '#02466a' }}> احمالي السلة</TableCell>
				<TableCell sx={{ color: '#02466a' }} align='right'>
					{' '}
					الحالة
				</TableCell>
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
				...(numSelected > 0 && {
					bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
				}),
				display: 'flex',
				justifyContent: 'space-between',
				flexDirection: 'row-reverse',
			}}
		>
			<div className='search-input-box'>
				<FiSearch />
				<TextField id='outlined-basic' label='ابحث عن طريق اسم الكوبون ' variant='outlined' />
			</div>

			<div className=' d-flex flex-row-reverse  justify-content-between align-items-center '>
				<div></div>
				{numSelected > 0 && (
					<Tooltip onClick={onClick} title='Delete'>
						<IconButton>
							<DeleteIcon />
						</IconButton>
					</Tooltip>
				)}

				{numSelected > 0 && (
					<Typography sx={{}} color='inherit' variant='subtitle1' component='div'>
						{numSelected} selected
					</Typography>
				)}
			</div>

			<div className=' d-flex align-items-center flex-row-reverse'>
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

export default function CartsTables() {
	// Get Data From Redux Store
	const rows = useSelector((state) => state.CartsTablesData);
	console.log(rows);

	const [order, setOrder] = React.useState('asc');
	const [orderBy, setOrderBy] = React.useState('calories');
	const [selected, setSelected] = React.useState([]);
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(5);
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
									const isItemSelected = isSelected(row.id);
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
											<TableCell component='th' id={labelId} scope='row'>
												<div className='flex items-center gap-2'>
													<Checkbox
														sx={{
															color: '#356b88',
															'& .MuiSvgIcon-root': {
																color: '#356b88',
															},
														}}
														checked={isItemSelected}
														onClick={(event) => handleClick(event, row.id)}
														inputProps={{
															'aria-labelledby': labelId,
														}}
													/>
												</div>
											</TableCell>
											<TableCell>{row.id}</TableCell>

											<TableCell>
												<div className='cate-prim'>
													<img src={row.icon} alt='img' className=' rounded-circle' />
													<span className='me-3'>{row.name}</span>
												</div>
											</TableCell>
											<TableCell>{row.cartDate}</TableCell>
											<TableCell align='center'>{row.numOfProducts}</TableCell>

											<TableCell align='center'>{row.cartTotal}</TableCell>

											<TableCell align='left'>{row.status}</TableCell>
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
