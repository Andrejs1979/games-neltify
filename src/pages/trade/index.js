import React from 'react';
import { navigate } from 'gatsby-link';

import Layout from '../../components/Layout';
import { Hero, Columns, Column } from '../../components/bulma';

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
					color="black"
					bold
					title="sdfsdf"
					subtitle="All plans include next day funding and 24/7 payments support as a standard. Cancel free any time."
					image="image"
				/>
				<section className="section">
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
										Don’t fill this out: <input name="bot-field" onChange={this.handleChange} />
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
									<label className="label" htmlFor={'message'}>
										Message
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
									<button className="button is-primary is-rounded is-large" type="submit">
										Send now
									</button>
								</div>
							</form>
						</div>
					</div>
				</section>
			</Layout>
		);
	}
}
