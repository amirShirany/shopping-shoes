/** @format */
import { useFormik } from 'formik';
import * as yup from 'yup';
import Input from '../../common/Input';
import './Signup.css';

const initialValues = {
	name: '',
	email: '',
	phoneNumber: '',
	password: '',
	passwordConfirm: '',
};

const onSubmit = (Values) => {
	console.log(Values);
	// axios
	// 	.post('http://localhost:3001/Users', Values)
	// 	.then((res) => console.log(res.data))
	// 	.catch((err) => console.log(err));
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

	password: yup
		.string()
		.min(8, 'should be 8 chars minimum')
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
			'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
		)
		.required('Password is required'),

	passwordConfirm: yup
		.string()
		.oneOf([yup.ref('password'), null], 'Passwords must match')
		.required('Password Confirm is required'),
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
					submit
				</button>
			</form>
		</div>
	);
};

export default SignupForm;
