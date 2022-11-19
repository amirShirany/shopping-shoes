/** @format */
import './Signup.css';
import { useState } from 'react';
import { useFormik } from 'formik';
import { signupUser } from '../../services/signupService';
import { Link, useParams, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import Input from '../../common/Input';

const initialValues = {
	name: '',
	email: '',
	phoneNumber: '',
	password: '',
	passwordConfirm: '',
};

const validationSchema = yup.object({
	name: yup
		.string()
		.required('name is required')
		.min(6, 'name length is 6 char'),

	email: yup
		.string()
		.required('Email is required')
		.email('Invalid email format'),

	phoneNumber: yup
		.string()
		.required('phoneNumber is required')
		.matches(/^[0-9]{8,11}$/, 'Phone number is not valid')
		.nullable(),

	password: yup.string().required('Password is required'),
	// .min(8, 'should be 8 chars minimum'),
	// .matches(
	// 	/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
	// 	'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
	// )

	passwordConfirm: yup
		.string()
		.oneOf([yup.ref('password'), null], 'Passwords must match')
		.required('Password Confirm is required'),
});

const SignupForm = () => {
	const params = useParams();
	console.log(params);
	const navigate = useNavigate();

	const [error, setError] = useState(null);

	const onSubmit = async (Values) => {
		const { name, email, phoneNumber, password } = Values;
		const userData = {
			name,
			email,
			phoneNumber,
			password,
		};

		try {
			await signupUser(userData);
			setError(null);
			navigate('/');
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
				<Input formik={formik} label='Name :' name='name' type='text' />
				<Input formik={formik} label='Email :' name='email' type='email' />
				<Input
					formik={formik}
					label='Phone Number :'
					name='phoneNumber'
					type='tel'
				/>
				<Input
					formik={formik}
					label='Password :'
					name='password'
					type='password'
				/>
				<Input
					formik={formik}
					label='Password confirmation :'
					name='passwordConfirm'
					type='password'
				/>
				<button
					style={{ width: '100%', padding: '.5rem 0' }}
					type='submit'
					className='btn primary'
					disabled={!formik.isValid}>
					Signup
				</button>
				{error && <p style={{ color: 'red' }}>error is : {error}</p>}
				<Link to='/login'>
					<p style={{ marginTop: '1rem' }}>Already Login?</p>
				</Link>
			</form>
		</div>
	);
};

export default SignupForm;
