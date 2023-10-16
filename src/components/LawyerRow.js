'use client';
import Link from 'next/link';
import { FaEnvelope, FaPhone, FaSquarePen } from 'react-icons/fa6';
import { MdDelete } from 'react-icons/md';
import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import TimeZoneConverter from './TimeZoneConverter';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaLocationDot, FaTwitter } from 'react-icons/fa6';
import { FaTimesCircle } from 'react-icons/fa';

const LawyerRow = ({ lawyer, idx ,ReFetch}) => {
	const [isDeleting, setIsDeleting] = useState(false);
	const [show,setShow] = useState(false);
	const {name,image,description,department,socialmedia,designation,languages,contacts} = lawyer || {};
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
					className="font-bold hover:underline hover:text-blue-600"
					onClick={() => setShow(true)}
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

{/*================= Modal ======================*/}

{show &&		
			<div className="w-full h-screen fixed top-0 left-0 bg-slate-600 bg-opacity-30 flex items-center justify-center">
				<div className="grid ml-60 grid-cols-1 md:grid-cols-2 gap-10 items-center my-14 p-8 rounded-lg relative text-base bg-[#225559e1]">
					<button onClick={() => setShow(false)} className='text-4xl text-red-500 absolute -top-3 -right-3 bg-[#fff] rounded-full'><FaTimesCircle/></button>
                  <div className="flex justify-center">
                     <Image
                        className="object-cover w-full max-h-[500px] rounded-xl border-2"
                        width={300}
                        height={300}
                        src={image}
                        alt="Lawyer Image"
                     />
                  </div>

                  <div className="text-gray-50">
                     <h2 className={`text-4xl`}>
                        {name}
                     </h2>
                     <h3 className={`mt-3`}>
                        {designation}
                     </h3>
                     <h3 className="mt-5 font-medium text-lg">
                        <b>Department: </b> {department}
                     </h3>
                     <h3 className="font-medium text-lg mt-2">
                        <b>Languages: </b> {languages}
                     </h3>

					<p className="flex gap-2 mt-5 items-center">
						<FaPhone /> {contacts.phone}
					</p>
					<p className="flex gap-2 mt-2 items-center">
						<FaEnvelope /> {contacts.email}
					</p>
					<p className="flex gap-2 mt-2 items-center">
						<FaLocationDot /> {contacts.address}
					</p>

                     <ul className="flex gap-8 mt-8">
                        
{ socialmedia?.facebook &&
                        <li>
                           <a target="_blank" className="w-10 h-10 border-2 rounded-full flex items-center justify-center" href={socialmedia?.facebook}>
                              <FaFacebookF/>
                           </a>
                        </li>
}                        
{ socialmedia?.linkedin &&
                        <li>
                           <a target="_blank" className="w-10 h-10 border-2 rounded-full flex items-center justify-center" href={socialmedia?.linkedin}>
                              <FaLinkedinIn/>
                           </a>
                        </li>
}                        
{ socialmedia?.twitter &&
                        <li>
                           <a target="_blank" className="w-10 h-10 border-2 rounded-full flex items-center justify-center" href={socialmedia?.twitter}>
                              <FaTwitter/>
                           </a>
                        </li>
}                        
{ socialmedia?.instagram &&
                        <li>
                           <a target="_blank" className="w-10 h-10 border-2 rounded-full flex items-center justify-center" href={socialmedia?.instagram}>
                              <FaInstagram/>
                           </a>
                        </li>
}
                     </ul>

                  </div>
               </div>
			</div>	
}
		</tr>
	);
};

export default LawyerRow;
