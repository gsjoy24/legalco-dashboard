import React from 'react';
import Link from 'next/link';
import { UserAuth } from '@/Providers/AuthProvider';
import { useRouter } from 'next/navigation';

const NotifyPage = () => {
	const { logOutUser } = UserAuth();
	const router = useRouter();
	const handleLogout = () => {
		logOutUser();
		router.push('/login');
	};
	return (
		<div className="flex flex-col items-center justify-center min-h-screen  bg-[#225559] text-white p-8">
			<div className="max-w-md text-center">
				<h1 className="text-3xl font-extrabold mb-6">Account Created Successfully!</h1>
				<p className="text-lg mb-4">
					Congratulations! You have successfully created an account. Please wait for the admins to grant you access to
					the dashboard.
				</p>
				<p className="text-lg mb-6">If you have any urgent concerns, feel free to contact us:</p>
				<Link href="mailto:legalco668@gmail.com" className="text-xl hover:text-indigo-200 transition duration-300">
					legalco668@gmail.com
				</Link>
				<button className="mt-3 block mx-auto" onClick={handleLogout}>
					Log Out
				</button>
			</div>
		</div>
	);
};

export default NotifyPage;
