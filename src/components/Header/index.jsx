/**
 * The 'Header' component represents the header section of the application.
 * It includes the logo, project name, and additional styling using styled-components.
 *
 * @component
 */

import logo from '../../assets/logo.png'

// Importing necessary dependencies for styling
import styled from 'styled-components'
import { colors } from '../../utils/style/colors'

export default function Header() {
	// JSX structure defining the Header component layout
	return (
		<Wrapper>
			<WrapperLogo>
				<Logo src={logo} alt='Wealth Health Logo' />
				<LogoTitle> Wealth Health</LogoTitle>
			</WrapperLogo>

			<ProjectName>HRnet</ProjectName>
		</Wrapper>
	)
}

// Styled components
const Wrapper = styled.header`
	border-bottom: 2px solid rgb(${colors.borderHeader});

	height: 65px;
	display: flex;
	align-items: center;
	padding-left: 25px;
	gap: 60px;
`

const WrapperLogo = styled.div`
	display: flex;
	align-items: center;
	gap: 15px;
`

const Logo = styled.img`
	width: 40px;
	height: 40px;
`

const LogoTitle = styled.h1`
	font-size: 1rem;
	font-weight: 500;
	text-transform: uppercase;
	letter-spacing: 1px;
	color: ${colors.secondary};
`

const ProjectName = styled.h2`
	font-size: 2rem;
	font-weight: 700;
`
