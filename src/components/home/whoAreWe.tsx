export default function WhoAreWe() {
	return (
		<div className="container-fluid">
			<div className="row m-auto px-4 py-5">
				<div className="col-md-6 my-auto">
					<img
						src="/img/logo512.png"
						className="d-block mx-lg-auto img-fluid"
						style={{ maxWidth: "100%", maxHeight: "100%" }}
						alt="trix logo"
					/>
				</div>
				<div className="col-md-6">
					<h1 className="display-5 fw-bold lh-1 mb-3">Who Are We?</h1>
					<p>
						Lorem ipsum dolor sit amet,{" "}
						<strong>consectetur adipiscing elit</strong>. Aliquam
						eget sapien sapien. Curabitur in metus urna. In hac
						habitasse platea dictumst. Phasellus eu sem sapien, sed
						vestibulum velit. Nam purus nibh, lacinia non faucibus
						et, pharetra in dolor. Sed iaculis posuere diam ut
						cursus.{" "}
						<em>
							Morbi commodo sodales nisi id sodales. Proin
							consectetur, nisi id commodo imperdiet, metus nunc
							consequat lectus, id bibendum diam velit et dui.
						</em>{" "}
						Proin massa magna, vulputate nec bibendum nec, posuere
						nec lacus.{" "}
						<small>
							Aliquam mi erat, aliquam vel luctus eu, pharetra
							quis elit. Nulla euismod ultrices massa, et feugiat
							ipsum consequat eu.
						</small>
					</p>
				</div>
			</div>
		</div>
	);
}
