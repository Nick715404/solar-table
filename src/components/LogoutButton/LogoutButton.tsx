import { Button } from '@mui/material';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

export const LogoutButton = () => {
	const [, _, removeCookie] = useCookies(['accessToken']);
	const navigator = useNavigate();

	const handleLogout = () => {
		removeCookie('accessToken', { path: '/' });
		navigator('/', { replace: true });
	};

	return (
		<Button onClick={handleLogout} variant='contained'>
			Logout
		</Button>
	);
};
