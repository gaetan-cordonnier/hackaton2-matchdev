import React from "react";
import { Reset } from "styled-reset";

import Header from "./components/header/";
import CardCompany from "./components/card_company";

export default function App() {
	return (
		<div>
			<Reset />
			<Header />
			<CardCompany />
		</div>
	);
}
