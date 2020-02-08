import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';

import { Columns, Column, Box, Section } from './bulma';

export default function Masonry({ size, color, type, data, rows }) {
	return (
		<Section>
			<Columns multiline>
				{data.map(({ node }) => (
					<Column size="4" key={node.id}>
						{type === 'testimonials' && (
							<div className="card">
								<div className="card-content">
									<p className="title">{node.frontmatter.heading}</p>
									<p>{node.frontmatter.text}</p>
									<hr />
									<div className="media">
										<div className="media-left">
											<figure className="image is-48x48">
												{node.frontmatter.image ? (
													<PreviewCompatibleImage
														className="is-rounded"
														imageInfo={{
															image: node.frontmatter.image,
															alt: `featured image thumbnail for post ${node.frontmatter
																.name}`
														}}
													/>
												) : null}
											</figure>
										</div>
										<div className="media-content">
											<div className="content">
												<p className="title is-5">{node.frontmatter.name}</p>
												<p className="subtitle is-5">{node.frontmatter.city}</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						)}
						{type === 'blog' && (
							<Box>
								<p />
							</Box>
						)}
					</Column>
				))}
			</Columns>
		</Section>
	);
}
