import { useState } from 'react';

const Input: React.FC = () => {
	const [value, setValue] = useState('');

	return (
		<section>
			<div className="input">
				<input
					className={`input-box ${value && 'has-content'}`}
					type="text"
					onChange={(e) => setValue(e.target.value)}
				/>
				<label>First Name</label>
				<span className="focus-border">
					<i></i>
				</span>
			</div>
		</section>
	);
};

export default Input;
