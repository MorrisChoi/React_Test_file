import React, { useState, useReducer } from 'react';


function reducer(state, action){

	switch (action, type) {
		case INCREMENT:
		return { value: state.value +1} ;

		case DECREMENT:
		return { value: state.value -1 };

		default:
		return state; 
	}

}

const Counter = () =>{
	const [state, setState] = useReducer(reducer, {value: 0 });
return(
	<div>
	</div>

	);
};


export default Counter;