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
															alt: `featured image thumbnail for post ${node.frontmatter
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
