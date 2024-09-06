import { Box, Button } from '@mui/material';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

export const Header = () => {
	return (
		<header className={styles.header}>
			<Box className='container'>
				<Box className={styles.wrapper}>
					<Button variant='contained'>
						<Link to='/'></Link>
						Home
					</Button>
					<Button variant='contained'>
						<Link to='/login'></Link>
						Login
					</Button>
				</Box>
			</Box>
		</header>
	);
};
