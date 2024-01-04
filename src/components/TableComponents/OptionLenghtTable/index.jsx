/**
 * The 'OptionLengthTable' component allows users to select the number of entries
 * to display per page in a table. It provides a dropdown menu with predefined
 * pagination options.
 *
 * @component
 * @param {Object} props - The properties of the 'OptionLengthTable' component.
 * @param {number} props.pageSize - The current number of entries per page.
 * @param {function} props.setPageSize - A function to set the number of entries per page.
 * @returns {JSX.Element} The JSX representation of the 'OptionLengthTable' component.
 */

// Importing necessary dependencies for styling
import styled from 'styled-components'
import { colors } from '../../../utils/style/colors'

export default function OptionLengthTable({ pageSize, setPageSize }) {
	const paginationOptions = [10, 20, 50, 100]

	// JSX structure defining the OptionLengthTable component layout
	return (
		<LengthTableWrappers>
			Show
			<Select
				value={pageSize}
				onChange={(e) => {
					setPageSize(Number(e.target.value))
				}}
			>
				{paginationOptions.map((pageSize) => (
					<option key={pageSize} value={pageSize}>
						{pageSize}
					</option>
				))}
			</Select>
			entries
		</LengthTableWrappers>
	)
}

// Styled components
const LengthTableWrappers = styled.div`
	display: flex;
	align-items: center;
	gap: 4px;
	font-size: 0.8rem;
`

const Select = styled.select`
	font-size: 0.8rem;
	padding: 4px;
	border-radius: 4px;
	border: 1px solid rgba(${colors.fieldset}, 0.3);
`
