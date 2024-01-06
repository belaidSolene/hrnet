/**
 * The utility functions provided in this module are used for formatting various types of data.
 * These functions handle formatting of dates, strings, and values selected from dropdowns.
 *
 * @module formattedData/format
 */

/**
 * Formats a date object into 'yyyy-MM-dd' format.
 *
 * @param {Date} date - The date object to be formatted.
 * @returns {string|null} The formatted date string or null if an error occurs.
 */
export const formatDate = (date) => {
	try {
		if (date instanceof Date) {
			const year = date.getFullYear()
			const month = String(date.getMonth() + 1).padStart(2, '0')
			const day = String(date.getDate()).padStart(2, '0')
			return `${year}-${month}-${day}`
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

/**
 * Capitalizes the first letter of a string and converts the rest to lowercase.
 *
 * @param {string} str - The string to be formatted.
 * @returns {string|null} The formatted string or null if an error occurs.
 */
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

/**
 * Extracts the label from a select value object representing a department.
 *
 * @param {Object} selectValue - The select value object.
 * @returns {string|null} The formatted department label or null if an error occurs.
 */
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

/**
 * Extracts the value from a select value object representing a state.
 *
 * @param {Object} selectValue - The select value object.
 * @returns {string|null} The formatted state value or null if an error occurs.
 */
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

/**
 * Checks if a string contains HTML tags.
 *
 * @param {string} str - The string to be checked.
 * @returns {boolean|null} True if the string contains HTML tags, false otherwise or null if an error occurs.
 */
export const checkForHTMLTags = (str) => {
	try {
		if (str && str.length > 0) {
			const regex = /<\/?[a-z][\s\S]*>/i
			if (regex.test(str)) {
				throw new Error(
					"L'insertion de balises HTML est interdite.",
				)
			} else {
				return false
			}
		} else {
			throw new Error(
				'The provided string is empty or undefined.',
			)
		}
	} catch (error) {
		console.error(`Error checking for HTML tags: ${error.message}`)
		return true
	}
}
