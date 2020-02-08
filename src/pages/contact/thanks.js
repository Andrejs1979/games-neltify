import React from 'react';
import Layout from '../../components/Layout';
import { Hero } from '../../components/bulma';
import Suggestions from '../../components/Suggestions';

export default () => (
	<Layout>
		<Hero
			size="medium"
			color="light"
			bold
			title="Thank you!"
			subtitle="We'll be in touch as soon as we can. In the meantime, please take a look at our curated car inventory."
			image="image"
		/>
		<Suggestions />
	</Layout>
);
