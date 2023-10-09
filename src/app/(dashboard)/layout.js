import AdminNavbar from '@/components/Navbar';
import '../globals.css';
import SecureRoute from '@/components/SecureRoute';

export default function RootLayout({ children }) {
	return (
		<SecureRoute>
			<AdminNavbar>{children}</AdminNavbar>
		</SecureRoute>
	);
}
