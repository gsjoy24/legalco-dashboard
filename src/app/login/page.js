'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Login = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-[#225559] p-4">
			<motion.div
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
			>
				<h2 className="text-2xl font-extrabold text-[#225559] mb-6 text-center">Admin Dashboard Login</h2>
				<form className="space-y-4 w-full">
					<div>
						<label htmlFor="username" className="block text-sm font-medium text-gray-700">
							Username
						</label>
						<input
							type="text"
							id="username"
							name="username"
							className={`mt-1 p-3 w-full border rounded-md focus:ring-[#225559] focus:border-[#225559]`}
							placeholder="Enter your username"
							required
						/>
					</div>
					<div>
						<label htmlFor="password" className="block text-sm font-medium text-gray-700">
							Password
						</label>
						<input
							type="password"
							id="password"
							name="password"
							className={`mt-1 p-3 w-full border rounded-md focus:ring-[#225559] focus:border-[#225559]`}
							placeholder="Enter your password"
							required
						/>
					</div>
					<button
						type="submit"
						className={`w-full bg-[#225559] text-white py-3 rounded-md hover:bg-[#173639] focus:outline-none focus:ring focus:ring-[#225559] transition duration-300`}
					>
						Log In
					</button>
				</form>
				<p className="mt-4 text-sm text-gray-600">
					Don't have an account?{' '}
					<Link href="/signup" className={`text-[#225559] hover:text-[#173639]`}>
						Sign Up
					</Link>
				</p>
			</motion.div>
		</div>
	);
};

export default Login;
