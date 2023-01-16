import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useLocation } from "react-router-dom";

export default function NavBar() {
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
					</Nav>
					{/* <Nav>
						<Nav.Link href="#deets">More deets</Nav.Link>
						<Nav.Link eventKey={2} href="#memes">
							Dank memes
						</Nav.Link>
					</Nav> */}
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
