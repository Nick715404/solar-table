import { TGetTableData } from '../types';

export const getFormsData = async (token: string): Promise<TGetTableData> => {
	try {
		const response = await fetch(
			`${
				import.meta.env.VITE_API_HOST
			}/ru/data/v3/testmethods/docs/userdocs/get`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					'x-auth': token,
				},
			}
		);

		const data = await response.json();

		console.log(data);

		return data;
	} catch (error) {
		throw new Error('Failed while fetchiing data');
	}
};
