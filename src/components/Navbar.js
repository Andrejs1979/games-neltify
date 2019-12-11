import React from 'react';
import { Link } from 'gatsby';
import { Logo } from './brand';

const Navbar = class extends React.Component {
	state = {
		active: false,
		navBarActiveClass: ''
	};

	toggleHamburger = () => {
		// toggle the active boolean in the state
		this.setState(
			{
				active: !this.state.active
			},
			// after state has been updated,
			() => {
				// set the class in state for the navbar accordingly
				this.state.active
					? this.setState({
							navBarActiveClass: 'is-active'
						})
					: this.setState({
							navBarActiveClass: ''
						});
			}
		);
	};

	render() {
		return (
			<div>
				<nav className="navbar is-fixed-top has-shadow" role="navigation" aria-label="main-navigation">
					<div className="container">
						<div className="navbar-brand">
							<Link to="/" className="navbar-item" title="Logo">
								<div
									style={{
										// height: '250px'
										width: '100px'
									}}
									className="size"
								>
									<Logo />
								</div>
							</Link>

							<div
								className={`navbar-burger burger ${this.state.navBarActiveClass}`}
								data-target="navMenu"
								onClick={() => this.toggleHamburger()}
							>
								<span />
								<span />
								<span />
							</div>
						</div>
						<div id="navMenu" className={`navbar-menu ${this.state.navBarActiveClass}`}>
							<div className="navbar-end has-text-centered has-text-weight-semibold">
								<Link className="navbar-item" to="/how-it-works">
									How it works
								</Link>
								<Link className="navbar-item" to="/benefits">
									Benefits
								</Link>

								<Link className="navbar-item" to="/cost">
									Cost
								</Link>
								<Link className="navbar-item" to="/faq">
									FAQ
								</Link>
								<Link className="navbar-item" to="/get-started">
									Getting Started
								</Link>
							</div>
							<div className="navbar-end">
								<div className="navbar-item">
									<div className="buttons is-centered">
										<a href="https://app.mark.camera" className="button is-primary">
											<strong>GET STARTED</strong>
										</a>
										<a href="https://app.mark.camera" className="button is-light">
											Sign in
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</nav>

				{/* BOTTOM NAVBAR */}

				<nav className="navbar is-black is-fixed-bottom" role="navigation" aria-label="main-navigation">
					<div className="container">
						<div className="navbar-brand">
							<span className="navbar-item is-hidden-mobile">
								<div className="field is-grouped">
									<p className="control">
										<a href="https://app.mark.camera" className="button is-white is-outlined">
											<strong>GET $10 IN ADS FREE</strong>
										</a>
										{/* <p>No credit card required</p> */}
									</p>
									<p className="control">
										<a
											href="https://calendly.com/mark-camera/demo"
											className="button is-white is-inverted is-text has-text-weight-semibold"
										>
											Schedule a free, no-obligation demo
										</a>
									</p>
								</div>
							</span>
							<span className="navbar-item is-hidden-desktop">
								<div className="field is-grouped">
									<p className="control">
										<a
											href="https://app.mark.camera"
											className="button is-medium is-white is-outlined"
										>
											<strong>GET STARTED</strong>
										</a>
										{/* <p>No credit card required</p> */}
									</p>
									<p className="control">
										<a
											href="https://calendly.com/mark-camera/demo"
											className="button is-white is-inverted is-text has-text-weight-semibold"
										>
											Schedule free demo
										</a>
									</p>
								</div>
							</span>
						</div>

						<div className="navbar-end is-hidden-mobile">
							<Link className="navbar-item has-text-weight-semibold" to="/news">
								New! Try our Campaign Wizard and get started in munutes
							</Link>
						</div>
					</div>
				</nav>
			</div>
		);
	}
};

export default Navbar;
