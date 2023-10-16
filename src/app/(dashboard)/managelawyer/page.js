"use client"
import LawyerRow from '@/components/LawyerRow';
import Loading from '@/components/Loading';
import UseLawyer from '@/hooks/UseLawyer';
import React, { useState } from 'react';


const ManageLawyerPage = () => {
    const {lawyers,ReFetch} = UseLawyer();

	return (lawyers && Array.isArray(lawyers)) ? (
		<>
			<h1 className="md:text-2xl mb-5 text-xl font-bold">All Lawyer</h1>
			<div className="mx-auto overflow-x-auto">
				<table className="table min-w-full border">
					{/* head */}
					<thead>
						<tr>
							<th>#</th>
							<th>Name</th>
							<th>Department</th>
							<th>Designation</th>
							<th>Email</th>
							<th>Phone</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{/* rows */}
						{lawyers &&
							lawyers.map((lawyer,idx) => (
								<LawyerRow lawyer={lawyer} ReFetch={ReFetch} idx={idx} key={lawyer._id} />
							))}
					</tbody>
					{/* foot */}
					<tfoot>
						<tr>
							<th>#</th>
							<th>Name</th>
							<th>Department</th>
							<th>Designation</th>
							<th>Email</th>
							<th>Phone</th>
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

export default ManageLawyerPage;