import React, { useState, useMemo } from "react";
import TinderCard from "react-tinder-card";
import { Container } from "./style";

const db = () => {
	axios
		.get("http://localhost:5050/cards/")
		.then(function (response) {
			console.log(response.data);
		})
		.catch(function (error) {
			console.log(error);
		});
};

// const db = () => {
// 	axios
// 		.get("http://localhost:5000")
// 		.then(function (response) {
// 			axios.get("http://localhost:5050/cards").then(function (response) {
// 				console.log(response.data);
// 			});
// 		})
// 		.catch(function (error) {
// 			console.log(error);
// 		});
// };

const alreadyRemoved = [];
let companysState = db; // Cela résout les problèmes de mise à jour de l'état de l'entreprise qui l'oblige à utiliser l'état actuel et non l'état qui était actif lors de la création de la carte.

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
		setLastDirection(direction);
		console.log("Refusé: " + nameToDelete);
		alreadyRemoved.push(nameToDelete);
	};

	const outOfFrame = (name) => {
		console.log(name + "Vous avez postulé !");
		companysState = companysState.filter((company) => company.name !== name);
		setCompanys(companysState);
	};

	const swipe = (dir) => {
		const cardsLeft = companys.filter(
			(person) => !alreadyRemoved.includes(person.name)
		);
		if (cardsLeft.length) {
			const toBeRemoved = cardsLeft[cardsLeft.length - 1].name; // Trouvez l'objet carte à supprimer
			const index = db.map((person) => person.name).indexOf(toBeRemoved); // Trouvez l'index dont vous voulez faire référence
			alreadyRemoved.push(toBeRemoved); // Assurez-vous que la carte suivante est retirée la prochaine fois si cette carte n'a pas le temps de quitter l'écran
			childRefs[index].current.swipe(dir); // Swipe la card!
		}
	};

	// const urlCompany = companys.find((company) => company.url);

	// console.log(urlCompany);

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
				{lastDirection ? (
					<h2 key={lastDirection} className="infoText">
						You swiped {lastDirection}
					</h2>
				) : (
					<h2 className="infoText">
						Swipe a card or press a button to get started!
					</h2>
				)}
			</div>
		</Container>
	);
}
