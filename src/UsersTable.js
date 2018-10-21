import React from 'react';
import AddUser from './AddUser';
import UsersList from './UsersList';

class UsersTable extends React.Component {

	/**
	 * @typedef	 {Object} User
	 * @property {string} firstname			- user first name
	 * @property {string} lastname			- user last name
	 * @property {string} username			- user username
	 * @property {number} numGamesPlayed	- number of games played by the user
	 */

	/**
	 * @member	 {Object}		state
	 * @property {Array.<User>} state.users	- list of users
	 */
	state = {
		users: [],
	};

	/**
	 * Appends a new user entry to the state users list
	 * @param {User} user	- new user entry
	 */
	addUser = user => {
		this.setState(state => {
			return {
				users: [...state.users, user]
			};
		});
	};


	render() {
		return (
			<div>
				<AddUser
					addUser = {this.addUser}
					users = {this.state.users}
				/>
				<br />

				{this.state.users.length > 0 && (
					<div>
						<hr />
						<UsersList
							users = {this.state.users}
						/>
					</div>
				)}
			</div>
		);
	}
}

export default UsersTable;