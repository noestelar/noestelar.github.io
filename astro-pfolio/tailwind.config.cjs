/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				xs: { max: '767px' },
				sm: { min: '768px', max: '1023px' },
				md: { min: '1024px', max: '1279px' },
				lg: { min: '1280px', max: '1919px' },
				xl: { min: '1920px' },
			}
		},
	},
	plugins: [],
}
