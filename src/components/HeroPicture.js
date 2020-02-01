import React from 'react';
import PreviewCompatibleImage from './PreviewCompatibleImage';
// import Img from 'gatsby-image';
import { Link } from 'gatsby';
import { Button } from './bulma';

const Hero = ({ size, title, subtitle, image, signup, cta, calendar }) => (
	<section className={`hero is-${size}`}>
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
									<Button icon="car-alt" size="large" color="danger" rounded>
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
					{cta && (
						<div className="is-hidden-mobile">
							<div className="field is-grouped">
								<p className="control">
									<Link to={cta.link}>
										<Button icon={cta.icon} size="large" color="danger" rounded>
											<strong>{cta.label}</strong>
										</Button>
									</Link>
								</p>
								{calendar && (
									<p className="control">
										<Button icon={calendar.icon} size="large" color="white" rounded>
											{calendar.label}
										</Button>
									</p>
								)}
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	</section>
);

export default Hero;
