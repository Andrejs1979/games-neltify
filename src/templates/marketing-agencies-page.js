import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/Layout';

import Hero from '../components/Hero';
import Blurbs from '../components/Blurbs';
import ContentSection from '../components/ContentSection';
import FinalSection from '../components/FinalSection';
import BlogSection from '../components/BlogSection';
import CTA from '../components/CTA';

export default function HowItWorksPage() {
	const data = useStaticQuery(MARKETING_AGENCIES_QUERY);

	const { markdownRemark: page } = data;
	const { image, heading, subheading, sections, blurbs, final } = page.frontmatter;

	return (
		<Layout>
			<Hero size="medium" title={heading} subtitle={subheading} image={image} />
			<Blurbs box gridItems={blurbs} />
			<ContentSection sections={sections} box />
			<FinalSection content={final} />
			<BlogSection />
			<CTA />
		</Layout>
	);
}

const MARKETING_AGENCIES_QUERY = graphql`
	query MarketingAgencies {
		markdownRemark(frontmatter: { templateKey: { eq: "marketing-agencies-page" } }) {
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
