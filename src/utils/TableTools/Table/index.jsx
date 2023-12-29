import React from 'react'

export default function Table({
	getTableProps,
	getTableBodyProps,
	headerGroups,
	prepareRow,
	page,
}) {
	return (
		<table {...getTableProps()}>
			<thead>
				{headerGroups.map((headerGroup) => (
					<tr {...headerGroup.getHeaderGroupProps()}>
						{headerGroup.headers.map((column) => (
							<th
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
							</th>
						))}
					</tr>
				))}
			</thead>

			<tbody {...getTableBodyProps()}>
				{page.map((row) => {
					prepareRow(row)
					return (
						<tr {...row.getRowProps()}>
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
						</tr>
					)
				})}
			</tbody>
		</table>
	)
}
