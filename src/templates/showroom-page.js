import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

import { Hero } from '../components/bulma';
import Blurbs from '../components/Blurbs';
import ContentSection from '../components/ContentSection';
import FinalSection from '../components/FinalSection';
import Gallery from '../components/Gallery';
import CTA from '../components/CTA';

export default function ShowroomPage({ data }) {
	const { markdownRemark: page } = data;
	const { image, heading, subheading, gallery } = page.frontmatter;

	return (
		<Layout>
			<ShowroomPageTemplate image={image} heading={heading} subheading={subheading} gallery={gallery} />
		</Layout>
	);
}

export const ShowroomPageTemplate = ({ image, heading, subheading, gallery }) => (
	<div>
		<Hero color="light" size="medium" title={heading} subtitle={subheading} image={image} signup />
		<Gallery items={gallery} />
		<CTA
			color="dark"
			title="Visit our state-of-the-art showroom"
			subtitle="Book your free visit now"
			calendar={{
				icon: 'calendar-alt',
				label: 'Book your visit',
				link: 'https://calendly.com/caragents/free-consultation'
			}}
		/>
	</div>
);

export const showroomPageQuery = graphql`
	query ShowroomPage {
		markdownRemark(frontmatter: { templateKey: { eq: "showroom-page" } }) {
			frontmatter {
				title
				heading
				subheading
				image {
					childImageSharp {
						fluid(maxWidth: 2048, quality: 100) {
							...GatsbyImageSharpFluid
						}
					}
				}
				gallery {
					image {
						childImageSharp {
							fluid(maxWidth: 240, quality: 64) {
								...GatsbyImageSharpFluid
							}
						}
					}
				}
			}
		}
	}
`;
