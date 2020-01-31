import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/Layout';
import InventoryRoll from '../components/InventoryRoll';

import Hero from '../components/Hero';
import CTA from '../components/CTA';

import { Section } from '../components/bulma';

export default function InventoryPage() {
	const data = useStaticQuery(INVENTORY_QUERY);
	const { edges: items } = data.allMongodbCaragentsInventory;

	const { node: { make, model } } = items[0];

	return (
		<Layout>
			<Hero size="medium" title={make} subtitle={model} cta="Keep reading" link={`${make}`} />
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
