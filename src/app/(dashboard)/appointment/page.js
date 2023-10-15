"use client"
import AppointmentRow from '@/components/AppointmentRow';
import LawyerRow from '@/components/LawyerRow';
import Loading from '@/components/Loading';
import UseAppointment from '@/hooks/UseAppointment';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AppointmentPage = () => {
    const {appointments,ReFetch} = UseAppointment();
	return (appointments && Array.isArray(appointments)) ? (
		<>
			<h1 className="md:text-2xl mb-5 text-xl font-bold">All General Appointment</h1>
			<div className="mx-auto overflow-x-auto">
				<table className="table min-w-full border">
					{/* head */}
					<thead>
						<tr>
							<th>#</th>
							<th>Name</th>
							<th>Service Name</th>
							<th>Time</th>
							<th>Details</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{/* rows */}
						{appointments &&
							appointments.map((appointment,idx) => (
								<AppointmentRow appointment={appointment} idx={idx} ReFetch={ReFetch} key={appointment._id} />
							))}
					</tbody>
					{/* foot */}
					<tfoot>
					<tr>
							<th>#</th>
							<th>Name</th>
							<th>Service Name</th>
							<th>Time</th>
							<th>Details</th>
							<th>Action</th>
						</tr>
					</tfoot>
				</table>
			</div>
		</>
	) : (
		<Loading />
	);
};

export default AppointmentPage;