/** @format */
import './App.css';
import React from 'react';
import CartProvider from './Providers/CartProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';

function App() {
	return (
		<Router>
			<CartProvider>
				<ToastContainer />
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/cart' element={<CartPage />} />
					<Route path='/checkout' element={<CheckoutPage />} />
					<Route path='/signup' element={<SignupPage />} />
					<Route path='/login' element={<LoginPage />} />
				</Routes>
			</CartProvider>
		</Router>
	);
}

export default App;
