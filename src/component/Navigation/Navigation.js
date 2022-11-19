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
					<div>"Amirhossein Shoping"</div>
					<li>
						<NavLink
							to='/'
							className={(navData) => (navData.isActive ? 'activeLink' : '')}>
							home
						</NavLink>
					</li>
				</ul>

				<ul>
					<li className='cartLink'>
						<NavLink
							to='/cart'
							className={(navData) => (navData.isActive ? 'activeLink' : '')}>
							cart
						</NavLink>
						<span>{cart.length}</span>
					</li>
					<li>
						<NavLink
							to='/login'
							className={(navData) => (navData.isActive ? 'activeLink' : '')}>
							login / signup
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navigation;
