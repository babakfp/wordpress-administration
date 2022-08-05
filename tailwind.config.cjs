const colors = require('tailwindcss/colors')

const extraHeight = {
	'screen-header': 'calc(100vh - var(--header-h))',
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte}'],
  theme: {
		extend: {
			colors: {
				gray: colors.zinc,
				brand: {
					DEFAULT: '#0369a1',
					light: '#0284c7',
				},
			},
			// TODO
			spacing: {
				17: '4.25rem',
				header: 'var(--header-h)',
			},
			maxWidth: theme => theme('spacing'),
			minWidth: theme => theme('spacing'),

			height: ({ theme }) => ({
				...theme('spacing'),
				...extraHeight,
			}),
			maxHeight: ({ theme }) => ({
				...theme('spacing'),
				...extraHeight,
			}),
			minHeight: ({ theme }) => ({
				...theme('spacing'),
				...extraHeight,
			}),

			zIndex: {
				1: '1',
				2: '2',
				3: '3',
			},
			borderRadius: {
				DEFAULT: '6px',
			},
			borderWidth: {
				3: '3px',
			},
			ringWidth: {
        3: '3px',
      },
			fontSize: {
				'2xs': ['0.625rem', { lineHeight: '1' }],
			},
			lineHeight: {
				0: '0',
			},
			cursor: {
				grab: 'grab',
			},
		},
  },
  plugins: [
		require('@tailwindcss/line-clamp'),
	],
}
