/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				base: {
					700: '#131922',
					600: '#141C27',
					300: '#414F63',
					50: '#B4D0F8'
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
