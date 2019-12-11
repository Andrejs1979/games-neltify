import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

import Hero from '../components/Hero';
import Blurbs from '../components/Blurbs';
import ContentSection from '../components/ContentSection';
import FinalSection from '../components/FinalSection';
// import BlogSection from '../components/BlogSection';
import CTA from '../components/CTA';

export default function IndustryPage({ data }) {
	const { markdownRemark: page } = data;
	const { image, heading, subheading, sections, blurbs, final } = page.frontmatter;

	return (
		<Layout>
			<IndustryPageTemplate
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

export const IndustryPageTemplate = ({ image, heading, subheading, sections, blurbs, final }) => (
	<div>
		<Hero size="medium" title={heading} subtitle={subheading} image={image} signup />
		<Blurbs box items={blurbs} />
		<ContentSection items={sections} box />
		{/* <FinalSection content={final} /> */}
		{/* <BlogSection /> */}
		<CTA />
	</div>
);

export const pageQuery = graphql`
	query IndustryPageByID {
		markdownRemark(frontmatter: { templateKey: { eq: "industry-page" } }) {
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
					Image {
						alt
						image {
							childImageSharp {
								fluid(maxWidth: 400, quality: 64) {
									...GatsbyImageSharpFluid
								}
							}
						}
					}
				}
			}
		}
	}
`;
