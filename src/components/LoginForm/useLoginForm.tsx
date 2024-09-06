import { useForm } from 'react-hook-form';
import { TLoginForm } from './loginForm-types';

export const useLoginForm = () => {
	const {
		handleSubmit,
		register,
		formState: { errors, isValid, isLoading },
		reset,
	} = useForm<TLoginForm>({ mode: 'onBlur' });
	return {
		errors,
		handleSubmit,
		isLoading,
		isValid,
		reset,
		register,
	};
};
