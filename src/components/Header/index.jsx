import logo from '../../assets/logo.png'

import styled from 'styled-components'

export default function Header() {
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

const Wrapper = styled.header`
	background-color: #fdfdfd;
	border-bottom: 1px solid rgb(203, 202, 202);

	height: 65px;
	display: flex;
	align-items: center;
	padding: 0 0 0 25px;
	gap: 40px;
`

const WrapperLogo = styled.div`
	display: flex;
	align-items: center;
	gap: 15px;
`

const LogoTitle = styled.h1`
	font-size: 1rem;
	font-family: 'Montserrat', sans-serif;
	font-weight: 500;
	color: #647410;
	margin: 0;
`

const ProjectName = styled.h2`
	margin: 0 0 0 20px;
	font-size: 2rem;
	font-weight: 500;
	color: rgb(0, 0, 0);
`

const Logo = styled.img`
	width: 40px;
	height: 40px;
`
