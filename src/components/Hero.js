import React from 'react';
import PreviewCompatibleImage from './PreviewCompatibleImage';
// import Img from 'gatsby-image';
import { Link } from 'gatsby';
const Hero = ({ size, title, subtitle, image, signup, cta, link }) => (
	<section className={`hero is-${size}`}>
		<div className="hero-body">
			<div className="container">
				<div className="content has-text-left">
					<h1 className="title is-size-1 has-text-weight-bold">{title}</h1>
					<h2 className="subtitle">{subtitle}</h2>
					<br />
					{signup && (
						<div className="is-hidden-mobile">
							<div className="field is-grouped">
								<p className="control">
									<a href="#" className="button is-rounded is-large">
										<strong>GET STARTED</strong>
									</a>
								</p>
								<p className="control">
									<a href="#" className="button is-text is-rounded is-large">
										Schedule a free consultation
									</a>
								</p>
							</div>
						</div>
					)}
					{cta && (
						<Link className="button is-primary is-medium" to={link}>
							<strong>{cta} →</strong>
						</Link>
					)}
				</div>
			</div>
		</div>
	</section>
);

export default Hero;
