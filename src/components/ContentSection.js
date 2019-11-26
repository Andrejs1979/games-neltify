import React from 'react';
import PreviewCompatibleImage from './PreviewCompatibleImage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Box, Column, Columns, Section } from '../components/bulma';

export default function ContentSection({ sections, box }) {
	return (
		<Section>
			{sections.map(({ side, color, image, icon, type, title, text }) => (
				<Columns vertical key={title}>
					<Column> </Column>
					<Column>
						{icon ? (
							<span className="fa-layers fa-fw fa-10x">
								<FontAwesomeIcon icon="square" color="#EEE" />
								<FontAwesomeIcon icon={icon} color="#444" transform="shrink-6" />
							</span>
						) : (
							<PreviewCompatibleImage imageInfo={image} />
						)}
					</Column>
					<Column>
						<Box>
							<br />
							<p className="title">{title}</p>
							<p>{text}</p>
							<br />
						</Box>
					</Column>
					<Column> </Column>
				</Columns>
			))}
		</Section>
	);
}
