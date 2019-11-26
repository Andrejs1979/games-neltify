import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/Layout';

import Hero from '../components/Hero';
import CTA from '../components/CTA';
import BlogSection from '../components/BlogSection';

import { Box } from '../components/bulma';
import { Container } from '../components/bulma';

export default function FAQPage() {
	const data = useStaticQuery(FAQ_PAGE_QUERY);

	const { markdownRemark: page } = data;
	const { image, heading, subheading, faq } = page.frontmatter;

	return (
		<Layout>
			<Hero size="medium" title={heading} subtitle={subheading} image={image} />
			<Container>
				{faq.map(({ question, answer }) => (
					<Box key={question}>
						<p className="title">{question}</p>
						<p>{answer}</p>
					</Box>
				))}
			</Container>
			<br />
			<br />
			<br />
			<br />

			<BlogSection />
			<CTA />
		</Layout>
	);
}

const FAQ_PAGE_QUERY = graphql`
	query FaqPageTemplate {
		markdownRemark(frontmatter: { templateKey: { eq: "faq-page" } }) {
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
