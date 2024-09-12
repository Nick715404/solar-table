import styles from './styles.module.scss';
import { Box, Link } from '@mui/material';
import { useCookies } from 'react-cookie';
import { Link as RouterLink } from 'react-router-dom';

export const Header = () => {
	const [cookies] = useCookies(['accessToken']);
	return (
		<header className={styles.header}>
			<Box className='container'>
				<Box className={styles.wrapper}>
					<Link to='/' component={RouterLink}>
						Home
					</Link>
					{cookies.accessToken ? (
						<Link to='/logut' component={RouterLink}>
							logut
						</Link>
					) : (
						<Link to='#' component={RouterLink}>
							Login
						</Link>
					)}
				</Box>
			</Box>
		</header>
	);
};
