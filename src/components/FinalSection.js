import React from 'react';
import PreviewCompatibleImage from './PreviewCompatibleImage';

import { Box, Column, Columns, Section } from '../components/bulma';

export default function FinalSection({ content }) {
	console.log(content);

	return (
		<Section>
			<Columns centered>
				<Column narrow>
					<Box>
						{/* <FontAwesomeIcon icon="store" size="10x" className="has-text-light" /> */}
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

						<h1 className="title">{content.title}</h1>
						<h2 className="subtitle">{content.text}</h2>
						{content.Image && <PreviewCompatibleImage imageInfo={content.Image.image} />}
					</Box>
				</Column>
			</Columns>
		</Section>
	);
}
