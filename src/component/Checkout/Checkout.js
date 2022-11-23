/** @format */
import './Checkout.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../../Providers/AuthProvider';
import { useCart } from '../../Providers/CartProvider';

const Checkout = () => {
	const auth = useAuth();
	const { cart, total } = useCart();
	console.log(auth);

	if (!cart.length)
		return (
			<main className='container'>
				<Link to='/'>
					<h3>go to shopping?</h3>
				</Link>
			</main>
		);

	return (
		<main className='container'>
			<section className='cartCenter'>
				{auth ? (
					<>
						<section className='cartItemList'>
							<h3>checkout detial :</h3>
							<p>Name : {auth.name}</p>
							<p>phoneNumber : {auth.phoneNumber}</p>
							<p>Email : {auth.email}</p>
						</section>
						<section className='cartSummery'>
							{cart.length &&
								cart.map((res) => {
									return (
										<div className='itemList'>
											{res.name} * {res.quantity} ={' '}
											{res.quantity * res.offPrice}
										</div>
									);
								})}
							<hr />
							<div> total price : {total}</div>
						</section>
					</>
				) : (
					<p>Please Login...!</p>
				)}
			</section>
		</main>
	);
};
export default Checkout;
