/** @format */
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import Input from '../../common/Input';
import './Login.css';

const initialValues = {
	email: '',
	password: '',
};

const onSubmit = (Values) => {
	console.log(Values);
	// axios
	// 	.post('http://localhost:3001/Users', Values)
	// 	.then((res) => console.log(res.data))
	// 	.catch((err) => console.log(err));
};

const validationSchema = yup.object({
	email: yup
		.string()
		.required('Email is required')
		.email('Invalid email format'),

	password: yup
		.string()
		.min(8, 'should be 8 chars minimum')
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
			'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
		)
		.required('Password is required'),
});

const SignupForm = () => {
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
				<Link to='/signup'>
					<p style={{ marginTop: '1rem' }}>Not signup yet?</p>
				</Link>
			</form>
		</div>
	);
};

export default SignupForm;
