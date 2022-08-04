import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-vercel'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
		alias: {
			$partials: 'src/lib/components/partials',
			$components: 'src/lib/components/reusable',
			$stores: 'src/lib/stores',
			$utilities: 'src/lib/utilities',
		},
  },
  preprocess: [
    preprocess({ postcss: true }),
  ],
}

export default config
