import AdminNavbar from '@/components/Navbar';
import '../globals.css';
import SecureRoute from '@/components/SecureRoute';

export const metadata = {
	title: 'Dashboard | LegalCO',
	description:
		"LegalCO's Dashboard offers unparalleled legal insights and data analysis tools. Stay ahead with our intuitive legal analytics platform. Make data-driven decisions effortlessly. Explore now"
};

export default function RootLayout({ children }) {
	return (
		// todo: uncomment this component after develop whole dashboard to make secure all routes!
		// <SecureRoute>
		<AdminNavbar>{children}</AdminNavbar>
		// </SecureRoute>
	);
}
