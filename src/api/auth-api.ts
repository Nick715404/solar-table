export const getAuthToken = async (formData: unknown) => {
	try {
		const response = await fetch(`${import.meta.env.VITE_API_HOST}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData),
		});

		const data = await response.json();

		console.log(data);

		return data;
	} catch (error) {
		throw new Error('Error while fetching token');
	}
};
