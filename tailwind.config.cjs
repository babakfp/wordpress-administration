const colors = require('tailwindcss/colors')
const { colorWithOpacity, cssVarColor } = require('./tailwind.config.helpers.cjs')

module.exports = {
  content: ['./src/**/*.{html,js,svelte}'],
  theme: {
		extend: {
			colors: {
				white: {
					DEFAULT: colorWithOpacity('255 255 255'),
					5: colorWithOpacity('255 255 255', '5'),
					10: colorWithOpacity('255 255 255', '10'),
					20: colorWithOpacity('255 255 255', '20'),
					30: colorWithOpacity('255 255 255', '30'),
					40: colorWithOpacity('255 255 255', '40'),
					60: colorWithOpacity('255 255 255', '60'),
					70: colorWithOpacity('255 255 255', '70'),
					80: colorWithOpacity('255 255 255', '80'),
					90: colorWithOpacity('255 255 255', '90'),
				},
				gray: {
					50: cssVarColor('--gray-50'),
					100: cssVarColor('--gray-100'),
					200: cssVarColor('--gray-200'),
					300: cssVarColor('--gray-300'),
					400: cssVarColor('--gray-400'),
					500: cssVarColor('--gray-500'),
					600: cssVarColor('--gray-600'),
					700: cssVarColor('--gray-700'),
					800: cssVarColor('--gray-800'),
					900: cssVarColor('--gray-900'),
				},
				brand: {
					DEFAULT: cssVarColor('--brand'),
					light: cssVarColor('--brand-light'),
				},
			},
			spacing: {
				17: '4.25rem',
				header: '3.5rem',
				vh: 'calc(100vh - 4rem)'
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
