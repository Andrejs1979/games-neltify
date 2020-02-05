import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/Layout';
import InventoryRoll from '../components/InventoryRoll';

import Hero from '../components/HeroInventory';
import CTA from '../components/CTA';

import { Section } from '../components/bulma';

export default function InventoryPage() {
	const data = useStaticQuery(INVENTORY_QUERY);
	const { edges: items } = data.allMongodbCaragentsCars;

	const { node, node: { make, model, year, price, vin, pictures } } = items[0];

	return (
		<Layout>
			<Hero
				item={node}
				cta={{
					label: 'Learn more',
					icon: 'search',
					link: `${make}-${model}-${year}-${vin}`
				}}
				calendar={{
					label: 'Schedule a test-drive',
					icon: 'calendar-alt'
				}}
			/>

			<Section>
				<InventoryRoll />
			</Section>
			<CTA
				title="Need help choosing?"
				subtitle="We are here to help"
				cta={{ label: 'Schedule a free call', icon: 'calendar-alt', link: '/' }}
			/>
		</Layout>
	);
}

const INVENTORY_QUERY = graphql`
	query JustIn {
		allMongodbCaragentsCars(limit: 1, sort: { fields: createdAt, order: DESC }) {
			edges {
				node {
					id
					body
					make
					mileage
					model
					mongodb_id
					price
					year
					pictures {
						uri
					}
					interior
					mpgHighway
					mpgCity
					transmission
					trim
					vin
					doors
					drive
					engine
					exterior
					fuel
				}
			}
		}
	}
`;
