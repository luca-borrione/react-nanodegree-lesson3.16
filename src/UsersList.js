import React from 'react';
import PropTypes from 'prop-types'
import User from './User'

class UserList extends React.Component {

	state = {
		showNumGamesPlayed: true
	};

	toggleShowNumGamesPlayed = () => {
		this.setState(state => {
			return {
				showNumGamesPlayed: state.showNumGamesPlayed === false
			};
		});
	}

	getButtonLabel() {
		return this.state.showNumGamesPlayed
			? 'Hide the Number of Games Played'
			: 'Show the Number of Games Played'
	}

	render() {
		return (
			<div>
				<div className="form-field-block">
					{this.props.users.length > 0 && (
						<button className="smallButton" onClick={this.toggleShowNumGamesPlayed}>
							{this.getButtonLabel()}
						</button>
					)}
				</div>
				<ol>
					{this.props.users.map( (user, index) => (
						<User key={Symbol(index).toString()}
							user = {user}
							showNumGamesPlayed = {this.state.showNumGamesPlayed}
						/>
					))}	
				</ol>
			</div>
		);
	}
}
 
 
UserList.propTypes = {
	users: PropTypes.array.isRequired
 };

 export default UserList;