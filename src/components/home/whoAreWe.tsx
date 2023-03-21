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
						Welcome to TrixMC, where we offer an unforgettable
						Minecraft gaming experience. Our network features a
						variety of gamemodes, such as SMPs, PvP, creative
						building, and survival economy servers, and we support
						both Java and Bedrock editions. We even welcome players
						with cracked clients!
					</p>
					<p>
						Our network is always up-to-date, and we have a team of
						experienced moderators and developers who work
						tirelessly to ensure everything runs smoothly. We're
						constantly improving and adding new features to make the
						best possible experience for our players.
						<br />
						<br />
						<a href="/about">
							<button className="btn btn-primary">
								Read more
							</button>
						</a>
					</p>
				</div>
			</div>
		</div>
	);
}
