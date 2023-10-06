'use client';
import Loading from '@/app/loading';
import UseGetCurrentUser from '@/hooks/UseGetCurrentUser';
import { useRouter } from 'next/navigation';

const SecureRoute = ({ children }) => {
	const userData = UseGetCurrentUser();
	console.log(userData);
	const router = useRouter();
	if (!userData) {
		return <Loading />;
	} else if (userData && userData?.role === 'admin') {
		return <div>{children}</div>;
	} else {
		router.push('/login');
		return;
	}
};

export default SecureRoute;
