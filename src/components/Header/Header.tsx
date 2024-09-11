import styles from './styles.module.scss';
import { Box, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export const Header = () => {
	return (
		<header className={styles.header}>
			<Box className='container'>
				<Box className={styles.wrapper}>
					<Link to='/' component={RouterLink}>
						Home
					</Link>
					<Link to='/login' component={RouterLink}>
						Login
					</Link>
				</Box>
			</Box>
		</header>
	);
};
