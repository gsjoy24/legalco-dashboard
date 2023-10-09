'use client';
import { UserAuth } from '@/Providers/AuthProvider';
import axios from 'axios';
import { useEffect, useState } from 'react';

const UseGetCurrentUser = () => {
	const [userDataLoading, setUserDataLoading] = useState(false);
	const { user } = UserAuth();
	const [currentUser, setCurrentUser] = useState(null);
	useEffect(() => {
		setUserDataLoading(true);
		(async () => {
			try {
				if (user?.email) {
					const response = await axios(`/api/admins?email=${user?.email}`);
					setCurrentUser(response.data);
					console.log(response.data);
				}
			} catch (error) {
				// Handle error
				console.error(error);
			} finally {
				setUserDataLoading(false);
			}
		})();
	}, [user]);
	return [currentUser, userDataLoading];
};

export default UseGetCurrentUser;
