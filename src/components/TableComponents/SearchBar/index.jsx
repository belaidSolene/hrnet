import styled from 'styled-components'
import { colors } from '../../../utils/style/colors'

export default function SearchBar({ globalFilter, setGlobalFilter }) {
	return (
		<SearchBarWrapper>
			Search
			<WrapperSearch>
				<Input
					type='text'
					value={globalFilter || ''}
					onChange={(e) =>
						setGlobalFilter(e.target.value)
					}
				/>
				<i class='fa-solid fa-magnifying-glass'></i>
			</WrapperSearch>
		</SearchBarWrapper>
	)
}

const SearchBarWrapper = styled.div`
	display: flex;
	gap: 10px;
	align-items: center;
	justify-content: space-between;
`

const WrapperSearch = styled.div`
	border-radius: 4px;
	border: 1px solid rgba(${colors.fieldset}, 0.3);
	padding: 4px;

	&:focus-within {
		border: 1px solid ${colors.accent};
	}
`

const Input = styled.input`
	border: none;
	margin-right: 8px;

	&:focus {
		outline: none;
	}
`
