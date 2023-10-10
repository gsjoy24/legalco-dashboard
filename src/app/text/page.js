'use client';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Editor = () => {
	const [value, setValue] = useState('');
	console.log(value);

	const modules = {
		toolbar: [
			[{ header: [1, 2, 3, 4, 5, 6, false] }],
			[{ font: [] }],
			[{ size: [] }],
			['bold', 'italic', 'underline', 'strick', 'blockquote'],
			[{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
			['link', 'image', 'video']
		]
	};

	return <ReactQuill theme="snow" value={value} onChange={setValue} modules={modules} />;
};

export default Editor;
