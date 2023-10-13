'use client';
import Link from 'next/link';
import { FaSquarePen } from 'react-icons/fa6';
import { MdDelete } from 'react-icons/md';
import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import TimeZoneConverter from './TimeZoneConverter';
import { BsEyeFill, BsFillStarFill } from 'react-icons/bs';
import Image from 'next/image';
import ReviewModal from './ReviewModal';

const ReviewRow = ({ review, i, refetch, setRefetch }) => {
	const [isDeleting, setIsDeleting] = useState(false);

	const deleteReview = (id) => {
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			showCancelButton: true,
			confirmButtonColor: '#225559',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!'
		}).then(async (result) => {
			if (result.isConfirmed) {
				setIsDeleting(true);
				const res = await axios.delete('/api/reviews', { data: { id } });
				const data = res.data;
				if (data.deletedCount === 1) {
					Swal.fire({
						title: 'Deleted!',
						text: 'The review has been deleted!',
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
				<label>{i + 1}</label>
			</th>
			<td className="min-w-[175px]">
				<div className="flex items-center gap-3">
					<Image
						className="rounded-lg w-[40px] h-[40px] object-cover"
						src={review?.photoUrl}
						alt={review?.name}
						height={40}
						width={40}
					/>
					<span>{review?.name}</span>
				</div>
			</td>
			<td className="flex flex-row items-center gap-2">
				<BsFillStarFill />
				{review?.rating}
			</td>
			<td>
				<TimeZoneConverter inputDate={review?.timestamp} />
			</td>
			<td>
				<BsEyeFill
					className="hover:scale-110 cursor-pointer duration-200"
					size={22}
					onClick={() => document.getElementById(`review${i}`).showModal()}
				/>
				<ReviewModal review={review} i={i} />
			</td>
			<th>
				<button
					disabled={isDeleting}
					onClick={() => deleteReview(review?._id)}
					title="delete"
					className="hover:text-red-500 duration-200"
				>
					{isDeleting ? <span className="loading loading-spinner loading-sm"></span> : <MdDelete size={25} />}
				</button>
			</th>
		</tr>
	);
};

export default ReviewRow;
