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
