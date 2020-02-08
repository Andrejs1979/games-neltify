import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

import { Hero } from '../components/bulma';
import CTA from '../components/CTA';
import TestimonialSection from '../components/TestimonialSection';

export const MissionPageTemplate = ({ title, content, contentComponent }) => {
	const PageContent = contentComponent || Content;

	return (
		<div>
			<Hero
				size="medium"
				color="light"
				bold
				title={title}
				subtitle="All plans include next day funding and 24/7 payments support as a standard. Cancel free any time."
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
				subtitle="CARAGENTS Concierge will take care of all the details"
				cta={{ icon: 'car-alt', label: 'Shop cars', link: '/inventory' }}
			/>
		</div>
	);
};

MissionPageTemplate.propTypes = {
	title: PropTypes.string.isRequired,
	content: PropTypes.string,
	contentComponent: PropTypes.func
};

const MissionPage = ({ data }) => {
	const { markdownRemark: post } = data;

	return (
		<Layout>
			<MissionPageTemplate contentComponent={HTMLContent} title={post.frontmatter.title} content={post.html} />
		</Layout>
	);
};

MissionPage.propTypes = {
	data: PropTypes.object.isRequired
};

export default MissionPage;

export const missionPageQuery = graphql`
	query MissionPage($id: String!) {
		markdownRemark(id: { eq: $id }) {
			html
			frontmatter {
				title
			}
		}
	}
`;
