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
import { colors } from '../../utils/style/colors'

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
			<Title>Current Employees</Title>

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
const Title = styled.h3`
	font-weight: 500;
	text-transform: uppercase;
`

const WrapperTable = styled.div`
	margin-top: 20px;
`
