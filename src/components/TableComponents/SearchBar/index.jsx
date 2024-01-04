/**
 * The 'SearchBar' component is used to input and apply a global search filter
 * for tabular data. It provides an input field and a search icon to filter
 * the displayed data based on the entered search query.
 *
 * @component
 * @param {Object} props - The properties of the 'SearchBar' component.
 * @param {string} props.globalFilter - The current global search filter value.
 * @param {function} props.setGlobalFilter - A function to set the global search filter value.
 * @returns {JSX.Element} The JSX representation of the 'SearchBar' component.
 */

// Importing necessary dependencies for styling
import styled from 'styled-components'
import { colors } from '../../../utils/style/colors'

export default function SearchBar({ globalFilter, setGlobalFilter }) {
	// JSX structure defining the SearchBar component layout
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
				<i className='fa-solid fa-magnifying-glass'></i>
			</WrapperSearch>
		</SearchBarWrapper>
	)
}

// Styled components
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
		border: 2px solid ${colors.accent};
	}

	&:hover {
		border: 2px solid rgba(${colors.accentRGB}, 0.5);
	}
`

const Input = styled.input`
	border: none;
	margin-right: 8px;

	&:focus {
		outline: none;
	}
`
