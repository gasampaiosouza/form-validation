const rules = {
	lowercase: {
		id: 1,
		min: 2,
		regex: /[a-z]/,
		label: 'lowercase letters',
	},
	uppercase: {
		id: 2,
		min: 1,
		regex: /[A-Z]/,
		label: 'uppercase letters',
	},
	symbol: {
		id: 3,
		min: 1,
		regex: /[-!$%@#\^&*()_+|~{}\[\\]:";'\/<>\?,.]/,
		label: 'symbol',
	},
	number: {
		id: 4,
		min: 2,
		regex: /\d/,
		label: 'numbers',
	},
};

export default rules;
