import React from 'react';
import PropTypes from 'prop-types';
import { IndexPageTemplate } from '../../templates/index-page';

const IndexPagePreview = ({ entry, getAsset }) => {
	const data = entry.getIn([ 'data' ]).toJS();

	if (data) {
		const { image, heading, subheading, blurbs, sections, final } = data;
		return (
			// <IndexPageTemplate
			// 	title={data.title}
			// 	image={data.image}
			// 	heading={data.heading}
			// 	subheading={data.subheading}
			// 	description={data.description}
			// 	blurbs={data.blurbs}
			// 	sections={data.sections}
			// 	final={data.final}
			// />

			<IndexPageTemplate
				image={image}
				heading={heading}
				subheading={subheading}
				blurbs={blurbs}
				sections={sections}
				final={final}
			/>
		);
	} else {
		return <div>Loading...</div>;
	}
};

IndexPagePreview.propTypes = {
	entry: PropTypes.shape({
		getIn: PropTypes.func
	}),
	getAsset: PropTypes.func
};

export default IndexPagePreview;
