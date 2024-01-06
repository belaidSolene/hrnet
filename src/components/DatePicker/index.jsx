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
	birthDate,
}) => {
	const today = new Date()

	const minBirthDate = new Date(
		today.getFullYear() - 80,
		today.getMonth(),
		today.getDate(),
	)

	const maxBirthDate = new Date(
		today.getFullYear() - 18,
		today.getMonth(),
		today.getDate(),
	)

	const minStartDate = birthDate
		? new Date(
				birthDate.getFullYear() + 18,
				birthDate.getMonth(),
				birthDate.getDate(),
			)
		: new Date(
				today.getFullYear(),
				today.getMonth() - 3,
				today.getDate(),
			)

	const maxStartDate = new Date(
		today.getFullYear(),
		today.getMonth() + 3,
		today.getDate(),
	)

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
						minDate={
							name === 'birthDate'
								? minBirthDate
								: minStartDate
						}
						maxDate={
							name === 'birthDate'
								? maxBirthDate
								: maxStartDate
						}
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
