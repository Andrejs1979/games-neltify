import React from 'react';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'react-cloudinary-lazy-image';

import PreviewCompatibleImage from './PreviewCompatibleImage';
import { Columns, Button, Tile, Level, Left, Right } from './bulma';

export default function InventoryRoll() {
	const data = useStaticQuery(INVENTORY_ROLL_QUERY);
	const { edges: items } = data.allMongodbCaragentsCars;

	return (
		<Columns multiline>
			{items &&
				items.map(({ node: item }) => (
					<div className="is-parent column is-4" key={item.id}>
						<Tile box>
							<header>
								<Link
									className="title is-size-4"
									to={`/${item.make}-${item.model}-${item.year}-${item.vin}`}
								>
									{item.make} {item.model}
								</Link>
								<br />
								<span className="subtitle is-size-5 is-block">
									{item.year} &bull; {item.mileage} miles
								</span>

								{item.pictures ? (
									<Img
										cloudName={'fastlabs'}
										imageName={`caragents/${item.pictures[0].uri}`}
										fluid={{
											maxWidth: 300,
											height: 300
										}}
									/>
								) : null}
							</header>
							<p>
								<br />
								<Level>
									<Left>
										<Link to={`/${item.make}-${item.model}-${item.year}-${item.vin}`}>
											<Button icon="search" color="primary" rounded>
												Learn more
											</Button>
										</Link>
									</Left>
									<Right>
										<Link to={`/${item.make}-${item.model}-${item.year}-${item.vin}`}>
											<Button icon="calendar-alt" color="black" rounded>
												Test-drive
											</Button>
										</Link>
									</Right>
								</Level>
							</p>
						</Tile>
					</div>
				))}
		</Columns>
	);
}

const INVENTORY_ROLL_QUERY = graphql`
	query Inventory {
		allMongodbCaragentsCars(sort: { fields: createdAt, order: DESC }) {
			edges {
				node {
					id
					body
					make
					mileage
					model
					mongodb_id
					price
					year
					pictures {
						uri
					}
					interior
					mpgHighway
					mpgCity
					transmission
					trim
					vin
					doors
					drive
					engine
					exterior
					fuel
					createdAt
				}
			}
		}
	}
`;
