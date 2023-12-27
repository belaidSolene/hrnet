import { useMemo } from 'react'

import { useEmployeeContext } from '../../app/EmployeeContext'

import {
	useTable,
	useSortBy,
	useGlobalFilter,
	usePagination,
} from 'react-table'

import { headersEmployeesTable } from '../../data/headersEmployeesTable'

import Table from '../../utils/TableTools/Table'

import styled from 'styled-components'

export default function EmployeesTable() {
	const {
		state: { employees },
	} = useEmployeeContext()

	const data = useMemo(() => employees, [employees])
	const columns = useMemo(() => headersEmployeesTable, [])

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		prepareRow,

		page,
	} = useTable(
		{
			columns,
			data,
			initialState: { pageIndex: 0, pageSize: 10 },
		},
		useGlobalFilter,
		useSortBy,
		usePagination,
	)

	return (
		<Content>
			EmployeeList
			<WrapperTable>
				<Table
					getTableProps={getTableProps}
					getTableBodyProps={getTableBodyProps}
					headerGroups={headerGroups}
					prepareRow={prepareRow}
					page={page}
				/>{' '}
			</WrapperTable>
		</Content>
	)
}

const Content = styled.main`
	margin: 0 auto;
	text-align: center;
`

const WrapperTable = styled.div`
	margin-top: 20px;
`
