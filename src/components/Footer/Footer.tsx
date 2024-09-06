import { Box, Typography } from '@mui/material';
import styles from './styles.module.scss';

export const Footer = () => {
	return (
		<Box component='footer' className={styles.footer}>
			<Box className='container'>
				<Box className={styles.wrapper}>
					<Typography variant='body1'>footer</Typography>
				</Box>
			</Box>
		</Box>
	);
};
