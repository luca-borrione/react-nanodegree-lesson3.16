import React from 'react';
import AddUser from './AddUser';
import UsersList from './UsersList';

class UsersTable extends React.Component {

	/**
	 * @member	 {Object}				state
	 * @property {Array.<Object>}		state.users							- list of users
	 * @property {string}				state.users[].firstname			- user first name
	 * @property {string}				state.users[].lastname			- user last name
	 * @property {string}				state.users[].username			- user username
	 * @property {number}				state.users[].numGamesPlayed	- number of games played by the user
	 * 
	 */
	state = {
		users: [],
		showNumGamesPlayed: true
	};

	addUser = (user) => {
		user.numGamesPlayed = 0;

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
				<hr />

				<UsersList
					users = {this.state.users}
				/>
			</div>
		);
	}
}

export default UsersTable;