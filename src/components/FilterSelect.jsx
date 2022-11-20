import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function FilterSelect() {

	const [age, setAge] = React.useState('');
	const handleChange = (event) => {
		setAge(event.target.value);
	};

	return (

		<Box sx={{ minWidth: 150 }}>
			<FormControl fullWidth>
				<InputLabel id='demo-simple-select-label'>Filter</InputLabel>
				<Select labelId='demo-simple-select-label' id='demo-simple-select' value={age} label='Filter' onChange={handleChange}>
					<MenuItem value={10}>الأحدث</MenuItem>
					<MenuItem value={20}>الأقدم</MenuItem>
					<MenuItem value={30}>الموقع</MenuItem>
					<MenuItem value={30}>الحالة</MenuItem>
					<MenuItem value={30}>شركة الشحن</MenuItem>
					<MenuItem value={30}>نوع الطلب</MenuItem>
					<MenuItem value={30}>طريقة الدفع</MenuItem>
				</Select>
			</FormControl>
		</Box>
		
	);
}
