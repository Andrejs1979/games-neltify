import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'react-cloudinary-lazy-image';

// import PreviewCompatibleImage from './PreviewCompatibleImage';
import { Box, Column, Columns, Section, Button, Tile, Level, Left, Right } from './bulma';

export default function Suggestions({ box }) {
	const data = useStaticQuery(SUGGESTIONS_QUERY);
	const { edges: items } = data.allMongodbCaragentsCars;

	return (
		<Section>
			<h1 className="title is-size-2 has-text-centered">You may also like</h1>
			<Columns>
				{items.map(({ node: item }) => (
					<div key={item.id} className="column">
						<Column>
							<Box>
								<Link
									className="title is-size-5"
									to={`/${item.make}-${item.model}-${item.year}-${item.vin}`}
								>
									{item.make} {item.model}
								</Link>
								<br />
								<span className="subtitle is-size-6 is-block">
									{item.year} &bull; {item.mileage} miles
								</span>
								<div className="has-text-centered">
									{item.pictures ? (
										<Img
											cloudName={'fastlabs'}
											imageName={`caragents/${item.pictures[0].uri}`}
											fluid={{
												maxWidth: 256,
												height: 256
											}}
										/>
									) : null}
								</div>
								<br />
								<Level>
									<Left>
										<Link to={`/${item.make}-${item.model}-${item.year}-${item.vin}`}>
											<Button size="small" icon="search" color="primary" rounded>
												Learn more
											</Button>
										</Link>
									</Left>
									{/* <Right>
										<Link to={`/${item.make}-${item.model}-${item.year}-${item.vin}`}>
											<Button icon="calendar-alt" color="black" rounded>
												Test-drive
											</Button>
										</Link>
									</Right> */}
								</Level>
							</Box>
						</Column>
					</div>
				))}
			</Columns>
		</Section>
	);
}

const SUGGESTIONS_QUERY = graphql`
	query SuggestionsQuery {
		allMongodbCaragentsCars(limit: 3, sort: { fields: createdAt, order: DESC }) {
			edges {
				node {
					id
					body
					pictures {
						uri
					}
					price
					year
					vin
					make
					mileage
					model
				}
			}
		}
	}
`;
