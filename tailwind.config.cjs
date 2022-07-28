const colors = require('tailwindcss/colors')
const { colorWithOpacity, cssVarColor } = require('./tailwind.config.helpers.cjs')

module.exports = {
  content: ['./src/**/*.{html,js,svelte}'],
  theme: {
		extend: {
			colors: {
				gray: colors.zinc,
				brand: {
					DEFAULT: cssVarColor('--brand'),
					light: cssVarColor('--brand-light'),
				},
			},
			spacing: {
				17: '4.25rem',
				header: 'var(--header-h)',
				vh: 'calc(100vh - var(--header-h))'
			},
			maxWidth: theme => theme('spacing'),
			minWidth: theme => theme('spacing'),
			minHeight: theme => theme('spacing'),
			maxHeight: theme => theme('spacing'),
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
