/** @format */
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import CartProvider from './Providers/CartProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	return (
		<Router>
			<CartProvider>
				<ToastContainer />
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/cart' element={<CartPage />} />
				</Routes>
			</CartProvider>
		</Router>
	);
}

export default App;
