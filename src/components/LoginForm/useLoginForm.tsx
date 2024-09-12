import { useForm } from 'react-hook-form';
import { TLoginForm } from './loginForm-types';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const useLoginForm = () => {
	const {
		handleSubmit,
		register,
		formState: { errors, isValid, isLoading },
		reset,
	} = useForm<TLoginForm>({ mode: 'onBlur' });
	const [_, setCookie] = useCookies(['accessToken']);
	const [loading, setLoading] = useState<'loading' | 'pending'>('pending');
	const navigator = useNavigate();

	return {
		errors,
		handleSubmit,
		isLoading,
		isValid,
		reset,
		reg: register,
		setCookie,
		navigator,
		setLoading,
		loading,
	};
};
