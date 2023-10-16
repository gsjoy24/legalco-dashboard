'use client';
import LawyerAppointmentRow from '@/components/LawyerAppointmentRow';
import Loading from '@/components/Loading';
import UseLawyerAppointment from '@/hooks/UseLawyerAppointment';

const LawyerAppointmentPage = () => {
	const { lawyerAppointments, ReFetch } = UseLawyerAppointment();

	return lawyerAppointments && Array.isArray(lawyerAppointments) ? (
		<>
			<h1 className="md:text-2xl mb-5 text-xl font-bold">All Lawyer</h1>
			<div className="mx-auto overflow-x-auto max-w-[330px] sm:max-w-[620px] md:max-w-[740px] lg:max-w-[830px]">
				<table className="table min-w-full border">
					{/* head */}
					<thead>
						<tr>
							<th>#</th>
							<th>Name</th>
							<th>Lawyer Name</th>
							<th>Time</th>
							<th>Details</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{/* rows */}
						{lawyerAppointments &&
							lawyerAppointments.map((appointment, idx) => (
								<LawyerAppointmentRow appointment={appointment} ReFetch={ReFetch} idx={idx} key={appointment._id} />
							))}
					</tbody>
					{/* foot */}
					<tfoot>
						<tr>
							<th>#</th>
							<th>Name</th>
							<th>Lawyer Name</th>
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

export default LawyerAppointmentPage;
