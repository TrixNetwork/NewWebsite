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
							Donec id elit non mi porta gravida at eget metus.
							Fusce dapibus, tellus ac cursus commodo, tortor
							mauris condimentum nibh, ut fermentum massa justo
							sit amet risus. Etiam porta sem malesuada magna
							mollis euismod. Donec sed odio dui.
						</p>
						<p>
							<Button>Learn More</Button>
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
