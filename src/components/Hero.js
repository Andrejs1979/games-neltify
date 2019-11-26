import React from 'react';
import PreviewCompatibleImage from './PreviewCompatibleImage';
// import Img from 'gatsby-image';
import { Link } from 'gatsby';
const Hero = ({ size, title, subtitle, image, signup, cta, link }) => (
	<section className={`hero is-${size}`}>
		<div className="hero-body">
			<div className="container">
				<div className="columns is-vcentered">
					<div className="column is-two-thirds">
						<div className="content has-text-left">
							<h1 className="title is-size-1 is-spaced has-text-weight-bold">{title}</h1>
							<h2 className="subtitle">{subtitle}</h2>
							<br />
							{signup && (
								<div className="is-hidden-mobile">
									<div className="field is-grouped">
										<p className="control">
											<a href="https://app.mark.camera/" className="button is-primary is-large">
												<strong>Sign up & get $10</strong>
											</a>
										</p>
										<p className="control">
											<a
												href="https://calendly.com/mark-camera/demo"
												className="button is-text is-large"
											>
												Schedule a demo
											</a>
										</p>
									</div>
									<p>Get $10 instant bonus. No credit card required</p>
								</div>
							)}
							{cta && (
								<Link className="button is-primary is-medium" to={link}>
									<strong>{cta} →</strong>
								</Link>
							)}
						</div>
					</div>
					{/* <div className="column is-1">
							<br/>
						</div> */}
					{image && (
						<div className="column">
							<figure className="image is-400x400">
								<PreviewCompatibleImage imageInfo={image} />
							</figure>
						</div>
					)}
				</div>
			</div>
		</div>
	</section>
);

export default Hero;
