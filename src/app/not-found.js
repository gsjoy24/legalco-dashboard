'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const NotFound = () => {
	return (
		<div className="flex items-center justify-center min-h-screen bg-[#225559] text-white">
			<motion.div
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="text-center p-8 max-w-lg"
			>
				<h1 className="text-4xl font-extrabold mb-4">Oops! Page Not Found</h1>
				<p className="text-lg mb-6">The page you are looking for doesn&apos;t exist or has been moved.</p>
				<Link href="/" className="text-lg underline duration-200 hover:text-[#e4e4e4]">
					Go back to Dashboard
				</Link>
			</motion.div>
		</div>
	);
};

export default NotFound;
