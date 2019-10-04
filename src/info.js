import React, { useState, useEffect, useMemo } from 'react';

const Info = () =>{

	const [name, setName] = useState('');
	const [nickname, setNickname] = useState('');

	const onChangeName = e =>{
		setName(e.target.value);
	};


	const onChangeNickname = e =>{
		setNickname(e.target.value);

	};


	useEffect(() =>{
		console.log('렌더링 바뀔 때 마다  실행');
		console.log({
			name,
			nickname
		});
	});


	useEffect(() =>{
		console.log('마운트 실행');
	}, []);

		useEffect(() =>{
		console.log(name , '렌더링 완료');
	}, [name]);


	return(
		<div>

		<div>
		<input value = {name} onChange = {onChangeName} />
		<input value = {nickname} onChange = {onChangeNickname} />
		</div>

		<div>

		<div>
		<b>이름: </b> {name}
		</div>

		<div>
		<b>닉네임: </b> {nickname}
		</div>

		</div>

		</div>
		);
};

export default Info;