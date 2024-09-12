import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

type TAppQueryProvider = Readonly<{
	children: React.ReactNode;
}>;

const client = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 10000,
		},
	},
});

export const AppQueryProvider = ({ children }: TAppQueryProvider) => {
	return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};
