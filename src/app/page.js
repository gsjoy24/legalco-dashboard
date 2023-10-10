'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const RedirectToHome = () => {
	const router = useRouter();
	useEffect(() => {
		router.push('/dashboard');
	}, [router]);
	return (
		<div className="min-h-screen flex items-center justify-center bg-teal-800 text-white">
			<div>Redirecting...</div>
		</div>
	);
};

export default RedirectToHome;
