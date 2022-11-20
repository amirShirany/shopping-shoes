/** @format */
import './Login.css';
import { useState } from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { loginUser } from '../../services/loginService';
import { Link, useParams, useNavigate, json } from 'react-router-dom';
import { useAuthActions } from '../../Providers/AuthProvider';
import Input from '../../common/Input';

const initialValues = {
	email: '',
	password: '',
};

const validationSchema = yup.object({
	email: yup
		.string()
		.required('Email is required')
		.email('Invalid email format'),

	password: yup
		.string()
		.min(8, 'should be 8 chars minimum')
		// .matches(
		// 	/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
		// 	'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
		// )
		.required('Password is required'),
});

const LoginForm = () => {
	const setAuth = useAuthActions();
	const params = useParams();
	const navigate = useNavigate();
	const [error, setError] = useState(null);

	const onSubmit = async (Values) => {
		const { email, password } = Values;
		const userData = {
			email,
			password,
		};
		try {
			const { data } = await loginUser(userData);
			setAuth(data);
			navigate('/');
			// localStorage.setItem('authState', json.stringify(data));
			setError(null);
		} catch (error) {
			if (error.response && error.response.data.message) {
				setError(error.response.data.message);
			}
		}
	};

	const formik = useFormik({
		initialValues,
		onSubmit,
		validationSchema,
		validateOnMount: true,
	});

	return (
		<div className='formMain'>
			<form onSubmit={formik.handleSubmit}>
				<Input formik={formik} label='Email :' name='email' type='email' />
				<Input
					formik={formik}
					label='Password :'
					name='password'
					type='password'
				/>
				<button
					style={{ width: '100%', padding: '.5rem 0' }}
					type='submit'
					className='btn primary'
					disabled={!formik.isValid}>
					Login
				</button>
				{error && <p style={{ color: 'red' }}> {error}</p>}
				<Link to='/signup'>
					<p style={{ marginTop: '1rem' }}>Not signup yet?</p>
				</Link>
			</form>
		</div>
	);
};

export default LoginForm;
