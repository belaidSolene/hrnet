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
		<TableWrapper
			{...getTableProps()}
			className='display responsive-table'
		>
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

const TableWrapper = styled.tbody`
	display: inline-table;
	border-radius: 4px;
	overflow: hidden;
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
