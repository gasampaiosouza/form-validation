import React, { useRef, MutableRefObject } from 'react';
import Input from './Input';

import style from './style.module.scss';

const Form: React.FC = () => {
	const uppercaseRef = useRef(null);
	const lowercaseRef = useRef(null);
	const symbolsRef = useRef(null);

	const rules = {
		lowercase: { min: 2 },
		uppercase: { min: 1 },
		symbols: { min: 1 },
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		const correctColor = '#99b898';

		const changeColor = (element: MutableRefObject<any>, color: string) =>
			(element.current.style.color = color);

		const getRegexes = () => {
			const { lowercase: lower, symbols, uppercase: upper } = rules;

			const symbolRegex = new RegExp(
				`[-!$%@#\^&*()_+|~{}\[\\]:";'<>?,.\/]{${symbols.min}}`,
				'g'
			);
			const upperRegex = /[A-Z]/g;
			const lowerRegex = /[a-z]/g;

			return [
				{ regex: lowerRegex, label: lowercaseRef, min: 2 },
				{ regex: upperRegex, label: uppercaseRef, min: 1 },
				{ regex: symbolRegex, label: symbolsRef, min: 1 },
			];
		};

		getRegexes().forEach(({ regex, label, min }) => {
			const regexMatches = [...value.matchAll(regex)].length != 0;
			const isMinimumRequired = [...value.matchAll(regex)].length >= min;

			if (regexMatches && isMinimumRequired) changeColor(label, correctColor);
			else changeColor(label, 'initial');
		});
	};

	return (
		<>
			<h1 className={style.title}>Fill the input with the required rules.</h1>

			<div className={style['form-box']}>
				<form>
					<Input placeholder="Follow the rules..." change={handleChange} />

					<ul className={style['rules']}>
						<li ref={uppercaseRef}>1 uppercase letter</li>
						<li ref={lowercaseRef}>2 lowercase letters</li>
						<li ref={symbolsRef}>1 symbol</li>
					</ul>

					<button className={style.btn}>Enviar</button>
				</form>
			</div>
		</>
	);
};

export default Form;
