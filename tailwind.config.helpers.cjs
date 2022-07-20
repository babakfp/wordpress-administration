// const plugin = require('tailwindcss/plugin')

/**
	* Uses RGB formatted color as CSS-Var and returns RGB formatted color
	* @param {string} color Example: --white. Format: 255, 255, 255
*/
const colorWithOpacity = (color, opacity) => {
	return ({ opacityValue }) => {
		if (opacity) {
			return `rgb(${color} / ${opacity}%)`
		} else {
			if (opacityValue === undefined) {
				return `rgb(${color})`
			}
			return `rgb(${color} / ${opacityValue})`
		}
	}
}

/**
	* Uses RGB formatted color as CSS-Var and returns RGB formatted color
	* @param {string} cssVar Example: --white. Format: 255, 255, 255
*/
const cssVarColor = (cssVar) => {
	return ({ opacityValue }) => {
		if (opacityValue === undefined) {
			return `rgb(var(${cssVar}))`
		}
		return `rgba(var(${cssVar}) / ${opacityValue})`
	}
}

/**
	* TOFIX: Returns function instead of string!
	* Takes a Tailwind's color{object} and converts the value of each color to CSS-Var
	* @param {string} colorName Example: 'gray'
	* @param {object} colors Example: colors.neutral. { '50': '#fafafa' }
*/
// const cssVarColorObj = (colorName, colors) => {
// 	let newColors = {}
// 	for (const lvl in colors) {
// 		newColors[lvl] = cssVarColor(`--${colorName}-${lvl}`)
// 	}
// 	return newColors
// }

module.exports = {
	colorWithOpacity,
	cssVarColor,
}
