'use client';
import Loading from '@/app/loading';
import UseGetCurrentUser from '@/hooks/UseGetCurrentUser';
import NotifyPage from './NotifyPage';
import { UserAuth } from '@/Providers/AuthProvider';

const SecureRoute = ({ children }) => {
	const { user, loading } = UserAuth();
	const [userData, userDataLoading] = UseGetCurrentUser();

	if (!user || loading || userDataLoading || !userData) {
		return <Loading />;
	} else if (userData && userData?.role === 'admin') {
		return <>{children}</>;
	} else if (userData && userData?.role === 'none') {
		return <NotifyPage />;
	}
};

export default SecureRoute;
