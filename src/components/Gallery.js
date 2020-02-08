import React from 'react';
import Img from 'gatsby-image';

import PreviewCompatibleImage from './PreviewCompatibleImage';
import { Columns, Button, Tile, Level, Left, Right, Section } from './bulma';

export default function Gallery({ items }) {
	return (
		<Section>
			<Columns multiline>
				{items &&
					items.map(({ image }) => (
						<div className="is-parent column is-4">
							<Tile box>
								<Img fluid={image} />
							</Tile>
						</div>
					))}
			</Columns>
		</Section>
	);
}
