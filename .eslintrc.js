module.exports = {
	root: true,
	parser: 'babel-eslint',
	env: {
		browser: true,
		es6: true,
	},
	extends: ['react-app', 'prettier'],
	plugins: ['react', 'prettier'],
	parserOptions: {
		ecmaVersion: 2018,
	},
	rules: {
		// semi: 1,
		// singleQuote: true,
		'prettier/prettier': [
			'error',
			{
				printWidth: 80,
				tabWidth: 2,
				semi: true,
				jsxSingleQuote: true,
				singleQuote: true,
				useTabs: true,
				endOfLine: 'auto',
			},
		],
	},
};
