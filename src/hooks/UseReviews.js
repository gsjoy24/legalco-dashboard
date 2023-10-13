'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';

const UseReviews = () => {
	const [refetch, setRefetch] = useState(false);
	const [reviews, setReviews] = useState(null);

	useEffect(() => {
		(async () => {
			try {
				const response = await axios(`/api/reviews`);
				setReviews(response.data);
			} catch (error) {
				// Handle error
				console.error(error);
			}
		})();
	}, [refetch]);
	return [reviews, refetch, setRefetch];
};

export default UseReviews;
