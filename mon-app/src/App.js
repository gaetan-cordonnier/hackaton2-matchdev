import React from "react";
import { Reset } from "styled-reset";

import Header from "./components/header/";
import Connection from "./components/connection/index";
import SeConnecter from "./components/sinscrire/index";
import SeConnecter from "./components/seconnecter/index";
import CardCompany from "./components/card_company/index";

import "./App.css";

export default function App() {
	return (
		<div className="App">
			<Reset />
			<Header />
			<Connection />
			<Sinscrire />
			<SeConnecter />
			<CardCompany />
		</div>
	);
}
