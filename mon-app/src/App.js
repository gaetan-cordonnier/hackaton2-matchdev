import React from "react";
import { Reset } from "styled-reset";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/header/";
import Connection from "./pages/connection/index";
import Sinscrire from "./pages/sinscrire/index";
import SeConnecter from "./pages/seconnecter/index";
import CardCompany from "./pages/cards/index";

import "./App.css";

export default function App() {
	return (
		<div className="App">
			<Reset />
			<Router>
				<Header />
				<Switch>
					<Route exact path="/" component={Connection} />
					<Route exact path="/sinscrire" component={Sinscrire} />
					<Route exact path="/seconnecter" component={SeConnecter} />
					<Route exact path="/cards" component={CardCompany} />
				</Switch>
			</Router>
		</div>
	);
}
