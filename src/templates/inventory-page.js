import React from 'react';
import { graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Img from 'react-cloudinary-lazy-image';
import { Box, Column, Columns, Section, Level, Item, Tile } from '../components/bulma';

import Layout from '../components/Layout';
import Hero from '../components/HeroInventory';
import Suggestions from '../components/Suggestions';
import CTA from '../components/CTA';

export default function InventoryPage({ data }) {
	const { mongodbCaragentsCars: item } = data;

	return (
		<Layout>
			<InventoryPageTemplate item={item} />
		</Layout>
	);
}

export const InventoryPageTemplate = ({ item }) => (
	<div>
		<Hero
			item={item}
			calendar={{
				label: 'Schedule a test-drive',
				icon: 'calendar-alt'
			}}
		/>
		<Section>
			<Columns>
				<Column>
					<Box>
						<Level>
							<Item>
								<FontAwesomeIcon icon="car-side" size="4x" />
							</Item>
							<Item>
								<div>
									<p className="title">{item.body}</p>
									{/* <p className="subtitle">{item.doors} Doors</p> */}
								</div>
							</Item>
						</Level>
					</Box>
				</Column>
				<Column>
					<Box>
						<Level>
							<Item>
								<FontAwesomeIcon icon="tachometer-alt" size="4x" />
							</Item>
							<Item>
								<div>
									<p className="title">{item.transmission}</p>
									{/* <p className="subtitle">{item.drive}</p> */}
								</div>
							</Item>
						</Level>
					</Box>
				</Column>

				<Column>
					<Box>
						<Level>
							<Item>
								<FontAwesomeIcon icon="leaf" size="4x" />
							</Item>
							<Item>
								<div>
									<p className="title">
										{item.mpgCity}/{item.mpgHighway} mpg
									</p>
									{/* <p className="subtitle">{item.mpgHighway} mpg</p> */}
								</div>
							</Item>
						</Level>
					</Box>
				</Column>
			</Columns>
		</Section>
		<Section>
			<Columns multiline>
				{item.pictures.map((picture) => (
					<div className="is-parent column is-4" key={picture.uri}>
						<Tile box>
							<Img
								cloudName={'fastlabs'}
								imageName={`caragents/${picture.uri}`}
								fluid={{
									maxWidth: 300,
									height: 300
								}}
							/>
						</Tile>
					</div>
				))}
			</Columns>
		</Section>

		<CTA
			title="Like this car?"
			subtitle="We can bring it to you to try, no-obligation"
			cta={{ label: 'Book your test-drive', icon: 'calendar-alt', link: '/' }}
		/>
		<Suggestions />
	</div>
);

export const pageQuery = graphql`
	query InventoryPageByID($id: String!) {
		mongodbCaragentsCars(id: { eq: $id }) {
			make
			model
			mileage
			pictures {
				uri
			}
			price
			transmission
			trim
			vin
			year
			exterior
			fuel
			interior
			drive
			doors
			body
			id
			mpgCity
			mpgHighway
		}
	}
`;
