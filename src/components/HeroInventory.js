import React from 'react';
import PreviewCompatibleImage from './PreviewCompatibleImage';
// import Img from 'gatsby-image';
import Img from 'react-cloudinary-lazy-image';
import { Link } from 'gatsby';
import { Button } from './bulma';

const Hero = ({ size, title, subtitle, pictures, cta, calendar }) => (
	<section className={`hero is-${size}`}>
		<div
			className="hero-body full-width-image margin-top-0"
			style={{
				backgroundImage: `caragents/${pictures[0].uri}`,
				backgroundPosition: `top left`,
				backgroundAttachment: `fixed`
			}}
		>
			<div className="container">
				<Img
					cloudName={'fastlabs'}
					imageName={`caragents/${pictures[0].uri}`}
					fluid={{
						maxWidth: 300,
						height: 300
					}}
					style={{
						width: '40vw',
						height: '20vh'
					}}
				/>
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
										<Button icon={calendar.icon} size="large" color="text" rounded>
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
