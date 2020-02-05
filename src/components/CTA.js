import React from 'react';
import { Link } from 'gatsby';

import { Button, ButtonGroup } from './bulma';

const CTA = ({ title, subtitle, cta }) => (
	<section className="hero is-medium is-light is-bold">
		<div className="hero-body">
			<div className="container has-text-centered">
				<p className="title">{title}</p>
				<p className="subtitle">{subtitle}</p>
				{cta && (
					<ButtonGroup centered>
						<Link to={cta.link}>
							<Button size="large" icon={cta.icon} color="primary" rounded>
								<strong>{cta.label}</strong>
							</Button>
						</Link>
					</ButtonGroup>
				)}
			</div>
		</div>
	</section>
);

export default CTA;
