import React from 'react';
import { Box } from './bulma';

export default function Modal({ children, icon, title, subtitle, onClose }) {
	return (
		<div className="columns is-centered">
			<div className="column is-narrow">
				<Box>
					<span className="delete is-large is-pulled-right" aria-label="close" onClick={onClose} />
					{/* <Icon name="credit-card" size="lg" container="large" color="dark" /> */}
					<h1 className="title is-4">{title}</h1>
					{subtitle && <h2 className="subtitle">{subtitle}</h2>}
					<div className="tile is-ancestor">
						<div className="tile is-parent">
							<div className="tile is-child box">{children} </div>
						</div>
					</div>
				</Box>
			</div>
		</div>
	);
}
