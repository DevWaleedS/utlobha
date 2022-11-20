import React from 'react';
import { useDropzone } from 'react-dropzone';

const DropCSVFiles = (props) => {
	const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

	const files = acceptedFiles.map((file) => (
		<li key={file.path}>
			{file.path} - {file.size} bytes
		</li>
	));
	return (
		<div {...getRootProps({ className: 'dropzone' })}>
			<input {...getInputProps()} />
			{files.length <= 0 ? <p>Drop CSV file</p> : <p className='d-none'> Drop CSV file</p>}

			<ul>{files}</ul>
		</div>
	);
};

export default DropCSVFiles;
