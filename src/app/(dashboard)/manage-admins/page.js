'use client';
import Loading from '@/components/Loading';
import TimeZoneConverter from '@/components/TimeZoneConverter';
import UseAdmins from '@/hooks/UseAdmins';
import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { BiSolidUserCircle } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';

const Admins = () => {
	const [loading, setLoading] = useState(false);
	const [admins, refetch, setRefetch] = UseAdmins();

	// this function will change the user role on the database.
	const changeUserRole = async (role, id) => {
		setLoading(true);
		const res = await axios.put('/api/admins', { role, id });
		const data = res.data;
		setLoading(false);
		if (data && data?.modifiedCount) {
			setRefetch(!refetch);
			toast.success(`${role === 'admin' ? 'Access Removed!' : 'Access Granted!'}`);
		} else {
			toast.error('Something went wrong! Please try again!');
		}
	};

	return admins && Array.isArray(admins) ? (
		<>
			<h1 className="md:text-2xl mb-5 text-xl font-bold">All registered users</h1>
			<div className="mx-auto overflow-x-auto max-w-[330px] sm:max-w-[620px] md:max-w-[740px] lg:max-w-[830px]">
				<table className="table min-w-full">
					{/* head */}
					<thead>
						<tr>
							<th>
								<label>#</label>
							</th>
							<th>Admin</th>
							<th>Email</th>
							<th>Regi. time & Date</th>
							<th>Access</th>
						</tr>
					</thead>
					<tbody>
						{/* row 1 */}
						{admins &&
							admins.map((admin, i) => (
								<tr key={admin?._id}>
									<th>
										<label>{i + 1}</label>
									</th>
									<td>
										<div className="flex items-center space-x-3">
											<BiSolidUserCircle size={20} />
											<div className="font-bold">{admin?.name}</div>
										</div>
									</td>
									<td>
										<span className="flex items-center gap-2">
											<MdEmail size={18} />
											{admin.email}
										</span>
									</td>
									<td>
										<TimeZoneConverter inputDate={admin?.timestamp} />
									</td>
									<th>
										<span className="relative">
											{admin?.role === 'admin' ? 'Granted' : 'Not Granted'}
											<div className="dropdown dropdown-end -top-2 -right-4 absolute">
												<label tabIndex={0}>
													<BsFillInfoCircleFill size={13} />
												</label>
												<ul
													onClick={() => changeUserRole(admin.role, admin._id)}
													tabIndex={0}
													className="dropdown-content z-[1] menu shadow rounded-box bg-[#465AF7] hover:bg-[#2d42e3] text-[#f3f3f3] hover:text-white w-28"
												>
													<li className="flex items-center justify-center text-xs">
														{loading ? 'loading' : <>{admin?.role === 'admin' ? 'Remove Access' : 'Give Access'}</>}
													</li>
												</ul>
											</div>
										</span>
									</th>
								</tr>
							))}
					</tbody>
					{/* foot */}
					<tfoot>
						<tr>
							<th>
								<label>#</label>
							</th>
							<th>Admin</th>
							<th>Email</th>
							<th>Regi. Time & Date</th>
							<th>Access</th>
						</tr>
					</tfoot>
				</table>
			</div>
		</>
	) : (
		<Loading />
	);
};

export default Admins;
