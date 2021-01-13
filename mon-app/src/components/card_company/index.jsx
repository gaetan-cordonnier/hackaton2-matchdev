import React, { useState, useMemo } from "react";
import TinderCard from "react-tinder-card";
import { Container } from "./style";

const db = [
	{
		name: "UBIK",
		url: "/images/company1.jpg",
	},
	{
		name: "SYMBOL-IT",
		url: "/images/company2.jpg",
	},
	{
		name: "VADUO",
		url: "/images/company3.png",
	},
	{
		name: "NIRYO",
		url: "/images/company4.png",
	},
	{
		name: "RUNNING CARE",
		url: "/images/company5.jpg",
	},
];

const alreadyRemoved = [];
let companysState = db; // This fixes issues with updating companys state forcing it to use the current state and not the state that was active when the card was created.

export default function CardCompany() {
	const [companys, setCompanys] = useState(db);
	const [lastDirection, setLastDirection] = useState();

	const childRefs = useMemo(
		() =>
			Array(db.length)
				.fill(0)
				.map((i) => React.createRef()),
		[]
	);

	const swiped = (direction, nameToDelete) => {
		console.log("removing: " + nameToDelete);
		setLastDirection(direction);
		alreadyRemoved.push(nameToDelete);
	};

	const outOfFrame = (name) => {
		console.log(name + " left the screen!");
		companysState = companysState.filter((company) => company.name !== name);
		setCompanys(companysState);
	};

	const swipe = (dir) => {
		const cardsLeft = companys.filter(
			(person) => !alreadyRemoved.includes(person.name)
		);
		if (cardsLeft.length) {
			const toBeRemoved = cardsLeft[cardsLeft.length - 1].name; // Find the card object to be removed
			const index = db.map((person) => person.name).indexOf(toBeRemoved); // Find the index of which to make the reference to
			alreadyRemoved.push(toBeRemoved); // Make sure the next card gets removed next time if this card do not have time to exit the screen
			childRefs[index].current.swipe(dir); // Swipe the card!
		}
	};

	return (
		<Container>
			{/* <link
				href="https://fonts.googleapis.com/css?family=Damion&display=swap"
				rel="stylesheet"
			/>
			<link
				href="https://fonts.googleapis.com/css?family=Alatsi&display=swap"
				rel="stylesheet"
			/> */}
			<div className="cardContainer">
				{companys.map((company, index) => (
					<TinderCard
						ref={childRefs[index]}
						className="swipe"
						key={company.name}
						onSwipe={(dir) => swiped(dir, company.name)}
						onCardLeftScreen={() => outOfFrame(company.name)}
					>
						<div
							style={{ backgroundImage: "url(" + company.url + ")" }}
							className="card"
						>
							<h3>{company.name}</h3>
						</div>
					</TinderCard>
				))}
			</div>
			<div className="buttons">
				<button onClick={() => swipe("left")}>Refuser</button>
				<button onClick={() => swipe("right")}>Postuler</button>
			</div>
			{lastDirection ? (
				<h2 key={lastDirection} className="infoText">
					You swiped {lastDirection}
				</h2>
			) : (
				<h2 className="infoText">
					Swipe a card or press a button to get started!
				</h2>
			)}
		</Container>
	);
}
