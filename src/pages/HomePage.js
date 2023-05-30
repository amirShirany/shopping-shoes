import Layout from "../Layout/Layout";
import * as data from "../data";
import {useCart, useCartActions} from "../Providers/CartProvider";
import {checkInCart} from "../utils/checkInCart";
import {toast} from "react-toastify";

const HomePage = () => {
	const {cart} = useCart();
	const dispatch = useCartActions();

	const addProductHandler = product => {
		toast.success(`${product.name} Added to Cart !`);
		dispatch({type: "ADD_TO_CART", payload: product});
	};

	return (
		<Layout>
			<main className='flex justify-center items-center'>
				<section className='m-2 grid md:grid-cols-2 xl:grid-cols-4 gap-4'>
					{data.products.map(product => {
						return (
							<section className='bg-slate-300 border rounded-md shadow-sm' key={product.id}>
								<div>
									<img
										className='w-full h-48 rounded-tl-md rounded-tr-md'
										src={product.image}
										alt={product.name}
									></img>
								</div>
								<div className='flex justify-between items-center mx-2 py-1'>
									<p className='w-1/3 font-serif font-bold text-lg text-center'> {product.name}</p>
									<p className='w-1/5 font-bold justify-center'>{product.price} $</p>
									<button
										className={`text-white bg-blue-500 opacity-90 shadow-md border-none outline-none rounded-md my-1 ${
											checkInCart(cart, product) ? "bg-blue-800" : ""
										}`}
										onClick={() => addProductHandler(product)}
									>
										{checkInCart(cart, product) ? "In Cart" : "Add to Cart"}
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
