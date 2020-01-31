import React from 'react';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'react-cloudinary-lazy-image';

import PreviewCompatibleImage from './PreviewCompatibleImage';
import { Columns, Button, ButtonGroup, Tiles, Tile, Parent, Level, Left, Right } from './bulma';

export default function InventoryRoll() {
	const data = useStaticQuery(INVENTORY_ROLL_QUERY);
	const { edges: items } = data.allMongodbCaragentsInventory;

	return (
		<Columns multiline>
			{items &&
				items.map(({ node: item }) => (
					<div className="is-parent column is-4" key={item.id}>
						<Tile box>
							<header>
								<Link className="title is-size-4" to={item.id}>
									{item.make} {item.model}
								</Link>
								<br />
								<span className="subtitle is-size-5 is-block">
									{item.year} &bull; {item.mileage} miles
								</span>

								{item.pictures ? (
									<div className="featured-thumbnail">
										<Img
											cloudName={'fastlabs'}
											imageName={`caragents/${item.pictures[0].uri}`}
											fluid={{
												maxWidth: 300,
												height: 300
											}}
										/>
									</div>
								) : null}
							</header>
							<p>
								<br />
								<Level>
									<Left>
										<Link to={`${item.make}-${item.model}-${item.year}-${item.vin}`}>
											<Button icon="search" color="danger" rounded>
												Learn more
											</Button>
										</Link>
									</Left>
									<Right>
										<Link to={`${item.make}-${item.model}-${item.year}-${item.vin}`}>
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
		allMongodbCaragentsInventory(sort: { fields: createdAt, order: DESC }) {
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
						featured
					}
					interior
					mpg_highway
					mpg_city
					transmission
					trim
					vin
					doors
					drive
					engine
					exterior
					fuel
					featured
					createdAt
				}
			}
		}
	}
`;
