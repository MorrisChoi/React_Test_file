import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = props =>{
	const { name, children } = props;
	return (
		<div>안녕 {name}
		childeren 값은 {children}



		</div>
		);
};

MyComponent.defaultProps = {
	name: 12
};

MyComponent.propTypes = {
	name: PropTypes.string
}

export default MyComponent;