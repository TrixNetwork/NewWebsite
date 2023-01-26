import { Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

export default function Gallery() {
	return (
		<Row className="px-4 py-5" style={{ margin: "0" }}>
			<h1 className="text-center display-5 fw-bold">Gallery</h1>
			<Carousel>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="/img/home/carousel1.jpg"
						alt="First slide"
					/>
					<Carousel.Caption
						style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
					>
						<h3>First slide label</h3>
						<p>
							Nulla vitae elit libero, a pharetra augue mollis
							interdum.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="/img/home/carousel2.jpg"
						alt="Second slide"
					/>
					<Carousel.Caption
						style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
					>
						<h3>Second slide label</h3>
						<p>
							Nulla vitae elit libero, a pharetra augue mollis
							interdum.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="/img/home/carousel3.jpg"
						alt="Third slide"
					/>
					<Carousel.Caption
						style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
					>
						<h3>Third slide label</h3>
						<p>
							Nulla vitae elit libero, a pharetra augue mollis
							interdum.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</Row>
	);
}
