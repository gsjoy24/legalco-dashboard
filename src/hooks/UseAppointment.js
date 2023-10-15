'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';

const UseAppointment = () => {
	const [control, setControl] = useState(false);
    const [appointments,setAppointments] = useState(null);
    const ReFetch = () => {
        setControl(!control);
    }
	useEffect(() => {
		(async () => {
			try {
				const response = await axios(`/api/appointment`);
				setAppointments(response.data);
			} catch (error) {
				// Handle error
				console.error(error);
			}
		})();
	}, [control]);
	return {appointments, ReFetch};
};

export default UseAppointment;
