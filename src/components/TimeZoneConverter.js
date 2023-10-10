import { useState, useEffect } from 'react';

const TimeZoneConverter = ({ inputDate }) => {
	const [formattedDate, setFormattedDate] = useState('');

	useEffect(() => {
		const timeZoneName = Intl.DateTimeFormat().resolvedOptions().timeZone;
		const inputDateObject = new Date(inputDate);
		const formatter = new Intl.DateTimeFormat('en-US', {
			timeZone: timeZoneName,
			year: 'numeric',
			month: '2-digit',
			day: '2-digit',
			hour: '2-digit',
			minute: '2-digit'
		});

		// Format the date in the target time zone
		const formatted = formatter.format(inputDateObject);

		setFormattedDate(formatted);
	}, [inputDate]);

	return <p>{formattedDate}</p>;
};

export default TimeZoneConverter;
