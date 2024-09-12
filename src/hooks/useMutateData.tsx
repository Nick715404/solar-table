import { useMutation, useQueryClient } from '@tanstack/react-query';

type useMutateDataProps = {
	func: () => any;
	dataKey: string[] | string;
};

export const useMutateData = ({ func, dataKey }: useMutateDataProps) => {
	const client = useQueryClient();

	const { mutate, isSuccess } = useMutation({
		mutationFn: func,
		onSuccess: () => {
			client.invalidateQueries({ queryKey: [...dataKey] });
		},
	});
	return { mutate, isSuccess };
};
