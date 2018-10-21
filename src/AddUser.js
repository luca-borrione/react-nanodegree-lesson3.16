import React from 'react';
import PropTypes from 'prop-types'

class AddUser extends React.Component {

	state = {
		user: {
			firstname: '',
			lastname: '',
			username: ''
		},
		userExists: false
	};

	userExists(username) {
		return this.props.users
					.map( user => user.username )		// fetching all the current usernames
					.includes(username);
	}

	onFieldChange = event => {
		const {name, value} = event.target;

		this.setState(state => {
			return {
				...state,
				user: {
					...state.user,
					[name]: value
				}
			};
		});
	};

	/**
	 * Creates a new user entry based on the input field values
	 * adding any extra needed property with their default value
	 * @returns {User}
	 */
	createUser() {
		return {
			...this.state.user,
			numGamesPlayed: 0
		}
	}

	onFormSubmit = event => {
		event.preventDefault();

		if (this.userExists(this.state.user.username)) {
			this.setState({
				userExists: true
			});
		} else {
			this.props.addUser(this.createUser());
			this.setState({
				userExists: false
			});
		}
	};

	isBtnDisabled() {
		return Object.keys(this.state.user)
					.filter( key => this.state.user[key] === '')
					.length > 0;
	}

	render() {

		const formFields = [
			{id: 'firstname', label: 'First name'},
			{id: 'lastname', label: 'Last name'},
			{id: 'username', label: 'Username'}
		];

		return (
			<div>
				<h1>New User</h1>
				<form onSubmit={this.onFormSubmit}>
					{formFields.map((field, index) => (
						<div key={index} className="form-field-block">
							<label htmlFor={field.id}>{field.label}:</label>
							<input type="text" id={field.id} name={field.id}
								value = {this.state.user[field.id]}
								onChange = {this.onFieldChange}
							/>
						</div>
					))}
					{this.state.userExists && (
						<p className="error">Username already existing</p>
					)}
					<button disabled={this.isBtnDisabled()}>Add</button>
				</form>
			</div>
		);
	}
 }
 
 AddUser.propTypes = {
	addUser: PropTypes.func.isRequired,
	users: PropTypes.array.isRequired
 };

 export default AddUser;