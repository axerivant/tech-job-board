import adapter from '@sveltejs/adapter-auto'
import preprocess from 'svelte-preprocess'
import path from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			'@': path.resolve('./src/')
		}
	},
	preprocess: [
		preprocess({
			postcss: true
		})
	]
}

export default config
