export default function Hero() {
	return (
		<div className="container col-xxl-8 px-4 py-5">
			<div className="row flex-lg-row-reverse align-items-center g-5 py-5">
				<div className="col-10 col-sm-8 col-lg-6 m-auto">
					<img
						src="/img/home/hero.png"
						className="d-block mx-lg-auto img-fluid"
						alt="TrixMC"
					/>
				</div>
				<div className="col-lg-6">
					<h1 className="display-5 fw-bold lh-1 mb-3">TrixMC</h1>
					<p className="lead">
						If you are looking for a free Minecraft network that
						offers a variety of fun gamemodes, good moderation, and
						supports both Java and Bedrock editions, then you have
						reached the right place. Join our discord to start
						playing!
					</p>
					<div className="d-grid gap-2 d-md-flex justify-content-md-start">
						<a href="https://discord.gg/jDMYEV5">
							<button
								color="#5865F2"
								className="btn btn-lg px-4 me-md-2"
								style={{
									background: "#5865F2",
									color: "white",
									border: "2px solid #5865F2",
									borderRadius: "1em",
									padding: "1rem 2.5rem",
								}}
							>
								<img
									src="/img/home/discord-mark-white.png"
									style={{
										height: "1em",
										marginRight: "1em",
									}}
									alt="discord logo"
								/>
								Join Our Discord
							</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
