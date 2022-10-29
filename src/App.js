/** @format */
import './App.css';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className='App'>
				<HomePage />
			</div>
		</Router>
	);
}

export default App;
