import "./App.css";
import Home from "./component/home";
import Login from "./component/login";

function App() {
	const [isAuth, setAuth] = useState(false);
	return (
		<div className="App">
			{!isAuth && <Login />}
			{isAuth && <Home />}
		</div>
	);
}

export default App;
