import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

import { Hero } from '../components/bulma';
import Blurbs from '../components/Blurbs';
import ContentSection from '../components/ContentSection';
import FinalSection from '../components/FinalSection';
import TestimonialSection from '../components/TestimonialSection';
import CTA from '../components/CTA';

export default function HowItWorksPage({ data }) {
	const { markdownRemark: page } = data;
	const { image, heading, subheading, sections, blurbs, final } = page.frontmatter;

	return (
		<Layout>
			<HowItWorksPageTemplate
				image={image}
				heading={heading}
				subheading={subheading}
				blurbs={blurbs}
				sections={sections}
				final={final}
			/>
		</Layout>
	);
}

export const HowItWorksPageTemplate = ({ image, heading, subheading, sections, blurbs, final }) => (
	<div>
		<Hero color="light" size="medium" title={heading} subtitle={subheading} image={image} />
		<Blurbs box items={blurbs} />
		<ContentSection items={sections} box />
		<FinalSection content={final} />
		<TestimonialSection />
		<CTA />
	</div>
);

export const howItWorksPageQuery = graphql`
	query HowItWorksPage {
		markdownRemark(frontmatter: { templateKey: { eq: "how-it-works-page" } }) {
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
				blurbs {
					image {
						childImageSharp {
							fluid(maxWidth: 240, quality: 64) {
								...GatsbyImageSharpFluid
							}
						}
					}
					title
					text
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
