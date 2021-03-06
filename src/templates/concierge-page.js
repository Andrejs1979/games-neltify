import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

import { Hero } from '../components/bulma';
import Suggestions from '../components/Suggestions';
import Blurbs from '../components/Blurbs';
import ContentSection from '../components/ContentSection';
import FinalSection from '../components/FinalSection';
// import BlogSection from '../components/BlogSection';
import CTA from '../components/CTA';

export default function ConciergePage({ data }) {
	const { markdownRemark: page } = data;
	const { image, heading, subheading, sections, blurbs, final } = page.frontmatter;

	return (
		<Layout>
			<ConciergePageTemplate
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

export const ConciergePageTemplate = ({ image, heading, subheading, sections, blurbs, final }) => (
	<div>
		<Hero color="light" size="medium" title={heading} subtitle={subheading} image={image} signup />
		<Blurbs box items={blurbs} />
		<ContentSection items={sections} box />
		<FinalSection content={final} />
		<Suggestions />
		<CTA
			color="dark"
			title="Shop your next car stress-free"
			subtitle="CARAGENTS will take care of all the details"
			cta={{ icon: 'car-alt', label: 'Shop cars', link: '/inventory' }}
		/>
	</div>
);

export const conciergePageQuery = graphql`
	query ConciergePage {
		markdownRemark(frontmatter: { templateKey: { eq: "concierge-page" } }) {
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
