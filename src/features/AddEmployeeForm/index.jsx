/**
 * The 'AddEmployeeForm' component provides a form to add a new employee.
 * It includes form fields for first name, last name, date of birth, start date,
 * address (street, city, state, zip code), and department.
 * The form uses React Hook Form for form management and validation.
 *
 * @component
 * @returns {JSX.Element} The JSX representation of the 'AddEmployeeForm' component.
 */

// Importing necessary dependencies
import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import {
	formatString,
	formatDate,
	formatState,
	formatDepartment,
	checkForHTMLTags,
} from '../../utils/formattedData/format'
import { useEmployeeContext } from '../../app/EmployeeContext'
import { useState } from 'react'

// Importing necessary dependencies for the CustomDatePicker and Select component
import CustomDatePicker from '../../components/DatePicker'
import Select from 'react-select'

// Importing necessary data
import { states } from '../../data/states'
import { departments } from '../../data/departments'

// Importing necessary dependencies for styling
import styled from 'styled-components'
import { colors } from '../../utils/style/colors'
import { BaseStyleSelect } from '../../utils/style/globalStyle'
import ConfirmationModal from '../../components/ConfirmationModale'

export default function AddEmployeeForm() {
	// React Hook Form setup
	const {
		register,
		control,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm()

	const birthDate = watch('birthDate')

	const { dispatch } = useEmployeeContext()

	// Error messages
	const errorEmptyField = 'Please fill out this field.'
	const errorSelectField = 'Please select an option.'

	// Confirmation modal state
	const [isConfirmationOpen, setIsConfirmationOpen] = useState(false)

	// Form submission handler
	const submitForm = (data) => {
		const isHTMLTagsDetected =
			checkForHTMLTags(data.street) ||
			checkForHTMLTags(data.city)

		if (isHTMLTagsDetected) {
			// Gérer l'erreur lorsque des tags HTML sont détectés
			alert('Insertion of HTML tags is forbidden.')
		} else {
			/// Format and prepare employee data
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

			// Open confirmation modal and dispatch employee data to context
			setIsConfirmationOpen(true)
			dispatch({ type: 'ADD_EMPLOYEE', employee })
		}
	}

	// JSX structure defining the SideNav component layout
	return (
		<>
			{/* Employee information form */}
			<Form onSubmit={handleSubmit(submitForm)} noValidate>
				{/* First Name and Last Name */}
				<WrapperRow>
					{/* First Name */}
					<WrapperInput>
						<label htmlFor='firstName'>
							First Name
						</label>
						<input
							{...register('firstName', {
								required: errorEmptyField,
								pattern: {
									value: /^[a-zA-ZÀ-ÿ-]+$/,
									message: 'Invalid format',
								},
							})}
							type='text'
							id='firstName'
							name='firstName'
						/>
						{errors.firstName && (
							<ErrorMessage>
								{
									errors.firstName
										.message
								}
							</ErrorMessage>
						)}
					</WrapperInput>

					{/* Last Name */}
					<WrapperInput>
						<label htmlFor='lastName'>
							Last Name
						</label>
						<input
							{...register('lastName', {
								required: errorEmptyField,
								pattern: {
									value: /^[a-zA-ZÀ-ÿ-]+$/,
									message: 'Invalid format',
								},
							})}
							type='text'
							id='lastName'
							name='lastName'
						/>
						{errors.lastName && (
							<ErrorMessage>
								{
									errors.lastName
										.message
								}
							</ErrorMessage>
						)}
					</WrapperInput>
				</WrapperRow>

				{/* Date of Birth and Start Date */}
				<WrapperRow>
					{/* Date of Birth */}
					<WrapperInput>
						<label htmlFor='birthDate'>
							Date of Birth
						</label>
						<CustomDatePicker
							control={control}
							name={'birthDate'}
							errorEmptyField={
								errorEmptyField
							}
							StyleErrorMsg={ErrorMessage}
						/>
					</WrapperInput>

					{/* Start Date */}
					<WrapperInput>
						<label htmlFor='startDate'>
							Start Date
						</label>
						<CustomDatePicker
							control={control}
							name={'startDate'}
							errorEmptyField={
								errorEmptyField
							}
							StyleErrorMsg={ErrorMessage}
							birthDate={birthDate}
						/>
					</WrapperInput>
				</WrapperRow>

				{/* Adress Section */}
				<WrapperAdress>
					<legend>Address</legend>

					{/* Street and City */}
					<WrapperRow>
						{/* Street */}
						<WrapperInput>
							<label htmlFor='street'>
								Street
							</label>
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
									{
										errors
											.street
											.message
									}
								</ErrorMessage>
							)}
						</WrapperInput>

						{/* City */}
						<WrapperInput>
							<label htmlFor='city'>
								City
							</label>
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
									{
										errors
											.city
											.message
									}
								</ErrorMessage>
							)}
						</WrapperInput>
					</WrapperRow>

					{/* State and Zip Code */}
					<WrapperRow>
						{/* State */}
						<WrapperInput>
							<label
								htmlFor='state'
								className='state-label'
							>
								State
							</label>

							{/* React Select for State dropdown */}
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

						{/* Zip Code */}
						<WrapperInput>
							<label htmlFor='zipCode'>
								Zip Code
							</label>
							<input
								{...register(
									'zipCode',
									{
										required: errorEmptyField,
										pattern: /^\d{5}-\d{4}$/i,
									},
								)}
								type='text'
								id='zipCode'
								name='zipCode'
							/>
							{errors.zipCode && (
								<ErrorMessage>
									{
										errors
											.zipCode
											.message
									}
									{errors.zipCode
										.type ===
										'pattern' && (
										<span>
											Please
											enter
											a
											valid
											ZIP
											code
											in
											the
											format
											:{' '}
											<span>
												12345-1234
											</span>{' '}
											.
										</span>
									)}
								</ErrorMessage>
							)}
						</WrapperInput>
					</WrapperRow>
				</WrapperAdress>

				{/* Department */}
				<WrapperDepartment>
					<label htmlFor='department'>
						Department
					</label>

					{/* React Select for Department dropdown */}
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

				{/* Submit Button */}
				<Button type='submit'>Save</Button>
			</Form>

			{/* Confirmation Modal */}
			{isConfirmationOpen && (
				<ConfirmationModal
					isOpen={isConfirmationOpen}
					setIsOpen={setIsConfirmationOpen}
				/>
			)}
		</>
	)
}

// Styled components
const Form = styled.form`
	margin: 32px 20px 20px;
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	justify-content: center;
`

const WrapperRow = styled.div`
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
		border: 1px solid rgb(${colors.fieldset});
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

const StyleStateSelect = {
	...BaseStyleSelect,

	container: (provided) => ({
		...provided,
		width: '100%',
		paddingLeft: '8px',
		textAlign: 'left',
	}),
}

const StyleDepartmentSelect = {
	...BaseStyleSelect,

	container: (provided) => ({
		...provided,
		width: '100%',
		paddingLeft: '8px',
		textAlign: 'left',
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
		span {
			font-weight: 500;
		}
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
