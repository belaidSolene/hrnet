import styled from 'styled-components'

export default function Error() {
	return (
		<Wrapper>
			<Content>
				<Title>404 - Page Not Found</Title>
				<Text>
					The page you are looking for does not exist.
				</Text>
			</Content>
		</Wrapper>
	)
}

const Wrapper = styled.div`{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color: rgb(225, 222, 222);
}`

const Content = styled.div`{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }`

const Title = styled.h1`{
    font-size: 4rem;
    color: #1e4e11;
    margin-bottom: 10px;
  }`

const Text = styled.p`{
    font-size: 1.5rem;
    color: #333; 
  }`
