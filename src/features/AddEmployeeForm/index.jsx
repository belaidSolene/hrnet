import { useForm, Controller } from 'react-hook-form'
import {
	formatString,
	formatDate,
	formatState,
	formatDepartment,
} from '../../utils/formattedData/format'
import { useEmployeeContext } from '../../app/EmployeeContext'

import CustomDatePicker from '../../components/DatePicker'
import Select from 'react-select'

import { states } from '../../data/states'
import { departments } from '../../data/departments'

import styled from 'styled-components'
import { colors } from '../../utils/style/colors'

export default function AddEmployeeForm() {
	const {
		register,
		control,
		handleSubmit,
		formState: { errors },
	} = useForm()
	const { dispatch } = useEmployeeContext()

	const errorEmptyField = 'Please fill out this field.'
	const errorSelectField = 'Please select an option.'

	console.log(errors.zipCode)

	const submitForm = (data) => {
		const employee = {
			firstName: formatString(data.firstName),
			lastName: formatString(data.lastName),
			birthDate: formatDate(data.birthDate),
			startDate: formatDate(data.startDate),
			street: data.street,
			city: data.city,
			state: formatState(data.state),
			zipCode: data.zipCode,
			department: formatDepartment(data.department),
		}

		dispatch({ type: 'ADD_EMPLOYEE', employee })
	}

	return (
		<Form onSubmit={handleSubmit(submitForm)} noValidate>
			<WrapperLine>
				<WrapperInput>
					<label htmlFor='firstName'>First Name</label>
					<input
						{...register('firstName', {
							required: errorEmptyField,
						})}
						type='text'
						id='firstName'
						name='firstName'
					/>
					{errors.firstName && (
						<ErrorMessage>
							{errors.firstName.message}
						</ErrorMessage>
					)}
				</WrapperInput>

				<WrapperInput>
					<label htmlFor='lastName'>Last Name</label>
					<input
						{...register('lastName', {
							required: errorEmptyField,
						})}
						type='text'
						id='lastName'
						name='lastName'
					/>
					{errors.lastName && (
						<ErrorMessage>
							{errors.lastName.message}
						</ErrorMessage>
					)}
				</WrapperInput>
			</WrapperLine>

			<WrapperLine>
				<WrapperInput>
					<label htmlFor='birthDate'>
						Date of Birth
					</label>
					<CustomDatePicker
						control={control}
						name={'birthDate'}
						errorEmptyField={errorEmptyField}
						StyleErrorMsg={ErrorMessage}
					/>
				</WrapperInput>

				<WrapperInput>
					<label htmlFor='startDate'>Start Date</label>
					<CustomDatePicker
						control={control}
						name={'startDate'}
						errorEmptyField={errorEmptyField}
						StyleErrorMsg={ErrorMessage}
					/>
				</WrapperInput>
			</WrapperLine>

			<WrapperAdress>
				<legend>Address</legend>

				<WrapperLine>
					<WrapperInput>
						<label htmlFor='street'>Street</label>
						<input
							{...register('street', {
								required: errorEmptyField,
							})}
							type='text'
							id='street'
							name='street'
						/>
						{errors.street && (
							<ErrorMessage>
								{errors.street.message}
							</ErrorMessage>
						)}
					</WrapperInput>

					<WrapperInput>
						<label htmlFor='city'>City</label>
						<input
							{...register('city', {
								required: errorEmptyField,
							})}
							type='text'
							id='city'
							name='city'
						/>
						{errors.city && (
							<ErrorMessage>
								{errors.city.message}
							</ErrorMessage>
						)}
					</WrapperInput>
				</WrapperLine>

				<WrapperLine>
					<WrapperInput>
						<label
							htmlFor='state'
							className='state-label'
						>
							State
						</label>

						<Controller
							control={control}
							name='state'
							rules={{
								required: errorSelectField,
							}}
							render={({
								field,
								fieldState,
							}) => (
								<>
									<Select
										{...field}
										options={states.map(
											({
												name,
												code,
											}) => ({
												value: code,
												label: name,
											}),
										)}
										placeholder='Select a State...'
										styles={
											StyleStateSelect
										}
									/>

									{fieldState.error && (
										<ErrorMessage>
											{
												fieldState
													.error
													.message
											}
										</ErrorMessage>
									)}
								</>
							)}
						/>
					</WrapperInput>

					<WrapperInput>
						<label htmlFor='zipCode'>
							Zip Code
						</label>
						<input
							{...register('zipCode', {
								required: errorEmptyField,
								pattern: /^\d{5}-\d{4}$/i,
							})}
							type='text'
							id='zipCode'
							name='zipCode'
						/>
						{errors.zipCode && (
							<ErrorMessage>
								{errors.zipCode.message}
								{errors.zipCode.type ===
									'pattern' && (
									<p>
										Please
										enter a
										valid ZIP
										code in
										the format
										:{' '}
										<span>
											12345-1234
										</span>{' '}
										.
									</p>
								)}
							</ErrorMessage>
						)}
					</WrapperInput>
				</WrapperLine>
			</WrapperAdress>

			<WrapperDepartment>
				<label htmlFor='department'>Department</label>
				<Controller
					control={control}
					name='department'
					rules={{
						required: errorSelectField,
					}}
					render={({ field, fieldState }) => (
						<>
							<Select
								{...field}
								options={departments.map(
									({
										name,
										code,
									}) => ({
										value: code,
										label: name,
									}),
								)}
								placeholder='Select a department...'
								styles={
									StyleDepartmentSelect
								}
							/>

							{fieldState.error && (
								<ErrorMessage>
									{
										fieldState
											.error
											.message
									}
								</ErrorMessage>
							)}
						</>
					)}
				/>
			</WrapperDepartment>

			<Button type='submit'>Save</Button>
		</Form>
	)
}

const Form = styled.form`
	margin: 32px 20px 20px;
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	justify-content: center;
`

const WrapperLine = styled.div`
	display: flex;
	flex: 1;
	justify-content: space-between;
	align-items: center;
	gap: 8%;
`

const WrapperInput = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	align-items: flex-start;

	label {
		margin: 0 0 8px 0;
		font-weight: 300;
	}

	input {
		width: 90%;
		border: 1px solid ${colors.secondary};
		border-radius: 4px;
		padding: 0.5rem;
		margin-left: 8px;
		font-family: inherit;

		&:focus {
			outline: 2px solid ${colors.accent};
			border: none;

			&:hover {
				border: none;
			}
		}

		&:hover {
			border: 2px solid rgba(${colors.accentRGB}, 0.5);
		}
	}
`

const BaseStyleSelect = {
	control: (provided, state) => ({
		...provided,
		border: state.isFocused
			? 'none'
			: `1px solid ${colors.secondary}`,

		outline: state.isFocused ? `2px solid ${colors.accent}` : 'none',
		boxShadow: 'none',

		'&:hover': {
			border: state.isFocused
				? 'none'
				: `2px solid rgba(${colors.accentRGB}, 0.5)`,
		},
	}),

	option: (provided, state) => ({
		...provided,
		color: '#000',
		backgroundColor: state.isFocused
			? `rgba(${colors.accentRGB}, 0.2)`
			: 'transparent', // Hover style
	}),
}

const StyleStateSelect = {
	...BaseStyleSelect,

	container: (provided) => ({
		...provided,
		width: '90%',
		'padding-left': '8px',
		'text-align': 'left',
	}),
}

const StyleDepartmentSelect = {
	...BaseStyleSelect,

	container: (provided) => ({
		...provided,
		width: '100%',
		'padding-left': '8px',
		'text-align': 'left',
	}),
}

const WrapperAdress = styled.fieldset`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	justify-content: center;

	border: 0.5px solid rgb(${colors.fieldset});
	border-radius: 4px;
	padding-bottom: 1rem;

	legend {
		text-align: left;
		font-weight: 400;
		margin: 0 0 0.5rem 0.5rem;
	}
`

const WrapperDepartment = styled(WrapperInput)`
	justify-content: flex-start;
`

const ErrorMessage = styled.p`
	color: ${colors.error};
	font-size: 0.8rem;
	margin: 0.2rem 0 0 8px;
	text-align: left;

	span {
		font-weight: 500;
	}
`

const Button = styled.button`
	padding: 1rem 2.7rem;
	font-weight: 500;
	font-size: 16px;
	align-self: center;
	background-color: ${colors.tertiary};
	color: ${colors.white};
	border-radius: 4px;
	width: fit-content;
	margin-top: 1rem;
	letter-spacing: 2px;
	box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);

	&:hover {
		background-color: ${colors.accent};
	}
`
