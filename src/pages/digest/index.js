import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../../components/Layout';
import BlogRoll from '../../components/BlogRoll';

import Hero from '../../components/Hero';
import CTA from '../../components/CTA';

import { Section } from '../../components/bulma';

export default function BlogIndexPage() {
	const data = useStaticQuery(MARKETING_GUIDE_QUERY);
	const { edges: posts } = data.allMarkdownRemark;

	const { node: { frontmatter: { title, featuredImage }, excerpt, fields: { slug } } } = posts[0];

	return (
		<Layout>
			<Hero size="medium" title={title} subtitle={excerpt} image={featuredImage} cta="Keep reading" link={slug} />
			<Section>
				<BlogRoll />
			</Section>
			<CTA />
		</Layout>
	);
}

const MARKETING_GUIDE_QUERY = graphql`
	query MarketingGuide {
		allMarkdownRemark(
			sort: { order: DESC, fields: [frontmatter___date] }
			filter: { frontmatter: { templateKey: { eq: "digest-article" } } }
		) {
			edges {
				node {
					excerpt(pruneLength: 400)
					id
					fields {
						slug
					}
					frontmatter {
						title
						templateKey
						date(formatString: "MMMM DD, YYYY")
						featuredpost
						featuredimage {
							childImageSharp {
								fluid(maxWidth: 120, quality: 100) {
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
