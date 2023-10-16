'use client';
import { MdDelete } from 'react-icons/md';
import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import moment from 'moment/moment';
import LawyerAppointmentModal from './Modals/LawyerAppointmentModal';
import { BsEyeFill } from 'react-icons/bs';

const LawyerAppointmentRow = ({ appointment, idx, ReFetch }) => {
	const [isDeleting, setIsDeleting] = useState(false);

	const deleteAppointment = (id) => {
		Swal.fire({
			icon: 'warning',
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			showCancelButton: true,
			confirmButtonColor: '#465AF7',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!'
		}).then(async (result) => {
			if (result.isConfirmed) {
				setIsDeleting(true);
				const res = await axios.delete('/api/lawyerappointment', { data: { id } });
				const data = res.data;
				if (data.deletedCount > 0) {
					ReFetch();
					Swal.fire({
						icon: 'success',
						title: 'Deleted!',
						text: 'Your appointment has been deleted!',
						timer: 2000,
						showConfirmButton: false
					});
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
			<td className="min-w-[200px]">{appointment?.name}</td>
			<td>{appointment?.lawyerName}</td>
			<td>{moment(appointment?.timestamp).fromNow()}</td>
			<td>
				<BsEyeFill
					size={20}
					className="hover:text-[#225559] hover:scale-110 duration-200 hover:underline mx-auto"
					onClick={() => document.getElementById(`LawyerAppointment${idx}`).showModal()}
				/>
				<LawyerAppointmentModal appointment={appointment} idx={idx} />
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
