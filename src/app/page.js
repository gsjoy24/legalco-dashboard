import SecureRoute from '@/components/SecureRoute';

const HomePage = () => {
	return (
		<SecureRoute>
			<div>This is the home page</div>
		</SecureRoute>
	);
};

export default HomePage;
