/** @format */

import path from 'path';
import webpack from 'webpack';
import Dotenv from 'dotenv-webpack';

module.exports = {
	// ... your other webpack configuration options ...
	resolve: {
		fallback: {
			fs: false,
			path: require.resolve('path-browserify'),
			os: require.resolve('os-browserify/browser'),
		},
	},
	plugins: [
		new Dotenv(),
		// ... your other plugins ...
	],
};
