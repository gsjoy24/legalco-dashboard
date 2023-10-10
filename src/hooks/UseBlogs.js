'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';

const UseBlogs = () => {
	const [refetch, setRefetch] = useState(false);
	const [allBlogs, setAllBlogs] = useState(null);

	useEffect(() => {
		(async () => {
			try {
				const response = await axios(`/api/blog`);
				setAllBlogs(response.data);
			} catch (error) {
				// Handle error
				console.error(error);
			}
		})();
	}, [refetch]);
	return [allBlogs, refetch, setRefetch];
};

export default UseBlogs;
