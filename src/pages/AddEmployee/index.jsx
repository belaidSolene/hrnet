/**
 * The 'AddEmployee' component is the homepage and provides a form to add a new employee.
 * It includes a title, subtitle with information, and the 'AddEmployeeForm'.
 *
 * @component
 * @returns {JSX.Element} The JSX representation of the 'AddEmployee' component.
 */

import AddEmployeeForm from '../../features/AddEmployeeForm'

// Importing necessary dependencies for styling
import styled from 'styled-components'
import { colors } from '../../utils/style/colors'

export default function AddEmployee() {
	// JSX structure defining the AddEmployee component layout
	return (
		<Background>
			<Content>
				<Title>Add an employee</Title>
				<Subtitle>
					<i className='fa-solid fa-circle-info'></i>
					<span>
						Please provide the following details
						to add a new employee.
					</span>
				</Subtitle>
				<AddEmployeeForm />
			</Content>
		</Background>
	)
}

// Styled components
const Background = styled.main`
	background-color: ${colors.primary};
	padding: 4rem;
`

const Content = styled.section`
	width: 60%;
	padding: 32px;
	margin: 0 auto;
	border-radius: 8px;
	background-color: ${colors.white};
	box-shadow: 4px 8px 8px rgba(0, 0, 0, 0.35);
`

const Title = styled.h3`
	font-weight: 500;
	text-transform: uppercase;
`

const Subtitle = styled.h4`
	text-align: left;
	margin-top: 1rem;

	i {
		color: ${colors.error};
		font-size: 18px;
	}

	span {
		margin-left: 0.5rem;
	}
`
