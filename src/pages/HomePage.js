/** @format */
import Layout from '../Layout/Layout';
import * as data from '../data';
import { useCart, useCartActions } from '../Providers/CartProvider';
import { checkInCart } from '../utils/checkInCart';

const HomePage = () => {
	const { cart } = useCart();
	const dispatch = useCartActions();

	const addProductHandler = (product) => {
		dispatch({ type: 'ADD_TO_CART', payload: product });
	};

	return (
		<Layout>
			<main className='container'>
				<section className='productList'>
					{data.products.map((product) => {
						return (
							<section className='product' key={product.id}>
								<div className='productImg'>
									<img src={product.image} alt={product.name}></img>
								</div>
								<div className='productDesc'>
									<p> {product.name}</p>
									<p> $ {product.price}</p>
									<button
										className='btn primary'
										onClick={() => addProductHandler(product)}>
										{checkInCart(cart, product) ? 'In Cart' : 'Add to Cart'}
									</button>
								</div>
							</section>
						);
					})}
				</section>
			</main>
		</Layout>
	);
};

export default HomePage;
