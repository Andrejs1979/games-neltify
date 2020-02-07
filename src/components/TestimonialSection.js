import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';

import { Box, Column, Columns, Section } from './bulma';

export default function TestimonialSection({ box }) {
	const data = useStaticQuery(testimonialsQuery);
	const { edges: posts } = data.allMarkdownRemark;

	return (
		<Section>
			<h1 className="title is-size-2 has-text-centered">What our customers say</h1>
			<Columns>
				{posts.map(({ node }) => (
					<div key={node.id} className="column">
						<Column>
							<div class="card">
								<div class="card-content">
									<p class="title">{node.frontmatter.heading}</p>
									<p>{node.frontmatter.text}</p>
									<hr />
									<div class="media">
										<div class="media-left">
											<figure class="image is-48x48">
												{node.frontmatter.image ? (
													<PreviewCompatibleImage
														className="is-rounded"
														imageInfo={{
															image: node.frontmatter.image,
															alt: `featured image thumbnail for node ${node.frontmatter
																.name}`
														}}
													/>
												) : null}
											</figure>
										</div>
										<div class="media-content">
											<div className="content">
												<p class="title is-5">{node.frontmatter.name}</p>
												<p class="subtitle is-5">{node.frontmatter.city}</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</Column>
					</div>
				))}
			</Columns>
		</Section>
	);
}

export const testimonialsQuery = graphql`
	query TestimonialSection {
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
