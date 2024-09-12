import { CookiesProvider } from 'react-cookie';

type TAppCookiesProvider = Readonly<{
	children: React.ReactNode;
}>;

export const AppCookiesProvider = ({ children }: TAppCookiesProvider) => {
	return (
		<CookiesProvider defaultSetOptions={{ path: '/' }}>
			{children}
		</CookiesProvider>
	);
};
