import React from 'react'

import { Controller } from 'react-hook-form'

import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'
import './DatePicker.module.css'

const CustomDatePicker = ({ control, name }) => {
	return (
		<Controller
			control={control}
			name={name}
			render={({ field }) => (
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
					dateFormat='dd/MM/yyyy'
					highlightDates={[new Date()]}
					calendarClassName='custom-selected-date'
				/>
			)}
		/>
	)
}

export default CustomDatePicker
