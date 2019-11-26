import React from 'react';
// import PreviewCompatibleImage from './PreviewCompatibleImage';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Box } from '../components/bulma';
import { Column, Columns, Section } from '../components/bulma';

export default function Blurbs({ box, gridItems }) {
	return (
		<Section>
			<Columns>
				{gridItems.map((item) => (
					<div key={item.title} className="column">
						<Column>
							<Box>
								{/* <FontAwesomeIcon icon="shop" size="10x" className="has-text-light" /> */}
								{/* <div className="has-text-centered">
									<div
										style={{
											width: '240px',
											display: 'inline-block'
										}}
									>
										<PreviewCompatibleImage imageInfo={item} />
									</div>
								</div> */}
								<br />
								<p className="title is-size-3">{item.title}</p>
								<p className="is-size-6">{item.text}</p>
							</Box>
						</Column>
					</div>
				))}
			</Columns>
		</Section>
	);
}
