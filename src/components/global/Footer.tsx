import { Button, Col, Row, Container } from "react-bootstrap";

export default function Footer() {
	return (
		<footer
			style={{
				background: "#212529",
				color: "#ffffff",
				paddingTop: "2vh",
			}}
		>
			<Container>
				<Row>
					<Col md={8}>
						<h2>About us</h2>
						<p>
							Welcome to TrixMC, where we offer an unforgettable
							Minecraft gaming experience. Our network features a
							variety of gamemodes, such as SMPs, PvP, creative
							building, and survival economy servers, and we
							support both Java and Bedrock editions. We even
							welcome players with cracked clients!{" "}
						</p>
						<p>
							Our network is always up-to-date, and we have a team
							of experienced moderators and developers who work
							tirelessly to ensure everything runs smoothly. We're
							constantly improving and adding new features to make
							the best possible experience for our players.
						</p>
						<p>
							<a href="/about">
								<Button>Learn More</Button>
							</a>
						</p>
					</Col>
					<Col md={4}>
						<iframe
							src="https://canary.discord.com/widget?id=297301054930944011&theme=dark"
							width="350"
							height="500"
							allowTransparency={true}
							frameBorder={0}
							sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
							title="Discord"
						></iframe>
					</Col>
				</Row>
			</Container>
		</footer>
	);
}
