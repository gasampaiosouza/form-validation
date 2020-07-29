import { useState } from 'react';
import style from './style.module.scss';

interface inputType {
	placeholder: string;
	change?: Function;
}

const Input: React.FC<inputType> = ({ placeholder, change }) => {
	const [value, setValue] = useState('');

	return (
		<div className={style.container}>
			{' '}
			<div className={style.input}>
				<input
					className={`${style['input-box']} ${value && style['has-content']}`}
					onChange={(event) => (change(event), setValue(event.target.value))}
				/>
				<label>{placeholder}</label>
				<span className={style['focus-border']}>
					<i></i>
				</span>
			</div>
		</div>
	);
};

export default Input;
