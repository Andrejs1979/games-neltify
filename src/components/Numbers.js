import React from 'react';
// import PreviewCompatibleImage from './PreviewCompatibleImage';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Box, Column, Columns, Notification, Section } from './bulma';

export default function Numbers({ box, background, color, items }) {
	return (
		<Section color={background}>
			<Columns>
				{items &&
					items.map((item) => (
						<div key={item.number} className="column">
							<Column>
								<Box>
									{/* <div className="has-text-centered">
										<FontAwesomeIcon icon="store" size="10x" className="has-text-light" />
									</div> */}
									<Notification color={color}>
										<h3 className="title is-size-1">{item.number}</h3>
										<h4 className="sunbtitle is-size-3">{item.label}</h4>
									</Notification>
								</Box>
							</Column>
						</div>
					))}
			</Columns>
		</Section>
	);
}
