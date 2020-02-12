import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import TestimonialSection from '../components/TestimonialSection';
import { Hero } from '../components/bulma';
import CTA from '../components/CTA';
// import BlogSection from '../components/BlogSection';

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
	const PageContent = contentComponent || Content;

	return (
		<div>
			<Hero
				size="medium"
				color="light"
				bold
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
			<TestimonialSection />
			<CTA
				color="dark"
				title="Shop your next car stress-free"
				subtitle="CARAGENTS will take care of all the details"
				cta={{ icon: 'car-alt', label: 'Shop cars', link: '/inventory' }}
			/>
		</div>
	);
};

AboutPageTemplate.propTypes = {
	title: PropTypes.string.isRequired,
	content: PropTypes.string,
	contentComponent: PropTypes.func
};

const AboutPage = ({ data }) => {
	const { markdownRemark: post } = data;

	return (
		<Layout>
			<AboutPageTemplate contentComponent={HTMLContent} title={post.frontmatter.title} content={post.html} />
		</Layout>
	);
};

AboutPage.propTypes = {
	data: PropTypes.object.isRequired
};

export default AboutPage;

export const aboutPageQuery = graphql`
	query AboutPage($id: String!) {
		markdownRemark(id: { eq: $id }) {
			html
			frontmatter {
				title
			}
		}
	}
`;
