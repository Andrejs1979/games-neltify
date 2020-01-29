import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Hero from '../components/HeroPicture';
// import Slideshow from '../components/Slideshow';
import Blurbs from '../components/Blurbs';
import ContentSection from '../components/ContentSection';
import FinalSection from '../components/FinalSection';
import BlogSection from '../components/BlogSection';
import CTA from '../components/CTA';

export default function IndexPage({ data }) {
	const { markdownRemark: page } = data;
	const { image, heading, subheading, sections, blurbs, final } = page.frontmatter;

	return (
		<Layout>
			<IndexPageTemplate
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

export const IndexPageTemplate = ({ image, heading, subheading, sections, blurbs, final }) => (
	<div>
		<Hero size="large" title={heading} subtitle={subheading} image={image} signup />
		<Blurbs box items={blurbs} />
		<ContentSection items={sections} box />
		<FinalSection content={final} />
		<BlogSection />
		<CTA color="dark" />
	</div>
);

export const indexPageQuery = graphql`
	query IndexPage {
		markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
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
					# image {
					# 	childImageSharp {
					# 		fluid(maxWidth: 240, quality: 64) {
					# 			...GatsbyImageSharpFluid
					# 		}
					# 	}
					# }
				}
			}
		}
	}
`;
