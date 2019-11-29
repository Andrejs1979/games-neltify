import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

import Hero from '../components/Hero';
import CTA from '../components/CTA';
import BlogSection from '../components/BlogSection';

export const TermsPageTemplate = ({ title, content, contentComponent }) => {
	const PageContent = contentComponent || Content;

	return (
		<div>
			<Hero
				size="medium"
				title={title}
				// subtitle="All plans include next day funding and 24/7 payments support as a standard. Cancel free any time."
				image="image"
			/>
			<section className="section section--gradient">
				<div className="container">
					<div className="columns">
						<div className="column is-10 is-offset-1">
							<div className="section">
								<h2 className="title is-size-3 has-text-weight-bold is-bold-light">{title}</h2>
								<PageContent className="content" content={content} />
							</div>
						</div>
					</div>
				</div>
			</section>
			<BlogSection />
			<CTA />
		</div>
	);
};

TermsPageTemplate.propTypes = {
	title: PropTypes.string.isRequired,
	content: PropTypes.string,
	contentComponent: PropTypes.func
};

const TermsPage = ({ data }) => {
	const { markdownRemark: post } = data;

	return (
		<Layout>
			<TermsPageTemplate contentComponent={HTMLContent} title={post.frontmatter.title} content={post.html} />
		</Layout>
	);
};

TermsPage.propTypes = {
	data: PropTypes.object.isRequired
};

export default TermsPage;

export const aboutPageQuery = graphql`
	query TermsPage($id: String!) {
		markdownRemark(id: { eq: $id }) {
			html
			frontmatter {
				title
			}
		}
	}
`;
