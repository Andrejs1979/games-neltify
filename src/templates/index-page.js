import React from 'react';
import { graphql } from 'gatsby';

// import Sky from 'react-sky';
// import facebook from '../img/social/facebook.svg';
// import instagram from '../img/social/instagram.svg';
// import linkedin from '../img/social/linkedin.svg';
// import twitter from '../img/social/twitter.svg';
// import pinterest from '../img/social/pinterest.svg';
// import snapchat from '../img/social/snapchat.svg';
// import youtube from '../img/social/youtube.svg';
// import vimeo from '../img/social/vimeo.svg';

import Layout from '../components/Layout';
import Hero from '../components/Hero';
// import Slideshow from '../components/Slideshow';
import Blurbs from '../components/Blurbs';
import ContentSection from '../components/ContentSection';
import FinalSection from '../components/FinalSection';
// import BlogSection from '../components/BlogSection';
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
		{/* <Sky
			images={{
				0: facebook,
				1: instagram,
				2: linkedin,
				3: twitter,
				4: pinterest,
				5: youtube,
				6: vimeo,
				7: snapchat,
				8: instagram
			}}
			how={15}
			time={500}
			size={'20px'}
		/> */}
		<Hero size="medium" title={heading} subtitle={subheading} image={image} signup />
		<Blurbs box items={blurbs} />
		<ContentSection items={sections} box />
		<FinalSection content={final} />
		{/* <BlogSection /> */}
		<CTA />
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
