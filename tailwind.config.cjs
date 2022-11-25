/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				base: {
					700: '#131922',
					600: '#141C27'
				},
				accent: {
					300: '#1E293A',
					100: '#7FB2FF'
				}
			}
		}
	},
	plugins: []
}
