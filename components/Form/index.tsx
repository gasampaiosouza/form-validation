import React from 'react';
import Input from './Input';

import style from './style.module.scss';

const Form: React.FC = () => {
	return (
		<form id={style.form}>
			<Input placeholder="Your name" />
			<Input placeholder="Your email" type="email" />
			<Input placeholder="Password" type="password" />
			<Input placeholder="Year of birth" type="number" />
		</form>
	);
};

export default Form;
