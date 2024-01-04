/**
 * The 'CustomDatePicker' component is a wrapper around the 'react-datepicker' library
 * that integrates with the 'react-hook-form' library for form control.
 *
 * @component
 * @param {Object} props - The properties of the 'CustomDatePicker' component.
 * @param {Object} props.control - The 'control' object from 'react-hook-form' for managing the form state.
 * @param {string} props.name - The name of the input field in the form.
 * @param {boolean} props.errorEmptyField - A boolean indicating whether the field is required.
 * @param {JSX.Element} props.StyleErrorMsg - The JSX element representing the style for error messages.
 * @returns {JSX.Element} The JSX representation of the 'CustomDatePicker' component.
 */

import React from 'react'

import { Controller } from 'react-hook-form'

import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'
import './DatePicker.css'

const CustomDatePicker = ({
	control,
	name,
	errorEmptyField,
	StyleErrorMsg,
}) => {
	// JSX structure defining the CustomDatePicker component layout
	return (
		<Controller
			control={control}
			name={name}
			rules={{
				required: errorEmptyField,
			}}
			render={({ field, fieldState }) => (
				<>
					<DatePicker
						selected={field.value}
						onChange={(date) =>
							field.onChange({
								target: {
									name,
									value: date,
								},
								type: 'change',
							})
						}
						showMonthDropdown
						showYearDropdown
						dropdownMode='select'
						scrollableYearDropdown
						minDate={new Date(1950, 0, 1)}
						maxDate={new Date(2050, 11, 31)}
						todayButton='Today'
						dateFormat='yyyy-MM-dd'
						highlightDates={[new Date()]}
						calendarClassName='custom-selected-date'
					/>

					{fieldState.error && (
						<StyleErrorMsg>
							{fieldState.error.message}
						</StyleErrorMsg>
					)}
				</>
			)}
		/>
	)
}

export default CustomDatePicker
