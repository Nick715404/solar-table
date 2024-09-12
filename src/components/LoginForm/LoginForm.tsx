import { Box, FormHelperText, Typography } from '@mui/material';
import { useLoginForm } from './useLoginForm';
import { CustomInput } from '../FormElements';
import { LoadingButton } from '@mui/lab';
import Send from '@mui/icons-material/Send';
import { TLoginForm } from './loginForm-types';
import { getAuthToken } from '../../api';

export const LoginForm = () => {
	const {
		errors,
		handleSubmit,
		reg,
		isValid,
		navigator,
		setCookie,
		loading,
		setLoading,
	} = useLoginForm();

	const onSubmit = async (formData: TLoginForm) => {
		setLoading('loading');
		const {
			data: { token },
		} = await getAuthToken(formData);
		setCookie('accessToken', token, {
			path: '/',
			maxAge: 7 * 24 * 60 * 60,
			secure: true,
			sameSite: 'strict',
		});
		setLoading('pending');
		navigator('/', { replace: true });
	};

	return (
		<Box
			onSubmit={handleSubmit(onSubmit)}
			component='form'
			display='flex'
			flexDirection='column'
			gap='10px'
			border='2px solid black'
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
				sx={{ color: '#202020' }}
			>
				Log in
			</Typography>
			<CustomInput
				register={reg}
				name='username'
				type='text'
				label='Username'
				reqOptions={{
					required: 'This fiel is required',
				}}
			/>
			{errors.username?.message && (
				<FormHelperText
					sx={{ color: 'red' }}
				>{`${errors.username?.message}`}</FormHelperText>
			)}
			<CustomInput
				register={reg}
				name='password'
				type='password'
				label='Password'
				reqOptions={{
					minLength: {
						value: 6,
						message: 'Password must be more then 6 symbols',
					},
				}}
			/>
			{errors.password?.message && (
				<FormHelperText
					sx={{ color: 'red' }}
				>{`${errors.password?.message}`}</FormHelperText>
			)}
			<LoadingButton
				disabled={!isValid ? true : false}
				startIcon={<Send />}
				loadingPosition='center'
				variant='contained'
				loading={loading === 'loading' && true}
				type='submit'
			>
				Send
			</LoadingButton>
		</Box>
	);
};
