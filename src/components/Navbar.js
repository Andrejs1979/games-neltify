import React from 'react';
import { Link } from 'gatsby';
import { Logo } from './brand';

import { Button } from './bulma';

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
				<nav className="navbar is-light is-fixed-top has-shadow" role="navigation" aria-label="main-navigation">
					<div className="container">
						<div className="navbar-brand">
							<Link to="/" className="navbar-item" title="Logo">
								<div
									style={{
										width: 180,
										height: 28
									}}
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
								<Link className="navbar-item" to="/pricing">
									Why Caragents
								</Link>
								<Link className="navbar-item" to="/solutions/overview">
									Testimonials
								</Link>
								<Link className="navbar-item" to="/pricing">
									Pricing
								</Link>
								<Link className="navbar-item" to="/features/overview">
									Trade or Sell
								</Link>
								<Link className="navbar-item" to="/inventory">
									<Button icon="car-alt" color="danger" iconColor="#FFF" rounded>
										Shop cars
									</Button>
								</Link>
							</div>
						</div>
					</div>
				</nav>

				{/* BOTTOM NAVBAR */}

				<nav className="navbar is-light is-fixed-bottom" role="navigation" aria-label="main-navigation">
					<div className="container">
						<div className="navbar-brand">
							<span className="navbar-item is-hidden-mobile">
								<div className="field is-grouped">
									<p className="control">
										<Link to="/inventory">
											<Button icon="car-alt" color="danger" iconColor="#FFF" rounded>
												Shop cars
											</Button>
										</Link>
									</p>
									{/* <p className="control">
										<a href="#" className="button is-text has-text-weight-semibold">
											Schedule a free consultation
										</a>
									</p> */}
								</div>
							</span>
							<span className="navbar-item is-hidden-desktop">
								<div className="field is-grouped">
									<p className="control">
										<a href="#" className="button is-black is-outlined is-rounded">
											<strong>GET STARTED</strong>
										</a>
									</p>
									<p className="control">
										<p className="control">
											<a href="#" className="button is-text has-text-weight-semibold">
												Schedule consultation
											</a>
										</p>
									</p>
								</div>
							</span>
						</div>

						<div className="navbar-end">
							<span className="navbar-item">
								<p className="control">
									<p className="control">
										<a href="tel:415-699-2647" className="has-text-weight-semibold">
											<Button icon="phone-alt" color="black" iconColor="#FFF" rounded>
												415-699-2647
											</Button>
										</a>
									</p>
								</p>
							</span>
						</div>
					</div>
				</nav>
			</div>
		);
	}
};

export default Navbar;
