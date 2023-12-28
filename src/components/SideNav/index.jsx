import { NavLink } from 'react-router-dom'

import styled from 'styled-components'

export default function SideNav() {
	return (
		<StyleAside>
			<nav>
				<StyledNavLink to='/'>
					<i class='fa-solid fa-plus'></i>
					<span>Add an Employee</span>
				</StyledNavLink>

				<StyledNavLink to='/employees'>
					<i class='fa-solid fa-list-ul'></i>
					<span>Employees' List</span>
				</StyledNavLink>
			</nav>
		</StyleAside>
	)
}

const StyleAside = styled.aside`
	padding: 0 20px;
	box-shadow: 4px 0px 2px rgba(0, 0, 0, 0.25);
	z-index: 1;
`

const StyledNavLink = styled(NavLink)`
	display: block;
	font-weight: 100;
	margin-top: 20px;

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
