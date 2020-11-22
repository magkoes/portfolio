import './App.scss';
import axios from 'axios';
import Header from './components/layouts/Header';

axios.defaults.baseURL = 'http://localhost/portfolio/admin/wp-json/';

function App() {
	return (
		<div className="App">
			<Header></Header>
		</div>
	);
	}

export default App;
