/**
 * The 'Table' component is used to display tabular data with sorting capabilities
 * using the 'react-table' library.
 *
 * @component
 * @param {Object} props - The properties of the 'Table' component.
 * @param {Object} props.getTableProps - The properties for the table element.
 * @param {Object} props.getTableBodyProps - The properties for the table body element.
 * @param {Array} props.headerGroups - An array containing the header groups configuration.
 * @param {function} props.prepareRow - A function to prepare row data.
 * @param {Array} props.page - An array containing the page data to be displayed.
 * @returns {JSX.Element} The JSX representation of the 'Table' component.
 */

// Importing necessary dependencies for styling
import styled from 'styled-components'
import { colors } from '../../../utils/style/colors'

export default function Table({
	getTableProps,
	getTableBodyProps,
	headerGroups,
	prepareRow,
	page,
}) {
	return (
		// JSX structure defining the Table component layout
		<TableWrapper {...getTableProps()}>
			<thead>
				{headerGroups.map((headerGroup) => (
					<tr {...headerGroup.getHeaderGroupProps()}>
						{headerGroup.headers.map((column) => (
							<HeaderWrapper
								{...column.getHeaderProps(
									column.getSortByToggleProps(),
								)}
								className={
									column.isSorted
										? column.isSortedDesc
											? 'desc'
											: 'asc'
										: ''
								}
							>
								{column.render(
									'Header',
								)}
								{column.isSorted ? (
									column.isSortedDesc ? (
										<span>
											&darr;
										</span>
									) : (
										<span>
											&uarr;
										</span>
									)
								) : (
									''
								)}
							</HeaderWrapper>
						))}
					</tr>
				))}
			</thead>
			<tbody {...getTableBodyProps()}>
				{page.map((row) => {
					prepareRow(row)
					return (
						<RowWrapper {...row.getRowProps()}>
							{row.cells.map((cell) => {
								return (
									<td
										{...cell.getCellProps()}
									>
										{cell.render(
											'Cell',
										)}
									</td>
								)
							})}
						</RowWrapper>
					)
				})}
			</tbody>
		</TableWrapper>
	)
}

// Styled components
const TableWrapper = styled.tbody`
	display: inline-table;
	border-radius: 4px;
	overflow: hidden;
	width: 100%;
`

const HeaderWrapper = styled.th`
	background-color: ${colors.tertiary};
	color: #ffffff;
	text-align: center;
	padding: 20px;
	font-weight: 500;
`

const RowWrapper = styled.tr`
	&:nth-child(even) {
		background-color: rgba(${colors.primaryRGB}, 0.3);
	}

	&:hover {
		background-color: rgba(${colors.accentRGB}, 0.2);
	}

	td {
		padding: 13px 20px;
		text-align: center;
	}
`
