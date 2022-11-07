/** @format */
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import CartProvider from './Providers/CartProvider';

function App() {
	return (
		<Router>
			<CartProvider>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/cart' element={<CartPage />} />
				</Routes>
			</CartProvider>
		</Router>
	);
}

export default App;
