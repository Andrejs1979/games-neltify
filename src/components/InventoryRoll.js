import React from 'react';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'react-cloudinary-lazy-image';

import PreviewCompatibleImage from './PreviewCompatibleImage';
import { Columns, Tiles } from './bulma';

export default function InventoryRoll() {
	const data = useStaticQuery(INVENTORY_ROLL_QUERY);
	const { edges: items } = data.allMongodbCaragentsInventory;

	return (
		<Tiles>
			<div class="tile">
				<div class="tile is-parent is-vertical">
					{items.map(({ node: item }) => (
						<article class="tile is-child box">
							<p class="title">
								{item.make} {item.model}
							</p>
							<p class="subtitle">{item.year}</p>
							<Img
								cloudName={'fastlabs'}
								imageName={`caragents/${item.pictures[0].uri}`}
								fluid={{
									maxWidth: 300,
									height: 300
								}}
								style={{
									width: '40vw',
									height: '20vh'
								}}
							/>
						</article>
					))}
				</div>
			</div>
		</Tiles>
	);

	return (
		<Columns multiline>
			{items &&
				items.map(({ node: item }) => (
					<div className="is-parent column is-6" key={item.id}>
						<article
							className={`blog-list-item tile is-child box notification ${item.featured
								? 'is-featured'
								: ''}`}
						>
							<header>
								{item.pictures ? (
									<div className="featured-thumbnail">
										<Img
											cloudName={'fastlabs'}
											imageName={`caragents/${item.pictures[0].uri}`}
											fluid={{
												maxWidth: 300,
												height: 300
											}}
											style={{
												width: '40vw',
												height: '20vh'
											}}
										/>
									</div>
								) : null}
								<p className="post-meta">
									<Link className="title has-text-primary is-size-4" to={item.id}>
										{item.model}
									</Link>
									<span> &bull; </span>
									<span className="subtitle is-size-5 is-block">{item.createdAt}</span>
								</p>
							</header>
							<p>
								{item.model}
								<br />
								<br />
								<Link className="button" to={`${item.make}-${item.model}-${item.year}-${item.vin}`}>
									Learn more →
								</Link>
							</p>
						</article>
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
