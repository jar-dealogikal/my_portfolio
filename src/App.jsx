import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicRoutes from "./routes/PublicRoutes";

function App() {
	return (
		<Router>
			<Routes>
				{PublicRoutes.map((item, key) => (
					<Route key={key} {...item} />
				))}
			</Routes>
		</Router>
	);
}

export default App;
