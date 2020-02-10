import React from 'react';
import { navigate } from 'gatsby-link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Layout from '../../components/Layout';
import Map from '../../components/Map';
import { Box, Button, Hero, Columns, Column, Section } from '../../components/bulma';

function encode(data) {
	return Object.keys(data).map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&');
}

export default class Index extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isValidated: false };
	}

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const form = e.target;
		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: encode({
				'form-name': form.getAttribute('name'),
				...this.state
			})
		})
			.then(() => navigate(form.getAttribute('action')))
			.catch((error) => alert(error));
	};

	render() {
		return (
			<Layout>
				<Hero
					size="medium"
					color="light"
					bold
					title="Talks to us about your car needs"
					subtitle="Send us a message or give us a call today!"
					image="image"
				/>
				<Section>
					<Columns>
						<Column size="half">
							<Box>
								<Section>
									<p className="title">Please tell us how we can help</p>
									<p className="subtitle">We promise not to spam you or sell your data</p>
									<div className="container">
										<div className="content">
											<form
												name="contact"
												method="post"
												action="/contact/thanks/"
												data-netlify="true"
												data-netlify-honeypot="bot-field"
												onSubmit={this.handleSubmit}
											>
												{/* The `form-name` hidden field is required to support form submissions without JavaScript */}
												<input type="hidden" name="form-name" value="contact" />
												<div hidden>
													<label>
														Don’t fill this out:{' '}
														<input name="bot-field" onChange={this.handleChange} />
													</label>
												</div>
												<div className="field">
													<label className="label" htmlFor={'name'}>
														Your name
													</label>
													<div className="control">
														<input
															className="input"
															type={'text'}
															name={'name'}
															onChange={this.handleChange}
															id={'name'}
															required={true}
														/>
													</div>
												</div>
												<div className="field">
													<label className="label" htmlFor={'email'}>
														Email
													</label>
													<div className="control">
														<input
															className="input"
															type={'email'}
															name={'email'}
															onChange={this.handleChange}
															id={'email'}
															required={true}
														/>
													</div>
												</div>
												<div className="field">
													<label className="label" htmlFor={'phone'}>
														Phone
													</label>
													<div className="control">
														<input
															className="input"
															type={'phone'}
															name={'phone'}
															onChange={this.handleChange}
															id={'phone'}
															required={true}
														/>
													</div>
												</div>
												<div className="field">
													<label className="label" htmlFor={'message'}>
														How can we help you?
													</label>
													<div className="control">
														<textarea
															className="textarea"
															name={'message'}
															onChange={this.handleChange}
															id={'message'}
															required={true}
														/>
													</div>
												</div>
												<div className="field">
													<Button primary rounded size="medium" icon="envelope">
														Send now
													</Button>
												</div>
											</form>
										</div>
									</div>
								</Section>
							</Box>
						</Column>
						<Column>
							<Section color="light">
								<p className="title">CARAGENTS</p>
								<p className="subtitle">Your trusty auto concierge</p>
								<a href="https://maps.google.com/?q=37.964601,-122.520081">
									<Button icon="map-marked-alt" color="text" rounded>
										34 De Luca Pl, Suite C1, San Rafael, CA 94901
									</Button>
								</a>
								<a href="tel:858-876-2647" className="has-text-weight-semibold">
									<Button icon="phone-alt" color="text" iconColor="#000" rounded>
										858-876-2647
									</Button>
								</a>
								<br />
								<a href="https://maps.google.com/?q=37.964601,-122.520081">
									<Map />
								</a>
							</Section>
						</Column>
					</Columns>
				</Section>
			</Layout>
		);
	}
}
