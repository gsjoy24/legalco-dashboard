'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';

const UseLawyer = () => {
	const [control, setControl] = useState(false);
    const [lawyers,setLawyers] = useState(null);
    const ReFetch = () => {
        setControl(!control);
    }
	useEffect(() => {
		(async () => {
			try {
				const response = await axios(`/api/lawyers`);
				setLawyers(response.data);
			} catch (error) {
				// Handle error
				console.error(error);
			}
		})();
	}, [control]);
	return {lawyers,ReFetch};
};

export default UseLawyer;
