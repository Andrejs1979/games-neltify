import React from 'react';
import { Fade } from 'react-slideshow-image';

import invoices from '../img/screens/invoices.png';
import customers from '../img/screens/customers.png';
import subscriptions from '../img/screens/subscriptions.png';
import payments from '../img/screens/payments.png';

const fadeImages = [ payments, invoices, customers, subscriptions ];

const fadeProperties = {
	duration: 10000,
	transitionDuration: 1000,
	infinite: true,
	arrows: false,
	indicators: false,
	onChange: (oldIndex, newIndex) => {
		console.log(`fade transition from ${oldIndex} to ${newIndex}`);
	}
};

const Slideshow = () => (
	<div className="section has-backround-white">
		<div className="container has-text-centered">
			<br />
			<Fade {...fadeProperties}>
				<div className="each-fade">
					<h2 className="title is-size-3">
						Process payments online, in-store and on mobile at the same super-low rates.
					</h2>
					<br />
					<div className="image-container">
						<img src={fadeImages[0]} alt="Process payments online, in-store and on mobile" />
					</div>
				</div>
				<div className="each-fade">
					<h2 className="title is-size-3">Send smart invoices, get paid faster!</h2>
					<br />
					<div className="image-container">
						<img src={fadeImages[1]} alt="Send smart invoices, get paid faster!" />
					</div>
				</div>
				<div className="each-fade">
					<h2 className="title is-size-3">Know where you stand with each of your customers, in real-time.</h2>

					<br />
					<div className="image-container">
						<img src={fadeImages[2]} alt="Know where you stand with each of your customers" />
					</div>
				</div>
				<div className="each-fade">
					<h2 className="title is-size-3">Improve your cashflow with automatic recurring payments.</h2>
					<br />{' '}
					<div className="image-container">
						<img src={fadeImages[3]} alt="Improve your cashflow with automatic recurring payments" />
					</div>
				</div>
			</Fade>
		</div>
	</div>
);

export default Slideshow;
