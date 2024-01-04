/**
 * The 'SideNav' component represents a side navigation bar providing links to different sections.
 * It includes links to add an employee and view the employees' list, styled using styled-components.
 *
 * @component
 */

import { NavLink } from 'react-router-dom'

// Importing necessary dependencies for styling
import styled from 'styled-components'

export default function SideNav() {
	// JSX structure defining the SideNav component layout
	return (
		<StyleAside>
			<nav>
				<StyledNavLink to='/'>
					<i className='fa-solid fa-plus'></i>
					<span>Add an Employee</span>
				</StyledNavLink>

				<StyledNavLink to='/employees'>
					<i className='fa-solid fa-list-ul'></i>
					<span>Employees' List</span>
				</StyledNavLink>
			</nav>
		</StyleAside>
	)
}

// Styled components
const StyleAside = styled.aside`
	padding: 0 20px;
	box-shadow: 4px 0px 2px rgba(0, 0, 0, 0.25);
	z-index: 1;
`

const StyledNavLink = styled(NavLink)`
	display: block;
	font-weight: 100;
	margin-top: 20px;
	width: fit-content;

	span {
		margin-left: 10px;
	}

	&.active {
		font-weight: 500;
		border-bottom: 1px solid #98ac3b;

		i {
			color: #98ac3b;
		}
	}
`
