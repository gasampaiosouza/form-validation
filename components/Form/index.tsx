import React, { useState, useRef, MutableRefObject } from 'react';
import Input from './Input';

import style from './style.module.scss';

const Form: React.FC = () => {
	const uppercaseRef = useRef(null);
	const lowercaseRef = useRef(null);
	const symbolsRef = useRef(null);

	const [rules, setRules] = useState({
		lowercase: { min: 2, completed: false },
		uppercase: { min: 1, completed: false },
		symbols: { min: 1, completed: false },
	});

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;

		const correctColor = '#96bb7c';

		const changeColor = (element: MutableRefObject<any>, color: string) =>
			(element.current.style.color = color);

		const regexes = () => {
			const { lowercase: lower, symbols, uppercase: upper } = rules;

			const symbolRegex = new RegExp(
				`[-!$%@\^&*()_+|~{}\[\\]:";'<>?,.\/]{${symbols.min}}`,
				'g'
			);
			const upperRegex = new RegExp(`[A-Z]{${upper.min}}`, 'g');
			const lowerRegex = new RegExp(`[a-z]{${lower.min}}`, 'g');

			return [
				{ regex: lowerRegex, label: lowercaseRef },
				{ regex: upperRegex, label: uppercaseRef },
				{ regex: symbolRegex, label: symbolsRef },
			];
		};

		regexes().forEach(({ regex, label }) => {
			const regexMatches = [...value.matchAll(regex)].length != 0;

			if (regexMatches) changeColor(label, correctColor);
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
