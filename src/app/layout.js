import { AuthProvider } from '@/Providers/AuthProvider';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Dashboard | LegalCO',
	description:
		"LegalCO's Dashboard offers unparalleled legal insights and data analysis tools. Stay ahead with our intuitive legal analytics platform. Make data-driven decisions effortlessly. Explore now"
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<AuthProvider>
				<body className={inter.className}>{children}</body>
			</AuthProvider>
		</html>
	);
}
