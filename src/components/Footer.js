import React from 'react';
import { Link } from 'gatsby';
import { Columns, Column, Container, Footer, Level, Left, Item, Right, Menu, MenuItem } from '../components/bulma';

import facebook from '../img/social/facebook.svg';
import instagram from '../img/social/instagram.svg';
import twitter from '../img/social/twitter.svg';
import linkedin from '../img/social/linkedin.svg';

import appStore from '../img/AppStore.svg';
import googlePlay from '../img/GooglePlay.svg';

export default () => {
	return (
		<Footer>
			<Container>
				<Columns>
					<Column>
						<Menu label="Caragents">
							<MenuItem to="/why">Why Caragents</MenuItem>
							<MenuItem to="/how-it-works">How it works</MenuItem>
							<MenuItem to="/benefits">Benefits</MenuItem>
							<MenuItem to="/pricing">Pricing</MenuItem>
							<MenuItem to="/case-studies">Reviews</MenuItem>
							<MenuItem to="/get-started">Getting Started</MenuItem>
						</Menu>
					</Column>
					<Column>
						<Menu label="services">
							<MenuItem to="/services/auto-concierge">Auto Concierge</MenuItem>
							<MenuItem to="/services/buy">Buy a Car</MenuItem>
							<MenuItem to="/services/sell">Sell a Car</MenuItem>
							<MenuItem to="/services/storage">Car Storage</MenuItem>
							<MenuItem to="/services/maintanance">White-glove Maintanace</MenuItem>
							<MenuItem to="/services/consultancy">Consultancy</MenuItem>
						</Menu>
					</Column>
					<Column>
						<Menu label="Solutions">
							<MenuItem to="/solutions/daily-driving">Daily Driving</MenuItem>
							<MenuItem to="/solutions/fun-cars">Fun Cars</MenuItem>
							<MenuItem to="/solutions/collectors">Collectors</MenuItem>
							<MenuItem to="/solutions/fleet-management">Fleet Management</MenuItem>
							<MenuItem to="/solutions/marketplaces">Marketplaces</MenuItem>
							<MenuItem to="/solutions/whitelabel">White-label</MenuItem>
						</Menu>
					</Column>

					<Column>
						<Menu label="Resources">
							<MenuItem to="/blog">Blog</MenuItem>
							<MenuItem to="/faq">FAQ</MenuItem>
							<MenuItem to="/auto-digest">Auto Digest</MenuItem>
						</Menu>
					</Column>
					<Column>
						<Menu label="Company">
							<MenuItem to="/about">About</MenuItem>
							<MenuItem to="/mission">Mission</MenuItem>
							<MenuItem to="/news">News</MenuItem>
							<MenuItem to="/contact">Contact</MenuItem>
						</Menu>
					</Column>
				</Columns>
				<br />

				<Level>
					<Item>
						<p>
							<a title="facebook" href="https://www.facebook.com/cashmarkapp">
								<img
									src={facebook}
									alt="Facebook"
									style={{ width: '1.5em', height: '1.5em', marginRight: 15 }}
								/>
							</a>
							<a title="twitter" href="https://twitter.com/cashmark_app">
								<img
									src={twitter}
									alt="Twitter"
									style={{ width: '1.5em', height: '1.5em', marginRight: 15 }}
								/>
							</a>
							<a title="linkedin" href="https://www.linkedin.com/company/cashmark/">
								<img
									src={linkedin}
									alt="Twitter"
									style={{ width: '1.5em', height: '1.5em', marginRight: 15 }}
								/>
							</a>
							<a title="instagram" href="https://www.instagram.com/cashmark_app/">
								<img src={instagram} alt="Instagram" style={{ width: '1.5em', height: '1.5em' }} />
							</a>
						</p>
					</Item>
				</Level>
				<br />
				<hr />
				<br />

				<Level>
					<Left>
						<p className="has-text-left is-size-7">
							<strong>© 2020 Caragents</strong>. All rights reserved.
						</p>
					</Left>
					<Item>
						<div id="navMenu" className={`navbar-menu`}>
							<div className="navbar-end has-text-centered is-size-7">
								<Link className="navbar-item" to="/terms">
									Terms of service
								</Link>
								<Link className="navbar-item" to="/privacy">
									Privacy
								</Link>
							</div>
						</div>
					</Item>
					<Item />
					<Right>
						<p>
							<a title="App Store" href="#">
								<img src={appStore} alt="App Store" />
							</a>{' '}
							<a title="Google Play" href="#">
								<img className="fas fa-lg" src={googlePlay} alt="Google Play" />
							</a>
						</p>
					</Right>
					{/* <Right>
						<div
							style={{
								width: '120px',
								display: 'inline-block'
							}}
						>
							<a title="FinHub Global Ventures" href="https://finhub.vc/" target="_blanc">
								<img src={finhub} alt="FinHub Global Ventures logo" />
							</a>
						</div>
					</Right> */}
				</Level>
				<br />
			</Container>
			<br />
			<br />
		</Footer>
	);
};
