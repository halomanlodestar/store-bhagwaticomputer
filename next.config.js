/**
 * @format
 * @type {import('next').NextConfig}
 */

const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "www.genatec.com",
			},
			{
				protocol: "https",
				hostname: "i.dell.com",
			},
		],
	},
};

module.exports = nextConfig;
