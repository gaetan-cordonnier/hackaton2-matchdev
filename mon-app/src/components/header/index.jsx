import React from "react";
import { Container } from "./style";

export default function Header() {
	return (
		<Container>
			<img className="match" src="/images/match_icon.svg" alt="Match Icon" />
			<img
				className="logo"
				src="/images/md_logo_white.png"
				alt="Match Dev logo"
			/>
			<img
				className="profile"
				src="/images/profile_user.svg"
				alt="User Profile Icon"
			/>
		</Container>
	);
}
