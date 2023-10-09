'use client';
import { useState } from 'react';
import { BiSolidError } from 'react-icons/bi';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { UserAuth } from '@/Providers/AuthProvider';
import axios from 'axios';

const Signup = () => {
	const router = useRouter();
	const [err, setErr] = useState('');
	const [isSigningUp, setIsSigningUp] = useState(false);
	const { createUser, updateUserName, verifyEmail } = UserAuth();
	const handleSignUp = (event) => {
		event.preventDefault();
		setErr('');
		setIsSigningUp(true);
		const form = event.target;
		const name = form.name.value;
		const email = form.email.value;
		const password = form.password.value;

		//* creating user on firebase
		createUser(email, password)
			.then((data) => {
				//* updating user's name
				updateUserName(name)
					.then(() => console.log('name added'))
					.catch((err) => console.log(err.message));

				//* adding admin to the server.
				axios
					.post('/api/admins', { name, email, timestamp: new Date(), role: 'none' })
					.then((data) => console.log(data))
					.catch((err) => {
						console.log(err.message);
						setErr(err.message);
					});

				//* sending verification email.
				verifyEmail()
					.then(() => console.log('verification email send!'))
					.catch((err) => console.error(err));
				router.push('/');
			})
			.catch((err) => {
				console.log(err.message);
				setErr(err.message);
			})
			.finally(() => {
				setIsSigningUp(false);
				form.reset();
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
				<h2 className="text-2xl font-extrabold text-[#225559] mb-6 text-center">Create an Account</h2>
				<form onSubmit={handleSignUp} className="space-y-4 w-full">
					<div>
						<label htmlFor="name" className="block text-sm font-medium text-gray-700">
							Name
						</label>
						<input
							type="text"
							name="name"
							autoComplete="name"
							disabled={isSigningUp}
							className={`mt-1 p-3 w-full border rounded-md focus:ring-[#225559] focus:border-[#225559]`}
							placeholder="Enter your name"
							required
						/>
						<input type="text" name="" id="" />
					</div>
					<div>
						<label htmlFor="email" className="block text-sm font-medium text-gray-700">
							Email Address
						</label>
						<input
							type="email"
							name="email"
							autoComplete="email"
							disabled={isSigningUp}
							className={`mt-1 p-3 w-full border rounded-md focus:ring-[#225559] focus:border-[#225559]`}
							placeholder="Enter your email address"
							required
						/>
					</div>
					<div>
						<label htmlFor="password" className="block text-sm font-medium text-gray-700">
							Password
						</label>
						<input
							type="password"
							name="password"
							autoComplete="current-password"
							disabled={isSigningUp}
							className={`mt-1 p-3 w-full border rounded-md focus:ring-[#225559] focus:border-[#225559]`}
							placeholder="Enter your password"
							required
						/>
					</div>
					{/* if we get any error, that will show here */}
					{err && (
						<p className="text-xs text-red-500 flex items-center gap-2 pl-1">
							<BiSolidError size={18} />
							{err}
						</p>
					)}
					<button
						type={'submit'}
						disabled={isSigningUp}
						className={`w-full bg-[#225559] text-white py-3 rounded-md hover:bg-[#173639] focus:outline-none focus:ring focus:ring-[#225559] transition duration-300`}
					>
						{isSigningUp ? 'Signing Up' : 'Sign Up'}
					</button>
				</form>
				<p className="mt-4 text-sm text-gray-600">
					Already have an account?{' '}
					<Link href="/login" className={`text-[#225559] hover:text-[#173639]`}>
						Log In
					</Link>
				</p>
			</motion.div>
		</div>
	);
};

export default Signup;
