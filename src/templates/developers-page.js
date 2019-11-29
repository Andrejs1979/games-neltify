import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/Layout';

import Hero from '../components/Hero';
import Blurbs from '../components/Blurbs';
import ContentSection from '../components/ContentSection';
import FinalSection from '../components/FinalSection';
import BlogSection from '../components/BlogSection';
import CTA from '../components/CTA';

export default function DevelopersPage() {
	const data = useStaticQuery(WHITE_LABEL_PAGE_QUERY);

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

export const developersPageQuery = graphql`
	query DevelopersPage {
		markdownRemark(frontmatter: { templateKey: { eq: "developers-page" } }) {
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