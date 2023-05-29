/** @format */
import "./App.css";
import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AuthProvider from "./Providers/AuthProvider";
import CartProvider from "./Providers/CartProvider";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
	return (
		<Router>
			<AuthProvider>
				<CartProvider>
					<ToastContainer />
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path='/cart' element={<CartPage />} />
						<Route path='/checkout' element={<CheckoutPage />} />
						<Route path='/signup' element={<SignupPage />} />
						<Route path='/login' element={<LoginPage />} />
						<Route path='/profile' element={<ProfilePage />} />
					</Routes>
				</CartProvider>
			</AuthProvider>
		</Router>
	);
}

export default App;
