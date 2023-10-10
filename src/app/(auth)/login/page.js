'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BiSolidError } from 'react-icons/bi';
import { useRouter } from 'next/navigation';
import { UserAuth } from '@/Providers/AuthProvider';

const Login = () => {
	const router = useRouter();
	const [err, setErr] = useState('');
	const [isLoggingIn, setIsLoggingIn] = useState(false);
	const { loginWithEmail } = UserAuth();

	const handleLogIn = (event) => {
		event.preventDefault();
		setErr('');
		setIsLoggingIn(true);
		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;
		loginWithEmail(email, password)
			.then(() => router.push('/'))
			.catch((err) => {
				console.log(err.message);
				setErr(err.message);
			})
			.finally(() => {
				setIsLoggingIn(false);
			});
	};
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-[#225559] p-4">
			<motion.div
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
			>
				<h2 className="text-2xl font-extrabold text-[#225559] mb-6 text-center">Admin Dashboard Login</h2>
				<form onSubmit={handleLogIn} className="space-y-4 w-full">
					<div>
						<label htmlFor="email" className="block text-sm font-medium text-gray-700">
							Email
						</label>
						<input
							type="text"
							id="email"
							name="email"
							className={`mt-1 p-3 w-full border rounded-md focus:ring-[#225559] focus:border-[#225559]`}
							placeholder="Enter your email"
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
					{err && (
						<p className="text-xs text-red-500 flex items-center gap-2 pl-1">
							<BiSolidError size={18} />
							{err}
						</p>
					)}
					<button
						type={'submit'}
						disabled={isLoggingIn}
						className={`w-full bg-[#225559] text-white py-3 rounded-md hover:bg-[#173639] focus:outline-none focus:ring focus:ring-[#225559] transition duration-300`}
					>
						{isLoggingIn ? 'Logging In' : 'Login'}
					</button>
				</form>
				<p className="mt-4 text-sm text-gray-600">
					Don&apos;t have an account?
					<Link href="/signup" className={`text-[#225559] hover:text-[#173639] pl-2`}>
						Sign Up
					</Link>
				</p>
			</motion.div>
		</div>
	);
};

export default Login;
