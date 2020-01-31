import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/Layout';
import InventoryRoll from '../components/InventoryRoll';

import Hero from '../components/HeroInventory';
import CTA from '../components/CTA';

import { Section } from '../components/bulma';

export default function InventoryPage() {
	const data = useStaticQuery(INVENTORY_QUERY);
	const { edges: items } = data.allMongodbCaragentsInventory;

	const { node: { make, model, year, price, vin, pictures } } = items[0];

	return (
		<Layout>
			<Hero
				size="large"
				title={`Just in: ${make} ${model}`}
				subtitle={price}
				pictures={pictures}
				cta={{
					label: 'Learn more',
					icon: 'search',
					link: `${make}-${model}-${year}-${vin}`
				}}
				calendar={{
					label: 'Schedule test-drive',
					icon: 'calendar-alt'
				}}
			/>

			<Section>
				<InventoryRoll />
			</Section>
			<CTA />
		</Layout>
	);
}

const INVENTORY_QUERY = graphql`
	query MyQuery {
		allMongodbCaragentsInventory {
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
						featured
					}
					interior
					mpg_highway
					mpg_city
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
