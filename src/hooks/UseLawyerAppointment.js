'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';

const UseLawyerAppointment = () => {
	const [control, setControl] = useState(false);
    const [lawyerAppointments,setLawyerAppointments] = useState(null);
    const ReFetch = () => {
        setControl(!control);
    }
	useEffect(() => {
		(async () => {
			try {
				const response = await axios(`/api/lawyerappointment`);
				setLawyerAppointments(response.data);
			} catch (error) {
				// Handle error
				console.error(error);
			}
		})();
	}, [control]);
	return {lawyerAppointments, ReFetch};
};

export default UseLawyerAppointment;
