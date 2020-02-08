import React from 'react';
import { Link } from 'gatsby';

import { Button, ButtonGroup } from './bulma';

const CTA = ({ title, subtitle, cta, calendar }) => (
	<section className="hero is-medium is-light is-bold">
		<div className="hero-body">
			<div className="container has-text-centered">
				<p className="title">{title}</p>
				<p className="subtitle">{subtitle}</p>
				<ButtonGroup centered>
					{cta && (
						<Link to={cta.link}>
							<Button size="large" icon={cta.icon} color="primary" rounded>
								<strong>{cta.label}</strong>
							</Button>
						</Link>
					)}
					{calendar && (
						<p className="control">
							<a href={calendar.link} target="_blanc">
								<Button icon={calendar.icon} size="large" color="primary" rounded>
									{calendar.label}
								</Button>
							</a>
						</p>
					)}
				</ButtonGroup>
			</div>
		</div>
	</section>
);

export default CTA;
