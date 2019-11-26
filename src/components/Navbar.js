import React from 'react';
import { Link } from 'gatsby';
// import { Box } from '../components/bulma';
import logo from '../img/mark-logo.svg';

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
				<nav className="navbar is-fixed-top" role="navigation" aria-label="main-navigation">
					<div className="container">
						<div className="navbar-brand">
							<Link to="/" className="navbar-item" title="Logo">
								<img src={logo} alt="Mark" style={{ width: '150px' }} />
							</Link>
							{/* Hamburger menu */}
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
										<a href="https://business.cashmark.app/" className="button is-primary">
											<strong>GET STARTED</strong>
										</a>
										<a href="https://business.cashmark.app/" className="button is-light">
											Sign in
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</nav>
				<nav
					className="navbar is-black is-fixed-bottom is-hidden-desktop"
					role="navigation"
					aria-label="main-navigation"
				>
					<div className="container">
						<div className="navbar-brand">
							<span className="navbar-item">
								<a href="https://business.cashmark.app/" className="button is-primary">
									<strong>GET STARTED</strong>
								</a>
							</span>
							<div className="navbar-item">
								<p>
									Instant $10 sign up bonus!<br />No credit card required.
								</p>
							</div>
							{/* <Link className="navbar-item has-text-weight-semibold" to="/how-it-works">
								How it works
							</Link>
							<Link className="navbar-item" to="/benefits">
								Benefits
							</Link>
							<Link className="navbar-item has-text-weight-semibold" to="/cost">
								Cost
							</Link>
							<Link className="navbar-item has-text-weight-semibold" to="/faq">
								FAQ
							</Link>
							<Link className="navbar-item" to="/get-started">
								Getting Started
							</Link> */}
						</div>
					</div>
				</nav>
			</div>
		);
	}
};

export default Navbar;
