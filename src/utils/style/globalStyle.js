import { colors } from './colors'

export const BaseStyleSelect = {
	control: (provided, state) => ({
		...provided,
		border: state.isFocused
			? 'none'
			: `1px solid rgb(${colors.fieldset})`,

		outline: state.isFocused ? `2px solid ${colors.accent}` : 'none',
		boxShadow: 'none',

		'&:hover': {
			border: state.isFocused
				? 'none'
				: `2px solid rgba(${colors.accentRGB}, 0.5)`,
		},
	}),

	menu: (provided) => ({
		...provided,
		padding: '8px',

		backdropFilter:
			'blur(12px)' /* Ajustez la valeur selon vos besoins */,
		backgroundColor: 'rgba(255, 255, 255, 0.8)',
	}),

	option: (provided, state) => ({
		...provided,
		color: '#000',
		backgroundColor: state.isFocused
			? `rgba(${colors.accentRGB}, 0.2)`
			: 'transparent', // Hover style

		borderRadius: '4px',
	}),
}
