'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';

const UseAdmins = () => {
	const [admins, setAdmins] = useState(null);
	const [refetch, setRefetch] = useState(false);

	useEffect(() => {
		(async () => {
			try {
				const response = await axios(`/api/admins`);
				setAdmins(response.data);
			} catch (error) {
				// Handle error
				console.error(error);
			}
		})();
	}, [refetch]);

	return [admins, refetch, setRefetch];
};

export default UseAdmins;
