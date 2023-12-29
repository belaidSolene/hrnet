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
