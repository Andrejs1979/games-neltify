import React from 'react';
import { navigate } from 'gatsby-link';

import Layout from '../../components/Layout';
import { Box, Button, Hero, Icon, Content, Columns, Column, Section } from '../../components/bulma';

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
					title="Trade or sell you car"
					subtitle="We will help you to achive the best outcome possible"
					image="image"
				/>
				<Section>
					<Columns>
						<Column size="half">
							<Box>
								<Section>
									<p className="title">Tell us about your car</p>
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
														About your car
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
													<Button primary rounded size="medium" icon="car-alt">
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
								<p className="title">How it works?</p>
								<p className="subtitle">Trade or sell your car in 5 easy steps</p>

								<Content>
									<ol>
										<li>Fill-out the contact form</li>
										<li>
											We'll get in touch to book an appoitment with one of our friendly car
											specialists
										</li>
										<li>
											If you are trading-in, shop the cars on our website or in the app to choose
											your next car
										</li>
										<li>Review our offer. Ask us about your financing options</li>
										<li>
											Finalize the deal in the comfort of your home. No trips to dealership, no
											stress!
										</li>
									</ol>
								</Content>
								<hr />
								<p className="title is-size-4">Questions?</p>
								<p className="subtitle">
									Just give us a call or book a free, no-obligation consultation with our car
									specialist.
								</p>
							</Section>
						</Column>
					</Columns>
				</Section>
			</Layout>
		);
	}
}
