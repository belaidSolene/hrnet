import { format } from 'date-fns'

export const formatDate = (date) => {
	try {
		if (date instanceof Date) {
			return format(date, 'yyyy-MM-dd')
		} else {
			throw new Error(
				'The provided value is not an instance of Date.',
			)
		}
	} catch (error) {
		console.error(`Error formatting date: ${error.message}`)
		return null
	}
}

export const formatString = (str) => {
	try {
		if (str && str.length > 0) {
			return str[0].toUpperCase() + str.slice(1).toLowerCase()
		} else {
			throw new Error(
				'The provided string is empty or undefined.',
			)
		}
	} catch (error) {
		console.error(`Error formatting string: ${error.message}`)
		return null
	}
}

export const formatDepartment = (selectValue) => {
	try {
		if (
			selectValue &&
			typeof selectValue === 'object' &&
			'value' in selectValue &&
			'label' in selectValue
		) {
			return selectValue.label
		} else {
			throw new Error('Invalid select value format.')
		}
	} catch (error) {
		console.error(`Error formatting select value: ${error.message}`)
		return null
	}
}

export const formatState = (selectValue) => {
	try {
		if (
			selectValue &&
			typeof selectValue === 'object' &&
			'value' in selectValue &&
			'label' in selectValue
		) {
			return selectValue.value
		} else {
			throw new Error('Invalid select value format.')
		}
	} catch (error) {
		console.error(`Error formatting select value: ${error.message}`)
		return null
	}
}
