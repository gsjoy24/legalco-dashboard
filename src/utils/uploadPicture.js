import axios from 'axios';

export const UploadPicture = async (image, name) => {
	const formData = new FormData();
	formData.append('image', image);
	const response = await axios.post(
		`https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_KEY}&name=${name}`,
		formData
	);
	return response;
};
