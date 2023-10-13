'use client';
import Link from 'next/link';
import { FaSquarePen } from 'react-icons/fa6';
import { MdDelete } from 'react-icons/md';
import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import TimeZoneConverter from './TimeZoneConverter';

const BlogRow = ({ blog, i, refetch, setRefetch }) => {
	const [isDeleting, setIsDeleting] = useState(false);

	const deleteBlog = (id) => {
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
				<label>{i + 1}</label>
			</th>
			<td className="min-w-[200px]">
				<Link
					target="_blank"
					href={`https://www.legalco.com.bd/blogs/${blog?._id}`}
					className="font-bold hover:underline"
				>
					{blog?.title}
				</Link>
			</td>
			<td className="flex flex-col gap-2">{blog?.subtitle}</td>
			<td>
				<TimeZoneConverter inputDate={blog?.timestamp} />
			</td>
			<th>
				<span className="flex justify-center items-center gap-3">
					<button
						disabled={isDeleting}
						onClick={() => deleteBlog(blog?._id)}
						title="delete"
						className="hover:text-red-500 duration-200"
					>
						{isDeleting ? <span className="loading loading-spinner loading-sm"></span> : <MdDelete size={25} />}
					</button>
					<Link href={`/update-blog/${blog?._id}`} title="update" className="hover:text-[#465AF7] duration-200">
						<FaSquarePen size={25} />
					</Link>
				</span>
			</th>
		</tr>
	);
};

export default BlogRow;
