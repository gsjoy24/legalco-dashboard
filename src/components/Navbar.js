'use client';
import Link from 'next/link';
import { FaBarsStaggered, FaClipboardList, FaUserGraduate } from 'react-icons/fa6';
import { FaUsersCog } from 'react-icons/fa';
import { MdEditDocument, MdReviews } from 'react-icons/md';
import { BiArrowFromRight, BiSolidBarChartSquare } from 'react-icons/bi';
import { HiUserGroup } from 'react-icons/hi';
import { PiUserListFill } from 'react-icons/pi';
import { usePathname, useRouter } from 'next/navigation';
import { UserAuth } from '@/Providers/AuthProvider';
const AdminNavbar = ({ children }) => {
	const { logOutUser } = UserAuth();
	const router = useRouter();
	const handleLogout = () => {
		logOutUser();
		router.push('/login');
	};
	const path = usePathname();
	//  this function will close the mobile navigation when a user clicks on any route!
	const closeSideNAv = () => {
		const checkbox = document.getElementById('my-drawer-2');
		if (checkbox.checked) {
			checkbox.checked = false;
		}
	};

	return (
		<div className="drawer lg:drawer-open bg-[#cdeced]">
			<input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content">
				{/* Page content here */}
				<div className="lg:hidden flex items-center justify-between w-full px-6 py-2 border-b shadow-md text-[#225559]">
					<div className="text-2xl font-bold">
						<Link href="/dashboard">LegalCo</Link>
					</div>
					<label htmlFor="my-drawer-2" className="drawer-button">
						<FaBarsStaggered />
					</label>
				</div>
				<div className="lg:p-7 p-2">{children}</div>
			</div>
			<div className="drawer-side z-50">
				<label htmlFor="my-drawer-2" className="drawer-overlay"></label>
				<ul className="menu w-60 min-h-full space-y-3 bg-[#225559] text-white">
					<div className="text-4xl p-4 font-bold border-b border-gray-300 text-white">
						<Link href="/dashboard">LegalCo</Link>
					</div>

					<li
						className={`hover:bg-[#fff] hover:text-[#225559] duration-200 rounded-md ${
							path == '/dashboard' && 'bg-[#fff] text-[#225559]'
						}`}
					>
						<Link href={'/dashboard'} className={`flex items-center py-3 `}>
							<BiSolidBarChartSquare size={20} /> <span>Dashboard</span>
						</Link>
					</li>
					<li
						className={`hover:bg-[#fff] hover:text-[#225559] duration-200 rounded-md ${
							path == '/appointment' && 'bg-[#fff] text-[#225559]'
						}`}
					>
						<Link onClick={closeSideNAv} className={`flex items-center py-3`} href="/appointment">
							<FaClipboardList size={20} /> <span>Appointment</span>
						</Link>
					</li>
					<li
						className={`hover:bg-[#fff] hover:text-[#225559] duration-200 rounded-md ${
							path == '/lawyer-appointment' && 'bg-[#fff] text-[#225559]'
						}`}
					>
						<Link onClick={closeSideNAv} className={`flex items-center py-3`} href="/lawyer-appointment">
							<PiUserListFill size={20} /> <span>Lawyer Appointment</span>
						</Link>
					</li>
					<li
						className={`hover:bg-[#fff] hover:text-[#225559] duration-200 rounded-md ${
							path == '/add-lawyer' && 'bg-[#fff] text-[#225559]'
						}`}
					>
						<Link onClick={closeSideNAv} className={`flex items-center py-3`} href="/add-lawyer">
							<FaUserGraduate size={20} /> <span>Add Lawyer</span>
						</Link>
					</li>
					<li
						className={`hover:bg-[#fff] hover:text-[#225559] duration-200 rounded-md ${
							path == '/manage-lawyer' && 'bg-[#fff] text-[#225559]'
						}`}
					>
						<Link onClick={closeSideNAv} className={`flex items-center py-3`} href="/manage-lawyer">
							<FaUsersCog size={20} /> <span>Manage Lawyer</span>
						</Link>
					</li>
					<li
						className={`hover:bg-[#fff] hover:text-[#225559] duration-200 rounded-md ${
							path == '/add-new-blog' && 'bg-[#fff] text-[#225559]'
						}`}
					>
						<Link
							onClick={closeSideNAv}
							className={`flex items-center py-3 ${path == '/add-new-blog' && 'bg-[#225559] text-white'}`}
							href="/add-new-blog"
						>
							<MdEditDocument size={20} /> <span>Add New Blog</span>
						</Link>
					</li>
					<li
						className={`hover:bg-[#fff] hover:text-[#225559] duration-200 rounded-md ${
							path == '/blogs' && 'bg-[#fff] text-[#225559]'
						}`}
					>
						<Link
							onClick={closeSideNAv}
							className={`flex items-center py-3 ${path == '/blogs' && 'bg-[#225559] text-white'}`}
							href="/blogs"
						>
							<HiUserGroup size={20} /> <span>Manage Blogs</span>
						</Link>
					</li>
					<li
						className={`hover:bg-[#fff] hover:text-[#225559] duration-200 rounded-md ${
							path == '/manage-admins' && 'bg-[#fff] text-[#225559]'
						}`}
					>
						<Link onClick={closeSideNAv} className={`flex items-center py-3`} href="/manage-admins">
							<HiUserGroup size={20} /> <span>Manage Admins</span>
						</Link>
					</li>
					<li
						className={`hover:bg-[#fff] hover:text-[#225559] duration-200 rounded-md ${
							path == '/reviews' && 'bg-[#fff] text-[#225559]'
						}`}
					>
						<Link onClick={closeSideNAv} className={`flex items-center py-3`} href="/reviews">
							<MdReviews size={20} /> <span>Manage Reviews</span>
						</Link>
					</li>
					{/* logout button */}
					<li className={`hover:bg-[#fff] hover:text-[#225559] duration-200 rounded-md `}>
						<button onClick={handleLogout}>
							<BiArrowFromRight size={20} />
							<span>Log Out</span>
						</button>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default AdminNavbar;
