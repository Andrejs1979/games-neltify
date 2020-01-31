import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

import Hero from '../components/Hero';
import Blurbs from '../components/Blurbs';
import ContentSection from '../components/ContentSection';
import FinalSection from '../components/FinalSection';
// import BlogSection from '../components/BlogSection';
import CTA from '../components/CTA';

export default function InventoryPage({ data }) {
	const { mongodbCaragentsInventory: page } = data;
	const {
		make,
		model,
		mileage,
		pictures,
		price,
		transmission,
		trim,
		vin,
		year,
		exterior,
		fuel,
		interior,
		drive,
		doors,
		body,
		id,
		mpg_city,
		mpg_highway
	} = page;

	const heading = make;
	const subheading = model;

	return (
		<Layout>
			<InventoryPageTemplate
				// image={image}
				heading={heading}
				subheading={subheading}
				// blurbs={blurbs}
				// sections={sections}
				// final={final}
			/>
		</Layout>
	);
}

export const InventoryPageTemplate = ({ image, heading, subheading, sections, blurbs, final }) => (
	<div>
		<Hero size="medium" title={heading} subtitle={subheading} signup />
		{/* <Blurbs box items={blurbs} />
		<ContentSection items={sections} box />
		<FinalSection content={final} /> */}
		{/* <BlogSection /> */}
		<CTA />
	</div>
);

export const pageQuery = graphql`
	query InventoryPageByID($id: String!) {
		mongodbCaragentsInventory(id: { eq: $id }) {
			make
			model
			mileage
			pictures {
				featured
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
			mpg_city
			mpg_highway
		}
	}
`;
