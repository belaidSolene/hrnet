import { useForm, Controller } from 'react-hook-form'
import Select from 'react-select'

import { states } from '../../data/states'
import { departments } from '../../data/departments'

import styled from 'styled-components'
import CustomDatePicker from '../../components/DatePicker'

export default function AddEmployeeForm() {
	const {
		register,
		control,
		handleSubmit,
		formState: { errors },
	} = useForm()

	const submitForm = (data) => {
		console.log(data)
	}
	return (
		<form onSubmit={handleSubmit(submitForm)} noValidate>
			<WrapperInputs>
				<label htmlFor='firstName'>First Name</label>
				<input
					{...register('firstName', {
						required: true,
					})}
					type='text'
					id='firstName'
					name='firstName'
				/>

				<label htmlFor='lastName'>Last Name</label>
				<input
					{...register('lastName', { required: true })}
					type='text'
					id='lastName'
					name='lastName'
				/>
			</WrapperInputs>

			<WrapperInputs>
				<label htmlFor='birthDate'>Date of Birth</label>
				<CustomDatePicker
					control={control}
					name={'birthDate'}
				/>

				<label htmlFor='startDate'>Start Date</label>
				<CustomDatePicker
					control={control}
					name={'startDate'}
				/>
			</WrapperInputs>

			<WrapperInputs>
				<label htmlFor='street'>Street</label>
				<input
					{...register('street', { required: true })}
					type='text'
					id='street'
					name='street'
				/>

				<label htmlFor='city'>City</label>
				<input
					{...register('city', { required: true })}
					type='text'
					id='city'
					name='city'
				/>
			</WrapperInputs>

			<WrapperInputs>
				<label htmlFor='state' className='state-label'>
					State
				</label>

				<Controller
					control={control}
					name='state'
					render={({ field }) => (
						<Select
							{...field}
							options={states.map(
								({ name, code }) => ({
									value: code,
									label: name,
								}),
							)}
							placeholder='Select a State...'
						/>
					)}
				/>

				<label htmlFor='zipCode'>Zip Code</label>
				<input
					{...register('zipCode', {
						required: true,
						pattern: /^\d{5}(-\d{4})?$/i,
					})}
					type='text'
					id='zipCode'
					name='zipCode'
				/>
			</WrapperInputs>

			<div>
				<label htmlFor='department'>Department</label>
				<Controller
					control={control}
					name='department'
					render={({ field }) => (
						<Select
							{...field}
							options={departments.map(
								({ name, code }) => ({
									value: code,
									label: name,
								}),
							)}
							placeholder='Select a department...'
						/>
					)}
				/>
			</div>

			<button type='submit'>Submit</button>
		</form>
	)
}

const WrapperInputs = styled.div`
	display: flex;
	margin-top: 1rem;
`
