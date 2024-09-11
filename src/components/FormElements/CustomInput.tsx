import { TextField, TextFieldVariants } from '@mui/material';
import { TLoginForm } from '../LoginForm/loginForm-types';
import { RegisterOptions, UseFormRegister } from 'react-hook-form';
import { HTMLInputTypeAttribute } from 'react';

type TCustomInput = {
	label?: string;
	variant?: TextFieldVariants;
	type: HTMLInputTypeAttribute;
	name: 'username' | 'password';
	register: UseFormRegister<TLoginForm>;
	reqOptions?: RegisterOptions<TLoginForm>;
};

export const CustomInput = ({
	label = '',
	variant,
	type,
	name,
	register,
	reqOptions,
}: TCustomInput) => {
	return (
		<TextField
			{...register(name, reqOptions)}
			label={label}
			variant={variant}
			fullWidth
			// required
			type={type}
			color='primary'
		/>
	);
};
