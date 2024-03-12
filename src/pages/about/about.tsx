import "./about.css";

export default function About() {
	return (
		<div className="container-fluid">
			<div className="row m-auto px-4 py-5">
				<div className="col-md-12">
					<h1 className="display-5 fw-bold lh-1 mb-3">
						Welcome to TrixMC
					</h1>
					<p>
						A modern Minecraft network that offers a{" "}
						<strong>
							unique and unforgettable gaming experience
						</strong>
						. We provide a free, family-friendly environment with
						excellent moderation to ensure a safe and enjoyable
						atmosphere for all players.
					</p>
					<p>
						Our network offers a variety of gamemodes, including{" "}
						<em>
							<abbr title="Survival Multi Player">SMPs</abbr>
						</em>
						,{" "}
						<em>
							<abbr title="Player v Player">PvP</abbr>
						</em>
						, <em>creative building</em>, and{" "}
						<em>survival economy servers</em>, each with its own set
						of challenges and rewards.
					</p>
					<p>
						At TrixMC, we pride ourselves on offering{" "}
						<strong>world-class gameplay</strong> that will keep you
						engaged and entertained for hours on end. We support
						both Java and Bedrock editions, allowing players to
						connect from a wide range of devices and versions. We
						even support{" "}
						<strong>
							<abbr title="Not authenticated with mojang">
								cracked clients
							</abbr>
						</strong>
						, so everyone can join in on the fun. Our compatibility
						with versions <strong>1.8 to 1.20.4</strong> of
						Minecraft makes TrixMC the perfect destination for
						Minecraft enthusiasts of all ages.
					</p>
					<p>
						Our team of experienced moderators and developers work
						tirelessly to ensure that TrixMC is always up-to-date
						and running smoothly. We believe that our players
						deserve the best, which is why we are constantly
						improving and adding new features to our network.
					</p>
					<p>
						So what are you waiting for?{" "}
						<strong>Join TrixMC today</strong> and discover an
						amazing Minecraft experience that you won't find
						anywhere else. Whether you're a seasoned Minecraft
						veteran or a newcomer to the game, we have something for
						everyone. Come explore our world of possibilities and
						make new friends along the way. We can't wait to see you
						online!
					</p>
				</div>
			</div>
			<div className="row m-auto px-4 py-5">
				<div className="col-md-6">
					<h1 className="display-5 fw-bold lh-1 mb-3">
						What we offer?
					</h1>
					<p>
						<ul className="styled-list">
							<li>World-class gameplay</li>
							<li>Unique gamemodes</li>
							<li>Safe game environment</li>
							<li>Support for both Bedrock and Java</li>
							<li>Support for versions from 1.8 to 1.20.4</li>
							<li>Best in class trained moderators</li>
							<li>Experienced developers</li>
						</ul>
					</p>
				</div>
				<div className="col-md-6">
					<h1 className="display-5 fw-bold lh-1 mb-3">
						Get in Touch
					</h1>
					<p>
						Interested to talk to us?
						<br />
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
					</p>
				</div>
			</div>
			<div className="row m-auto px-4 py-5"></div>
		</div>
	);
}
