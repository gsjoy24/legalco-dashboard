import axios from 'axios';
const addUserToServer = async (name, email) => {
	try {
		const response = await axios.post('/api/admin', { name, email });
	} catch (error) {
		console.log(error.message);
	}
};
export default addUserToServer;
