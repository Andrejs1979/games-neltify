import React from 'react';
import PropTypes from 'prop-types';

import { Box, Column, Columns, Section } from './bulma';

const Pricing = ({ data }) => (
	<Section color="dark">
		<Columns>
			{data.map((price) => (
				<Column key={price.plan}>
					<Box>
						<Section>
							<h3 className="title has-text-centered has-text-weight-semibold">{price.plan}</h3>
							<h4 className="is-size-1 has-text-weight-bold has-text-primary has-text-centered">
								${price.price}
							</h4>
							{/* <p className="has-text-weight-semibold">{price.description}</p> */}
							<hr />
							<ul className="title has-text-centered">
								{price.items.map((item) => (
									<li key={item} className="is-size-4">
										{item}
									</li>
								))}
							</ul>
						</Section>
					</Box>
				</Column>
			))}
		</Columns>
	</Section>
);

Pricing.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			plan: PropTypes.string,
			price: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
			description: PropTypes.string,
			items: PropTypes.array
		})
	)
};

export default Pricing;
