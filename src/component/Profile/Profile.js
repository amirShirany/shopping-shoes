/** @format */
import { useAuth } from '../../Providers/AuthProvider';
import { GoPerson } from 'react-icons/go';

const Profile = () => {
	const auth = useAuth();
	console.log(auth);

	return (
		<main className='container'>
			<section className='cartCenter'>
				{auth ? (
					<>
						<section
							className='cartItemList'
							style={{ display: 'flex', justifyContent: 'space-around' }}>
							<div>
								<h3>checkout detial :</h3>
								<p>Name : {auth.name}</p>
								<p>phoneNumber : {auth.phoneNumber}</p>
								<p>Email : {auth.email}</p>
							</div>
							<GoPerson style={{ fontSize: '120px' }} />
						</section>
					</>
				) : (
					<p>Please Login...!</p>
				)}
			</section>
		</main>
	);
};
export default Profile;
