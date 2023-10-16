"use client"
import React from 'react';
import { FaBarsStaggered, FaClipboardList, FaUserGraduate } from 'react-icons/fa6';
import { FaUsersCog } from 'react-icons/fa';
import { MdEditDocument, MdReviews } from 'react-icons/md';
import { BiArrowFromRight, BiSolidBarChartSquare } from 'react-icons/bi';
import { HiUserGroup } from 'react-icons/hi';
import { PiUserListFill } from "react-icons/pi";
import UseAppointment from '@/hooks/UseAppointment';
import UseLawyerAppointment from '@/hooks/UseLawyerAppointment';
import UseBlogs from '@/hooks/UseBlogs';
import UseLawyer from '@/hooks/UseLawyer';
import UseReviews from '@/hooks/UseReviews';
const Dashboard = () => {
	const {appointments} = UseAppointment()
	const {lawyerAppointments} = UseLawyerAppointment()
	const [allBlogs] = UseBlogs()
	const {lawyers} = UseLawyer()
	const [reviews] = UseReviews()
	return (
		<div>
			<div className="grid grid-cols-6 gap-5">
				<div className="bg-green-600 col-span-3 text-white p-10 rounded-tl-2xl rounded-br-2xl text-center">
					<p className='text-7xl mb-5 font-bold'>
						{
						appointments ? appointments?.length : <span className="loading loading-infinity loading-lg"></span>
						}</p>
					<h2 className='text-2xl'> General Appointment</h2>
				</div>
				<div className="bg-blue-600 col-span-3 text-white p-10 rounded-tl-2xl rounded-br-2xl text-center">
					<p className='text-7xl mb-5 font-bold'>
						{
						lawyerAppointments ? lawyerAppointments?.length : <span className="loading loading-infinity loading-lg"></span>
						}</p>
					<h2 className='text-2xl'> Lawyer Appointment</h2>
				</div>
				<div className="bg-emerald-600 col-span-2 text-white p-10 rounded-tl-2xl rounded-br-2xl text-center">
					<p className='text-7xl mb-5 font-bold'>
						{
						lawyers ? lawyers?.length : <span className="loading loading-infinity loading-lg"></span>
						}</p>
					<h2 className='text-2xl'> Total Lawyer </h2>
				</div>
				<div className="bg-teal-500 col-span-2 text-white p-10 rounded-tl-2xl rounded-br-2xl text-center">
					<p className='text-7xl mb-5 font-bold'>
						{
						allBlogs ? allBlogs?.length : <span className="loading loading-infinity loading-lg"></span>
						}</p>
					<h2 className='text-2xl'> Total Blogs </h2>
				</div>
				<div className="bg-purple-700 col-span-2 text-white p-10 rounded-tl-2xl rounded-br-2xl text-center">
					<p className='text-7xl mb-5 font-bold'>
						{
						reviews ? reviews?.length : <span className="loading loading-infinity loading-lg"></span>
						}</p>
					<h2 className='text-2xl'> Total Review </h2>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
