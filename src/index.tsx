import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Base from "./pages/base";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Derpitcraft from "./pages/gamemodes/derpitcraft/derpitcraft";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="" element={<Base />}>
					<Route path="" element={<Home />} />
					<Route path="about" element={<About />} />
				</Route>
				<Route path="gamemodes" element={<Base />}>
					<Route path="derpitcraft" element={<Derpitcraft />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
