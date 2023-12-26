import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'
import SideNav from '../../components/SideNav'

import styled from 'styled-components'

export default function Root() {
	return (
		<div>
			<Header />

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
