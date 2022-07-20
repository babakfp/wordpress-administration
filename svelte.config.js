import path from 'path'
import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-vercel'

const config = {
  kit: {
    adapter: adapter(),
		vite: {
			resolve: {
				alias: {
					'$partials': path.resolve('src/lib/partials'),
					'$components': path.resolve('src/lib/components'),
					'$stores': path.resolve('src/lib/stores'),
          '$utilities': path.resolve('src/lib/utilities'),
				},
			},
		},
  },
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
}

export default config
