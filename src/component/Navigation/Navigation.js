/** @format */
import { NavLink } from 'react-router-dom';
import { useCart } from '../../Providers/CartProvider';
import './Navigation.css';

const Navigation = () => {
	const { cart } = useCart();
	return (
		<header className='mainNavigation'>
			<nav>
				<ul>
					<li>
						<NavLink
							to='/'
							className={(navData) => (navData.isActive ? 'activeLink' : '')}>
							home
						</NavLink>
					</li>
					<li className='cartLink'>
						<NavLink
							to='/cart'
							className={(navData) => (navData.isActive ? 'activeLink' : '')}>
							cart
						</NavLink>
						<span>{cart.length}</span>
					</li>
				</ul>
				<h4>"Amirhossein Shoping"</h4>
			</nav>
		</header>
	);
};

export default Navigation;
