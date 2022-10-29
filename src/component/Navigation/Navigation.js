/** @format */

import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
	return (
		<header className='mainNavigation'>
			<nav>
				<ul>
					<li>
						<NavLink to='/' activeClassName='activeLink'>
							home
						</NavLink>
					</li>
					<li>
						<NavLink to='/cart' activeClassName='activeLink'>
							cart
						</NavLink>
					</li>
				</ul>
				<div>Amirhossein Shirani</div>
			</nav>
		</header>
	);
};

export default Navigation;
