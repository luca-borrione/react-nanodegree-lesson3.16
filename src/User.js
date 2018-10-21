import React from 'react';
import PropTypes from 'prop-types'

const User = props => {

	const getNumGamesPlayed = () => {
		return props.showNumGamesPlayed
			? props.user.numGamesPlayed
			: '*'
	};

	return (
		<li>
			<p>Username: {props.user.username}</p>
			<p>Number of Games Played: {getNumGamesPlayed()}</p>
		</li>
	);
};

User.propTypes = {
	user: PropTypes.object.isRequired,
	showNumGamesPlayed: PropTypes.bool.isRequired
};

export default User;