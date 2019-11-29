import React from 'react';
import PreviewCompatibleImage from './PreviewCompatibleImage';

export default function FinalSection({ content }) {
	return (
		<section className="hero is-medium is-bold">
			<div className="hero-body">
				<div className="container">
					<h1 className="title">{content.title}</h1>
					<h2 className="subtitle">{content.text}</h2>
					{content.image && <PreviewCompatibleImage imageInfo={content.image} />}
				</div>
			</div>
		</section>
	);
}
