import React from 'react';
// import PreviewCompatibleImage from './PreviewCompatibleImage';
// import Img from 'gatsby-image';
// import { numeral } from 'numeral';
import Img from 'react-cloudinary-lazy-image';
import { Link } from 'gatsby';
import { Button, Box, Columns, Column } from './bulma';

const Hero = ({ item, size, cta, calendar }) => (
	<section className={`hero is-light is-${size}`}>
		<div className="hero-body">
			<div className="container">
				<br />
				<Columns vertical>
					<Column size="three-quarters">
						<h1 className="title is-size-1 has-text-weight-bold">
							{item.make} {item.model}
						</h1>
						<h2 className="subtitle is-size-3">
							{item.year} &bull; {item.mileage} miles
						</h2>
						<h2 className="subtitle is-size-3">Just ${item.price}</h2>
						<br />

						{(cta || calendar) && (
							<div className="is-hidden-mobile">
								<div className="field is-grouped">
									{cta && (
										<p className="control">
											<Link to={`/${item.make}-${item.model}-${item.year}-${item.vin}`}>
												<Button icon={cta.icon} size="large" color="primary" rounded>
													<strong>{cta.label}</strong>
												</Button>
											</Link>
										</p>
									)}
									{calendar && (
										<p className="control">
											<Button icon={calendar.icon} size="large" color="black" rounded>
												{calendar.label}
											</Button>
										</p>
									)}
								</div>
							</div>
						)}
					</Column>
					<Column>
						<Box>
							<Img
								cloudName={'fastlabs'}
								imageName={`caragents/${item.pictures[0].uri}`}
								fluid={{
									maxWidth: 500,
									height: 500
								}}
							/>
						</Box>
					</Column>
				</Columns>
			</div>
		</div>
	</section>
);

export default Hero;
