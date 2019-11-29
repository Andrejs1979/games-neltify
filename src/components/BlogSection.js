import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';

import { Box, Column, Columns, Section } from '../components/bulma';

export default function BlogHeadlines({ box }) {
	const data = useStaticQuery(BLOG_HEADLINES_QUERY);
	const { edges: posts } = data.allMarkdownRemark;
	console.log(data);

	return (
		<Section>
			<h1 className="title is-size-2 has-text-centered">More from Mark</h1>
			<Columns>
				{posts.map(({ node: post }) => (
					<div key={post.id} className="column">
						<Column>
							<Box>
								<div className="has-text-centered">
									<figure className="image is-64x64">
										{post.frontmatter.featuredimage ? (
											<div className="featured-thumbnail">
												<PreviewCompatibleImage
													imageInfo={{
														image: post.frontmatter.featuredimage,
														alt: `featured image thumbnail for post ${post.title}`
													}}
												/>
											</div>
										) : null}
									</figure>
								</div>
								<br />

								<p className="post-meta">
									<Link className="title is-size-4" to={post.fields.slug}>
										{post.frontmatter.title}
									</Link>
								</p>
								<br />
								<Link to={post.fields.slug} className="button is-primary is-outlined">
									Read more >
								</Link>
							</Box>
						</Column>
					</div>
				))}
			</Columns>
		</Section>
	);
}

const BLOG_HEADLINES_QUERY = graphql`
	query BlogHeadlinesQuery {
		allMarkdownRemark(
			limit: 3
			sort: { order: DESC, fields: [frontmatter___date] }
			filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
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
