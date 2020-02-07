import React from 'react';
import { Link } from 'gatsby';
import {
	Columns,
	Column,
	Container,
	Footer,
	Level,
	Left,
	Item,
	Right,
	Menu,
	MenuItem,
	Section
} from '../components/bulma';

import facebook from '../img/social/facebook.svg';
import instagram from '../img/social/instagram.svg';
import twitter from '../img/social/twitter.svg';
import linkedin from '../img/social/linkedin.svg';

import appStore from '../img/AppStore.svg';
import googlePlay from '../img/GooglePlay.svg';

import { Icon } from './brand';

export default () => {
	return (
		<Footer>
			<Container>
				<Columns>
					<Column>
						<Menu label="CARAGENTS">
							<MenuItem to="/why">Why CARAGENTS</MenuItem>
							<MenuItem to="/how-it-works">How it works</MenuItem>
							<MenuItem to="/pricing">Pricing</MenuItem>
							<MenuItem to="/testimonials">Testimonials</MenuItem>
						</Menu>
					</Column>
					<Column>
						<Menu label="Shop cars">
							<MenuItem to="/auto-concierge">Auto Concierge</MenuItem>
							<MenuItem to="/inventory">Inventory</MenuItem>
							<MenuItem to="/trade">Trade or Sell</MenuItem>
							<MenuItem to="/showroom">Showroom</MenuItem>
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
							<MenuItem to="/contact">Contact</MenuItem>
						</Menu>
					</Column>
				</Columns>

				<Section>
					<Level>
						<Left>
							<Item>
								<p>
									{/* <a title="facebook" href="#">
										<img
											src={facebook}
											alt="Facebook"
											style={{ width: '2em', height: '2em', marginRight: 15 }}
										/>
									</a>
									<a title="twitter" href="#">
										<img
											src={twitter}
											alt="Twitter"
											style={{ width: '2em', height: '2em', marginRight: 15 }}
										/>
									</a>
									<a title="linkedin" href="#">
										<img
											src={linkedin}
											alt="Twitter"
											style={{ width: '2em', height: '2em', marginRight: 15 }}
										/>
									</a> */}
									<a title="instagram" href="https://www.instagram.com/caragents_/">
										<img src={instagram} alt="Instagram" style={{ width: '2em', height: '2em' }} />
									</a>
								</p>
							</Item>
						</Left>

						<Right>
							<Item>
								<p>
									<a title="facebook" href="#">
										<img src={appStore} alt="Facebook" />
									</a>{' '}
									<a
										title="twitter"
										href="https://play.google.com/store/apps/details?id=com.caragents.app"
									>
										<img src={googlePlay} alt="Twitter" />
									</a>
								</p>
							</Item>
						</Right>
					</Level>
					<hr />

					<Level>
						<Left>
							<Item>
								<Link to="/" title="CARAGENTS Icon">
									<div
										style={{
											// height: '250px'
											width: '40px',
											marginRight: 20
										}}
										className="size"
									>
										<Icon />
									</div>
								</Link>
								<p className="has-text-left is-size-7">
									<strong>© 2020 CARAGENTS</strong>. All rights reserved.<br />
									<Link className="is-size-7" to="/terms">
										Terms of service
									</Link>{' '}
									<Link className="is-size-7" to="/privacy">
										Privacy Policy
									</Link>
								</p>
							</Item>
						</Left>

						<Right>
							<Item>
								<a className="is-size-7" href="https://fastlabs.co/">
									Software by Fastlabs
								</a>
								{/* <div
							style={{
								width: '120px',
								display: 'inline-block'
							}}
						>
							<a title="FinHub Global Ventures" href="https://finhub.vc/" target="_blanc">
								<img src={finhub} alt="FinHub Global Ventures logo" />
							</a>
						</div> */}
							</Item>
						</Right>
					</Level>
				</Section>
			</Container>
			<br />
			<br />
		</Footer>
	);
};
