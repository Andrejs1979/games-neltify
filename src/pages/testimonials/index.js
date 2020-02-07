import React from 'react';

import Layout from '../../components/Layout';
import Masonry from '../../components/Masonry';

import CTA from '../../components/CTA';

import { Hero, Section } from '../../components/bulma';

export default function TestimonialsIndexPage({ data }) {
	const { edges: items } = data.allMarkdownRemark;

	return (
		<Layout>
			<Hero
				color="light"
				size="medium"
				title="Testimonials"
				subtitle="Here's what our customers say about us"
				// image={featuredImage}
				cta="Keep reading"
				// link={slug}
			/>
			<Masonry data={items} type="testimonials" />
			<CTA
				title="We deserve your trust"
				subtitle="Join thousands of our happy customers today!"
				cta={{ icon: 'car', label: 'Shop cars', link: '/inventory' }}
			/>
		</Layout>
	);
}

export const testimonailsQuery = graphql`
	query Testimonials {
		allMarkdownRemark(
			sort: { order: DESC, fields: [frontmatter___date] }
			filter: { frontmatter: { templateKey: { eq: "testimonial-page" } } }
		) {
			edges {
				node {
					excerpt(pruneLength: 400)
					id
					fields {
						slug
					}
					frontmatter {
						name
						city
						templateKey
						date(formatString: "MMMM DD, YYYY")
						featuredpost
						heading
						text
						image {
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
