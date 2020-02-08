import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

export default function Map({ box }) {
	const data = useStaticQuery(staticMapQuery);
	const { childFile: image } = data.staticMap;

	return <Img fixed={image.childImageSharp.fixed} alt="Google Maps" />;
}

const staticMapQuery = graphql`
	query StaticMapQuery {
		staticMap {
			childFile {
				childImageSharp {
					fixed {
						...GatsbyImageSharpFixed
					}
				}
			}
		}
	}
`;
