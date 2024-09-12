import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

type RedirectIfAuthenticatedProps = {
	children: React.ReactNode;
};

export const RedirectIfAuthenticated = ({
	children,
}: RedirectIfAuthenticatedProps) => {
	const [cookies] = useCookies(['accessToken']);
	const navigate = useNavigate();

	useEffect(() => {
		if (cookies.accessToken) {
			navigate('/', { replace: true });
		}
	}, [cookies, navigate]);

	return <>{children}</>;
};
