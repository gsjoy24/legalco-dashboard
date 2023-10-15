import React from 'react';
import { FaBarsStaggered, FaClipboardList, FaUserGraduate } from 'react-icons/fa6';
import { FaUsersCog } from 'react-icons/fa';
import { MdEditDocument, MdReviews } from 'react-icons/md';
import { BiArrowFromRight, BiSolidBarChartSquare } from 'react-icons/bi';
import { HiUserGroup } from 'react-icons/hi';
import { PiUserListFill } from "react-icons/pi";
const Dashboard = () => {
	return (
		<div>
			<div className="grid grid-cols-3">
				<div className="bg-green-600 text-white p-10 rounded-tl-2xl rounded-br-2xl text-center">
					<p></p>
					<h2 className='text-2xl'> General Appointment</h2>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
