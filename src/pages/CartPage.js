/** @format */
import './CartPage.css';
import Layout from '../Layout/Layout';
import { Link } from 'react-router-dom';
import { useAuth } from '../Providers/AuthProvider';
import { useCart, useCartActions } from '../Providers/CartProvider';

const CartPage = () => {
	const { cart, total } = useCart();
	const dispatch = useCartActions();

	if (!cart.length)
		return (
			<Layout>
				<main>
					<p>Cart is Empty !</p>
				</main>
			</Layout>
		);

	const incHandler = (cartItem) => {
		dispatch({ type: 'ADD_TO_CART', payload: cartItem });
	};
	const decHandler = (cartItem) => {
		dispatch({ type: 'REMOVE_PRODUCT', payload: cartItem });
	};

	return (
		<Layout>
			<main className='container'>
				<section className='cartCenter'>
					<section className='cartItemList'>
						{cart.map((item) => {
							return (
								<div className='cartItem'>
									<div className='itemImg'>
										<img src={item.image} alt={item.name}></img>
									</div>
									<div>{item.name}</div>
									<div>{item.price * item.quantity}</div>
									<div className='btnGroup'>
										<button onClick={() => decHandler(item)}>-</button>
										<button>{item.quantity}</button>
										<button onClick={() => incHandler(item)}>+</button>
									</div>
								</div>
							);
						})}
					</section>
					<CartSummery total={total} cart={cart} />
				</section>
			</main>
		</Layout>
	);
};

export default CartPage;

const CartSummery = ({ total, cart }) => {
	const auth = useAuth();
	const originalTotalPrice = cart.length
		? cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0)
		: 0;
	return (
		<section className='cartSummery'>
			<h2 style={{ marginBottom: '20px' }}>cart Summery</h2>
			<div className='summeryItem'>
				<p>original total price :</p>
				<p>{originalTotalPrice} $</p>
			</div>
			<div className='summeryItem'>
				<p>cart discount :</p>
				<p>{originalTotalPrice - total} $</p>
			</div>
			<div className='summeryItem net'>
				<p>net price :</p>
				<p>{total} $</p>
			</div>
			<Link to={auth ? '/checkout' : '/signup'}>
				<button
					className='primary btn'
					style={{ marginTop: '100px', width: '100%' }}>
					Go to Checkout
				</button>
			</Link>
		</section>
	);
};
