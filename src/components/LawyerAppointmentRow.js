'use client';
import Link from 'next/link';
import { FaSquarePen } from 'react-icons/fa6';
import { MdDelete } from 'react-icons/md';
import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import TimeZoneConverter from './TimeZoneConverter';
import moment from 'moment/moment';

const LawyerAppointmentRow = ({ appointment, idx }) => {
	const [isDeleting, setIsDeleting] = useState(false);

	const deleteAppointment = (id) => {
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			showCancelButton: true,
			confirmButtonColor: '#465AF7',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!'
		}).then(async (result) => {
			if (result.isConfirmed) {
				setIsDeleting(true);
				const res = await axios.delete('/api/blog', { data: { id } });
				const data = res.data;
				if (data.deletedCount === 1) {
					Swal.fire({
						title: 'Deleted!',
						text: 'Your blog has been deleted!',
						timer: 2000,
						showConfirmButton: false
					});
					setRefetch(!refetch);
				} else {
					toast.error('Something went wrong! Please try again!');
				}
				setIsDeleting(false);
			}
		});
	};

	return (
		<tr>
			<th>
				<label>{idx + 1}</label>
			</th>
			<td className="min-w-[200px]">
				<Link
					target="_blank"
					href={`https://www.legalco.com.bd/blogs/${appointment?._id}`}
					className="font-bold hover:underline"
				>
					{appointment?.name}
				</Link>
			</td>
			<td>{appointment?.lawyerName}</td>
			<td>{moment(appointment?.timestamp).fromNow()}</td>
			<td>
                <button className='hover:text-blue-600 hover:underline'>Details</button>
            </td>
			<th>
				<span className="flex items-center gap-3">
					<button
						disabled={isDeleting}
						onClick={() => deleteAppointment(appointment?._id)}
						title="delete"
						className="hover:text-red-500 duration-200"
					>
						{isDeleting ? <span className="loading loading-spinner loading-sm"></span> : <MdDelete size={25} />}
					</button>
				</span>
			</th>
		</tr>
	);
};

export default LawyerAppointmentRow;
