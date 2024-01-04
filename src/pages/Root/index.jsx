/**
 * The 'Root' component represents the root layout for the application.
 * It includes a 'Header', 'SideNav', and 'Outlet' for rendering nested routes.
 *
 * @component
 * @returns {JSX.Element} The JSX representation of the 'Root' component.
 */

import { Outlet } from 'react-router-dom'

// Importing necessary components and styling dependencies
import Header from '../../components/Header'
import SideNav from '../../components/SideNav'

import styled from 'styled-components'

export default function Root() {
	// JSX structure defining the Root component layout
	return (
		<div>
			{/* Header component at the top of the layout */}
			<Header />

			{/* Main content area with SideNav and nested Outlet for rendering nested routes */}
			<Content>
				<SideNav />
				<Outlet />
			</Content>
		</div>
	)
}

const Content = styled.div`
	display: flex;
`
