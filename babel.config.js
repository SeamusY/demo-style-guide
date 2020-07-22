module.exports ={
	env: {
    test: {
      plugins: ["transform-es2015-modules-commonjs"]
    }
  },
	presets: [
		[
			'@babel/preset-env',
			{
				targets: {
				node: 'current',
			},
				modules: false,
				useBuiltIns: 'usage',
			},
		],
		'@babel/preset-react',
	],
	plugins: [
		'@babel/plugin-proposal-class-properties',
		"@babel/plugin-transform-react-jsx"
		// "transform-es2015-modules-commonjs"
	],
}
