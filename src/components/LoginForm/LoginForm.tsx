import { Box, Typography, TextField, Button } from '@mui/material';
import { useLoginForm } from './useLoginForm';

export const LoginForm = () => {
	const { errors, handleSubmit, isLoading, isValid, register, reset } =
		useLoginForm();

	const onSubmit = (data: unknown) => {
		console.log(data);
	};

	return (
		<Box
			onSubmit={handleSubmit(onSubmit)}
			component='form'
			bgcolor='#202020'
			display='flex'
			flexDirection='column'
			gap='10px'
			border='1px solid black'
			borderRadius='20px'
			padding='20px'
			margin='0 auto'
			marginTop='40px'
			maxWidth='350px'
			color='#fff'
		>
			<Typography
				fontSize='40px'
				textTransform='uppercase'
				variant='h5'
				align='center'
				gutterBottom
			>
				Login
			</Typography>
			<TextField
				{...register('username', { required: 'This field is required!' })}
				label='Username'
				variant='standard'
				fullWidth
				required
			/>
			<TextField
				{...register('password', { required: 'This field is required!' })}
				label='Password'
				type='password'
				variant='standard'
				fullWidth
				required
			/>
			<Button type='submit' variant='contained' color='primary' fullWidth>
				Отправить
			</Button>
		</Box>
	);
};
