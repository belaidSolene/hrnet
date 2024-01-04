/**
 * The 'Pagination' component provides navigation controls for paginated data.
 * It displays information about the current range of entries being shown and
 * allows users to navigate to the previous or next page.
 *
 * @component
 * @param {Object} props - The properties of the 'Pagination' component.
 * @param {number} props.pageIndex - The current page index.
 * @param {number} props.pageSize - The number of entries per page.
 * @param {Array} props.pageOptions - An array containing available page options.
 * @param {function} props.nextPage - A function to navigate to the next page.
 * @param {function} props.previousPage - A function to navigate to the previous page.
 * @param {boolean} props.canNextPage - A boolean indicating if there is a next page.
 * @param {boolean} props.canPreviousPage - A boolean indicating if there is a previous page.
 * @param {number} props.dataLength - The total number of entries in the data set.
 * @returns {JSX.Element} The JSX representation of the 'Pagination' component.
 */

// Importing necessary dependencies for styling
import styled from 'styled-components'
import { colors } from '../../../utils/style/colors'

export default function Pagination({
	pageIndex,
	pageSize,
	pageOptions,
	nextPage,
	previousPage,
	canNextPage,
	canPreviousPage,
	dataLength,
}) {
	// JSX structure defining the Pagination component layout
	return (
		<PaginationWrapper>
			<ShowEntries>
				Showing {pageIndex * pageSize + 1} to{' '}
				{Math.min((pageIndex + 1) * pageSize, dataLength)}{' '}
				of {dataLength} entries
			</ShowEntries>

			<PaginationContainer>
				<Button
					onClick={() => previousPage()}
					disabled={!canPreviousPage}
				>
					Previous
				</Button>
				<span>
					{pageIndex + 1} / {pageOptions.length}
				</span>
				<Button
					onClick={() => nextPage()}
					disabled={!canNextPage}
				>
					Next
				</Button>
			</PaginationContainer>
		</PaginationWrapper>
	)
}

// Styled components
const PaginationWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	margin-top: 0.755em;
`

const ShowEntries = styled.p`
	font-size: 0.8rem;
`

const PaginationContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
`

const Button = styled.button`
	font-size: 0.8rem;
	padding: 0.5rem 1rem;
	border-radius: 4px;
	background-color: ${colors.tertiary};
	color: ${colors.white};
	box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);

	&:disabled {
		cursor: not-allowed;
		opacity: 0.5;
	}
`
