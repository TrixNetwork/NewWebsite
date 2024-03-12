import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useLocation } from "react-router-dom";

export default function NavBar() {
	const handleCopy = () => {
		navigator.clipboard.writeText("play.trix.pp.ua");
		const button = document.getElementById("copy-ip") as HTMLElement;
		button.innerHTML = "Copied!";
		setTimeout(() => {
			button.innerHTML = "play.trix.pp.ua";
		}, 2000);
	};
	const currentLocation = useLocation().pathname;
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Container>
				<Navbar.Brand href="/">
					<img
						src="/img/logo512.png"
						alt="Trix Logo"
						style={{ height: "2rem", marginRight: "1vw" }}
					/>
					TrixMC
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="/" active={currentLocation === "/"}>
							Home
						</Nav.Link>
						<Nav.Link
							href="/about"
							active={currentLocation === "/about"}
						>
							About
						</Nav.Link>
						<NavDropdown
							title="Gamemodes"
							id="collasible-nav-dropdown"
							active={currentLocation.includes("/gamemodes")}
						>
							<NavDropdown.Item href="/gamemodes/derpitcraft">
								Derpitcraft
							</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link
							href="https://trix.pp.ua/docs"
							target="_blank"
						>
							Documentation{"  "}
							<img
								src="/img/external-link.png"
								alt="external-link"
								style={{ height: "1em" }}
							/>
						</Nav.Link>
					</Nav>
					<Nav>
						<Button
							id="copy-ip"
							variant="outline-success"
							onClick={handleCopy}
							className="ip-button"
						>
							play.trix.pp.ua
						</Button>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
