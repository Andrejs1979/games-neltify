import React from 'react';
import PreviewCompatibleImage from './PreviewCompatibleImage';
// import Img from 'gatsby-image';
import { Link } from 'gatsby';

// import { useModal } from 'react-modal-hook';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { InlineWidget } from 'react-calendly';

// import Modal from './Modal';
import { Button } from './bulma';

export default function Hero({ size, title, subtitle, image, signup, cta, calendar }) {
	return (
		<section className={`hero is-large`}>
			<div
				className="hero-body full-width-image margin-top-0"
				style={{
					backgroundImage: `url(${!!image.childImageSharp ? image.childImageSharp.fluid.src : image})`,
					backgroundPosition: `top left`,
					backgroundAttachment: `fixed`
				}}
			>
				<div className="container">
					<div className="content has-text-left">
						<h1
							className="title is-size-1 has-text-weight-bold"
							style={{
								color: 'white'
							}}
						>
							{title}
						</h1>
						<h2
							className="subtitle"
							style={{
								color: '#999'
							}}
						>
							{subtitle}
						</h2>
						<br />
						{signup && (
							<div className="is-hidden-mobile">
								<div className="field is-grouped">
									<p className="control">
										<Button icon="car-alt" size="large" color="black" rounded>
											Shop cars
										</Button>
									</p>
									<p className="control">
										<Button icon="phone-alt" size="large" color="white" rounded>
											Free consultation
										</Button>
									</p>
								</div>
							</div>
						)}
						<div className="is-hidden-mobile">
							<div className="field is-grouped">
								{cta && (
									<p className="control">
										<Link to={cta.link}>
											<Button icon={cta.icon} size="large" color="primary" rounded>
												<strong>{cta.label}</strong>
											</Button>
										</Link>
									</p>
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
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
