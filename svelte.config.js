import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-vercel'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
		alias: {
			$partials: 'src/lib/partials',
			$components: 'src/lib/components',
			$stores: 'src/lib/stores',
			$utilities: 'src/lib/utilities',
		},
  },
  preprocess: [
    preprocess({ postcss: true }),
  ],
}

export default config
