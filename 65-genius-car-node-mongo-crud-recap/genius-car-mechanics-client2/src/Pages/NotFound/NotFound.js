import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/notfound.png';

const NotFound = () => {
	return (
		<div>
			<img src={notfound} alt="" />
			<Link to="/">
				<button>Go Back</button>
			</Link>
		</div>
	);
};

export default NotFound;
