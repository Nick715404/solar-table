import { useQuery } from '@tanstack/react-query';

type useGetDataProps<T> = {
	dataKey: string[] | string;
	func: () => Promise<T>;
};

export const useGetData = <T extends {}>({
	dataKey,
	func,
}: useGetDataProps<T>) => {
	const { data, isLoading, error, isSuccess } = useQuery<T>({
		queryKey: [...dataKey],
		queryFn: func,
	});
	return { data, isLoading, isSuccess, error };
};
