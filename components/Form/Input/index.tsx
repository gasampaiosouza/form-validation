import { useState } from 'react';
import style from './style.module.scss';

interface inputType {
	placeholder: string;
	type?: string;
	width?: string;
	required?: boolean;
}

const Input: React.FC<inputType> = ({ placeholder, type, width, required }) => {
	const [value, setValue] = useState('');

	const limitMax = (event, max: number) => {
		const currentInput = event.target;
		const value = currentInput.value;

		let running = false;

		return () => {
			if (running) return;

			running = true;

			if (parseFloat(value) > max) currentInput.value = max;

			running = false;
		};
	};

	const currentYear = new Date().getFullYear();

	return (
		<div className={style.input}>
			<input
				className={`${style['input-box']} ${value && style['has-content']}`}
				type={type || 'text'}
				onChange={(e) => setValue(e.target.value)}
				style={{ width: width || '' }}
				required={required || true}
				onKeyUp={(e) => limitMax(e, currentYear)()}
				onBlur={(e) => limitMax(e, currentYear)()}
			/>
			<label>{placeholder}</label>
			<span className={style['focus-border']}>
				<i></i>
			</span>
		</div>
	);
};

export default Input;
