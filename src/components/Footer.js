import React from 'react';
import { Link } from 'gatsby';
import { Columns, Column, Container, Footer, Level, Left, Item, Right, Menu, MenuItem } from '../components/bulma';

import facebook from '../img/social/facebook.svg';
import instagram from '../img/social/instagram.svg';
import twitter from '../img/social/twitter.svg';
import linkedin from '../img/social/linkedin.svg';

import appStore from '../img/AppStore.svg';
import googlePlay from '../img/GooglePlay.svg';
import finhub from '../img/finhub-logo.svg';

export default () => {
	return (
		<Footer>
			<Container>
				<Columns>
					<Column>
						<Menu label="Why Mark">
							<MenuItem to="/how-it-works">How it works</MenuItem>
							<MenuItem to="/benefits">Benefits</MenuItem>
							<MenuItem to="/cost">Cost</MenuItem>
							<MenuItem to="/get-started">Getting Started</MenuItem>
						</Menu>
					</Column>
					<Column>
						<Menu label="Solutions">
							<MenuItem to="/small-business">Small Business</MenuItem>
							<MenuItem to="/medium-business">Medium Business</MenuItem>
							<MenuItem to="/brands">Global Brands</MenuItem>
							<MenuItem to="/marketing-agencies">Marketing Agencies</MenuItem>
							<MenuItem to="/white-label">White-label</MenuItem>
						</Menu>
					</Column>
					<Column>
						<Menu label="Resources">
							<MenuItem to="/developers">Developers</MenuItem>
							<MenuItem to="/apps">Download Apps</MenuItem>
							<MenuItem to="/digest">Marketing Digest</MenuItem>
							<li>
								<a title="Help" href="https://help.cashmark.app" className="navbar-item">
									Help
								</a>
							</li>
						</Menu>
					</Column>
					<Column>
						<Menu label="Company">
							<MenuItem to="/news">News</MenuItem>
							<MenuItem to="/about">About</MenuItem>
							<MenuItem to="/mission">Mission</MenuItem>
							<MenuItem to="/blog">Blog</MenuItem>
						</Menu>
					</Column>
				</Columns>
				<br />

				<Level>
					<Left>
						<p>
							<a title="facebook" href="https://www.facebook.com/cashmarkapp">
								<img
									src={facebook}
									alt="Facebook"
									style={{ width: '2em', height: '2em', marginRight: 15 }}
								/>
							</a>
							<a title="twitter" href="https://twitter.com/cashmark_app">
								<img
									src={twitter}
									alt="Twitter"
									style={{ width: '2em', height: '2em', marginRight: 15 }}
								/>
							</a>
							<a title="linkedin" href="https://www.linkedin.com/company/cashmark/">
								<img
									src={linkedin}
									alt="Twitter"
									style={{ width: '2em', height: '2em', marginRight: 15 }}
								/>
							</a>
							<a title="instagram" href="https://www.instagram.com/cashmark_app/">
								<img src={instagram} alt="Instagram" style={{ width: '2em', height: '2em' }} />
							</a>
						</p>
					</Left>
					<Item>
						<div id="navMenu" className={`navbar-menu`}>
							<div className="navbar-end has-text-centered has-text-weight-semibold">
								<Link className="navbar-item" to="/terms">
									Terms of service
								</Link>
								<Link className="navbar-item" to="/privacy">
									Privacy
								</Link>

								<Link className="navbar-item" to="/contact">
									Contact
								</Link>
								<Link className="navbar-item" to="/faq">
									FAQ
								</Link>
							</div>
						</div>
					</Item>
					{/* <Link to="/privacy">Privacy</Link>
							<Link to="/contact">Contact</Link>
						</div>
					</Item> */}
					<Item />
					<Item />

					<Right>
						<p>
							<a title="App Store" href="https://apps.apple.com/us/app/cashmark/id1459957436">
								<img src={appStore} alt="App Store" />
							</a>{' '}
							<a
								title="Google Play"
								href="https://play.google.com/store/apps/details?id=com.cashmark.mark"
							>
								<img className="fas fa-lg" src={googlePlay} alt="Google Play" />
							</a>
						</p>
					</Right>
				</Level>
				<br />
				<hr />
				<br />

				<Level>
					<Left>
						<p className="has-text-left is-size-7">
							<strong>© 2019 Mark</strong>. A{' '}
							<a title="FinHub Global Ventures" href="https://finhub.vc/" target="_blanc">
								FinHub Global Ventures
							</a>{' '}
							company. All rights reserved.
							<br />All product names, trademarks and registered trademarks are property of their
							respective owners.
							<br />All company, product and service names used in this website are for identification
							purposes only.
							<br />Use of these names, trademarks and brands does not imply endorsement.
						</p>
					</Left>
					<Right>
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
					</Right>
				</Level>
				<br />
			</Container>
			<br />
			<br />
		</Footer>
	);
};
