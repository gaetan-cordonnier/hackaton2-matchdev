import React, { useState, useMemo } from "react";
import TinderCard from "react-tinder-card";
import { Container } from "./style";

const db = [
	{
		name: "UBIK",
		imgUrl:
			"https://process.filestackapi.com/resize=width:600/auto_image/compress/iB6MEKUeT5OUfHEAip0t",
		url: "http://www.testurl.com",
	},
	{
		name: "SYMBOL-IT",
		imgUrl: "/images/company2.jpg",
		url: "http://www.testurl.com",
	},
	{
		name: "VADUO",
		imgUrl: "/images/company3.png",
		url: "http://www.testurl.com",
	},
	{
		name: "NIRYO",
		imgUrl: "/images/company4.png",
		url: "http://www.testurl.com",
	},
	{
		name: "RUNNING CARE",
		imgUrl: "/images/company5.jpg",
		url: "http://www.testurl.com",
	},
];

const alreadyRemoved = [];
let companysState = db; // This fixes issues with updating companys state forcing it to use the current state and not the state that was active when the card was created.

export default function CardCompany() {
	const [companys, setCompanys] = useState(db);

	const childRefs = useMemo(
		() =>
			Array(db.length)
				.fill(0)
				.map((i) => React.createRef()),
		[]
	);

	const swiped = (nameToDelete) => {
		console.log("removing: " + nameToDelete);
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

	const urlCompany = companys.find((company) => company.url);

	console.log(urlCompany);

	return (
		<Container>
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
							style={{ backgroundImage: "url(" + company.imgUrl + ")" }}
							className="card"
						>
							<h1>{company.name}</h1>
						</div>
						<div className="descriptionContainer">
							<div className="description">
								<h2>Description de l'entreprise</h2>
								<p>
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industry's
									standard dummy text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled it to make a type
									specimen book. It has survived not only five centuries, but
									also the leap into electronic typesetting, remaining
									essentially unchanged. It was popularised in the 1960s with
									the release of Letraset sheets containing Lorem Ipsum
									passages, and more recently with desktop publishing software
									like Aldus PageMaker including versions of Lorem Ipsum. Why do
									we use it? It is a long established fact that a reader will be
									distracted by the readable content of a page when looking at
									its layout. The point of using Lorem Ipsum is that it has a
									more-or-less normal distribution of letters, as opposed to
									using 'Content here, content here', making it look like
									readable English. Many desktop publishing packages and web
									page editors now use Lorem Ipsum as their default model text,
									and a search for 'lorem ipsum' will uncover many web sites
									still in their infancy. Various versions have evolved over the
									years, sometimes by accident, sometimes on purpose injected
									humour and the like.
								</p>
							</div>
						</div>
					</TinderCard>
				))}
			</div>

			<div className="bottom">
				<div className="buttons">
					<button onClick={() => swipe("left")}>Refuser</button>
					<button onClick={() => swipe("right")}>Postuler</button>
				</div>
				<h2>Swipe à droite et a gauche,</h2>
				<h2> ou clic pour démarer!</h2>
			</div>
		</Container>
	);
}
