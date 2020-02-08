import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

import { Hero } from '../components/bulma';
import Blurbs from '../components/Blurbs';
import Numbers from '../components/Numbers';
import ContentSection from '../components/ContentSection';
import FinalSection from '../components/FinalSection';
import TestimonialSection from '../components/TestimonialSection';
import CTA from '../components/CTA';

export default function WhyPage({ data }) {
	const { markdownRemark: page } = data;
	const { image, heading, subheading, sections, numbers, final } = page.frontmatter;

	return (
		<Layout>
			<WhyPageTemplate
				image={image}
				heading={heading}
				subheading={subheading}
				numbers={numbers}
				sections={sections}
				final={final}
			/>
		</Layout>
	);
}

export const WhyPageTemplate = ({ image, heading, subheading, sections, numbers, final }) => (
	<div>
		<Hero bold color="light" size="medium" title={heading} subtitle={subheading} image={image} />
		<Numbers box items={numbers} color="dark" background="light" />
		<Blurbs items={sections} box />
		{/* <FinalSection content={final} /> */}
		<TestimonialSection />
		<CTA
			color="dark"
			title="Shop your next car stress-free"
			subtitle="CARAGENTS Concierge will take care of all the details"
			cta={{ icon: 'car-alt', label: 'Shop cars', link: '/inventory' }}
		/>
	</div>
);

export const whyPageQuery = graphql`
	query WhyPage {
		markdownRemark(frontmatter: { templateKey: { eq: "why-page" } }) {
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
				numbers {
					number
					label
				}
				sections {
					title
					text
					color
					side
					image {
						childImageSharp {
							fluid(maxWidth: 240, quality: 64) {
								...GatsbyImageSharpFluid
							}
						}
					}
				}
				final {
					title
					text
				}
			}
		}
	}
`;
