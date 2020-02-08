import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

import { Hero } from '../components/bulma';
import Pricing from '../components/Pricing';
import ContentSection from '../components/ContentSection';
import FinalSection from '../components/FinalSection';
import TestimonialSection from '../components/TestimonialSection';
import CTA from '../components/CTA';

export default function PricingPage({ data }) {
	const { markdownRemark: page } = data;
	const { image, heading, subheading, sections, pricing, final } = page.frontmatter;

	return (
		<Layout>
			<PricingPageTemplate
				image={image}
				heading={heading}
				subheading={subheading}
				pricing={pricing}
				sections={sections}
				final={final}
			/>
		</Layout>
	);
}

export const PricingPageTemplate = ({ image, heading, subheading, sections, pricing, final }) => (
	<div>
		<Hero size="medium" color="light" bold title={heading} subtitle={subheading} image={image} signup />
		<Pricing box data={pricing.plans} />
		<ContentSection items={sections} box />
		<FinalSection content={final} />

		<TestimonialSection />
		<CTA
			color="dark"
			title="Shop your next car stress-free"
			subtitle="CARAGENTS Concierge will take care of all the details"
			cta={{ icon: 'car-alt', label: 'Shop cars', link: '/inventory' }}
		/>
	</div>
);

export const pricingPageQuery = graphql`
	query PricingPage {
		markdownRemark(frontmatter: { templateKey: { eq: "pricing-page" } }) {
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
				pricing {
					heading
					description
					plans {
						description
						items
						plan
						price
					}
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
