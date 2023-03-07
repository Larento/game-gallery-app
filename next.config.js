/** @type {import('next').NextConfig} */
// require('dotenv').config();
const url = require('node:url');
const baseURL = new url.URL(process.env.BASE_URL);
// console.log(process.env, baseURL);

const nextConfig = {
	reactStrictMode: true,
	compiler: {
		styledComponents: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: baseURL.protocol.slice(0, -1),
				hostname: `**.${process.env.DOMAIN_NAME}`,
			},
		],
	},
	env: {
		BASE_URL: process.env.BASE_URL,
		API_KEY: process.env.API_KEY,
	},
};

module.exports = nextConfig;
