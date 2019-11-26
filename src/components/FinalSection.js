import React from 'react';
// import PreviewCompatibleImage from './PreviewCompatibleImage';

export default function FinalSection({ content: { image, title, text } }) {
	return (
		<section className="hero is-medium is-bold">
			<div className="hero-body">
				<div className="container">
					<h1 className="title">{title}</h1>
					<h2 className="subtitle">{text}</h2>
				</div>
			</div>
		</section>
	);
}
