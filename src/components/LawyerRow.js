'use client';
import Link from 'next/link';
import { FaSquarePen } from 'react-icons/fa6';
import { MdDelete } from 'react-icons/md';
import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import TimeZoneConverter from './TimeZoneConverter';

const LawyerRow = ({ lawyer, idx ,ReFetch}) => {
	const [isDeleting, setIsDeleting] = useState(false);

	const DeleteLawyer = (id) => {
		Swal.fire({
			icon:  "warning",
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			showCancelButton: true,
			confirmButtonColor: '#465AF7',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!'
		}).then(async (result) => {
			if (result.isConfirmed) {
				setIsDeleting(true);
				const res = await axios.delete('/api/lawyers', { data: { id } });
				const data = res.data;
				if (data.deletedCount > 0) {
					ReFetch();
					Swal.fire({
						icon: "success",
						title: 'Deleted!',
						text: 'Your Lawyer has been deleted!',
						timer: 1500,
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
			<td className="min-w-[200px]">
				<button
					className="font-bold hover:underline"
				>
					{lawyer?.name}
				</button>
			</td>
			<td className="">{lawyer?.department}</td>
			<td className="">{lawyer?.designation}</td>
			<td>{lawyer?.contacts?.email}</td>
			<td>{lawyer?.contacts?.phone}</td>
			<th>
				<span className="flex justify-center items-center gap-3">
					<button
						disabled={isDeleting}
						onClick={() => DeleteLawyer(lawyer?._id)}
						title="delete"
						className="hover:text-red-500 duration-200"
					>
						{isDeleting ? <span className="loading loading-spinner loading-sm"></span> : <MdDelete size={25} />}
					</button>
					{/* <Link href={`/update-blog/${lawyer?._id}`} title="update" className="hover:text-[#465AF7] duration-200"> */}
						<FaSquarePen size={25} title='Not Work Yet'/>
					{/* </Link> */}
				</span>
			</th>
		</tr>
	);
};

export default LawyerRow;
