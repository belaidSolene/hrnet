/**
 * The 'Error' component displays a 404 - Page Not Found error message.
 * It includes a title and a descriptive text.
 *
 * @component
 * @returns {JSX.Element} The JSX representation of the 'Error' component.
 */

import { Link } from 'react-router-dom'

// Importing necessary dependencies for styling
import styled from 'styled-components'
import { colors } from '../../utils/style/colors'

export default function Error() {
	// JSX structure defining the Error component layout
	return (
		<Wrapper>
			<Content>
				<Title>404 - Page Not Found</Title>
				<Subtitle>
					The page you are looking for does not exist.
				</Subtitle>
				<StyleLink to='/'>Back to Homepage</StyleLink>
			</Content>
		</Wrapper>
	)
}

// Styled components
const Wrapper = styled.div`
	flex: 1;
	text-align: center;
	height: 100vh;
	display: flex;
	justify-content: center;
`

const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
`

const Title = styled.h1`
	font-size: 5rem;
	font-weight: 500;
	color: ${colors.tertiary};
`

const Subtitle = styled.p`
	margin: 2rem 0;
	font-size: 2rem;
	color: ${colors.primary};
	font-weight: 500;
`

const StyleLink = styled(Link)`
	margin-top: 2rem;
	font-size: 1.2rem;
	font-weight: bold;
	text-decoration: underline;
	color: ${colors.tertiary};
`
