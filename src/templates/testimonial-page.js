import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/Layout';

import CTA from '../components/CTA';
import BlogSection from '../components/BlogSection';

import { Box, Hero, Container, Section, Columns, Column } from '../components/bulma';

export default function TestimonialsPage() {
	const data = useStaticQuery(TESTIMONIALS_PAGE_QUERY);

	const { markdownRemark: page } = data;
	const { image, heading, subheading, faq } = page.frontmatter;

	return (
		<Layout>
			<Hero color="black" size="medium" title={heading} subtitle={subheading} image={image} />
			<Columns multiline>
				{faq.map(({ question, answer }) => (
					<Column size="size-5" key={question}>
						<Box>
							<p className="title">{question}</p>
							<p className="subtitle">{answer}</p>
						</Box>
					</Column>
				))}
				<Section />
			</Columns>

			<BlogSection />
			<CTA />
		</Layout>
	);
}

const TESTIMONIALS_PAGE_QUERY = graphql`
	query TestimonialsPageTemplate {
		markdownRemark(frontmatter: { templateKey: { eq: "testimonial-page" } }) {
			frontmatter {
				title
				heading
				description
				heading
				image {
					id
					absolutePath
				}
				faq {
					question
					answer
				}
			}
		}
	}
`;
