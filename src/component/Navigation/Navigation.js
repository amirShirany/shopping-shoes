/** @format */
import {NavLink} from "react-router-dom";
import {useAuth} from "../../Providers/AuthProvider";
import {useCart} from "../../Providers/CartProvider";
import "./Navigation.css";

const Navigation = () => {
	const {cart} = useCart();
	const userData = useAuth();
	return (
		<header className='mainNavigation z-10'>
			<nav>
				<ul>
					<div>"Amirhossein Shoping"</div>
					<li>
						<NavLink to='/' className={navData => (navData.isActive ? "activeLink" : "")}>
							home
						</NavLink>
					</li>
				</ul>

				<ul>
					<li className='cartLink'>
						<NavLink to='/cart' className={navData => (navData.isActive ? "activeLink" : "")}>
							cart
						</NavLink>
						<span>{cart.length}</span>
					</li>
					<li>
						<NavLink
							to={userData ? "/profile" : "/login"}
							className={navData => (navData.isActive ? "activeLink" : "")}
						>
							{userData ? "profile" : "login/signup"}
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navigation;
