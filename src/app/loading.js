'use client';
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { UserAuth } from '@/Providers/AuthProvider';

const Loading = () => {
	const router = useRouter();
	const { user } = UserAuth();

	useEffect(() => {
		const redirectTimeout = setTimeout(() => {
			router.push('/login'); // Redirect to the login page after 5 seconds
		}, 5000);

		return () => {
			clearTimeout(redirectTimeout);
		};
	}, [user, router]);

	return (
		<div className="flex items-center justify-center min-h-screen bg-[#225559]">
			<motion.div
				className="text-white text-4xl font-semibold"
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				Loading...
			</motion.div>
		</div>
	);
};

export default Loading;
