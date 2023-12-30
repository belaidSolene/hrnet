import { useMemo } from 'react'

import { useEmployeeContext } from '../../app/EmployeeContext'

import {
	useTable,
	useSortBy,
	useGlobalFilter,
	usePagination,
} from 'react-table'

import { headersEmployeesTable } from '../../data/headersEmployeesTable'

import SearchBar from '../../components/TableComponents/SearchBar'
import OptionLengthTable from '../../components/TableComponents/OptionLenghtTable'
import Table from '../../components/TableComponents/Table'
import Pagination from '../../components/TableComponents/Pagination'

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
		pageOptions,
		nextPage,
		previousPage,
		canNextPage,
		canPreviousPage,
		state,
		setPageSize,
		setGlobalFilter,
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

	const { globalFilter, pageIndex, pageSize } = state

	return (
		<Content>
			<Title>Current Employees</Title>

			<WrapperTable>
				<OptionAndSearch>
					<SearchBar
						globalFilter={globalFilter}
						setGlobalFilter={setGlobalFilter}
					/>

					<OptionLengthTable
						pageSize={pageSize}
						setPageSize={setPageSize}
					/>
				</OptionAndSearch>

				<Table
					getTableProps={getTableProps}
					getTableBodyProps={getTableBodyProps}
					headerGroups={headerGroups}
					prepareRow={prepareRow}
					page={page}
				/>
				<Pagination
					pageIndex={pageIndex}
					pageSize={pageSize}
					pageOptions={pageOptions}
					nextPage={nextPage}
					previousPage={previousPage}
					canNextPage={canNextPage}
					canPreviousPage={canPreviousPage}
					dataLength={data.length}
				/>
			</WrapperTable>
		</Content>
	)
}

const Content = styled.main`
	margin: 0 auto;
	text-align: center;
	flex: 1;
`
const Title = styled.h3`
	font-weight: 500;
	text-transform: uppercase;
	margin: 20px 0 0;
`

const OptionAndSearch = styled.div`
	display: flex;
	flex-direction: row-reverse;
	justify-content: space-between;
	align-items: center;
	margin: 0 0 12px;
`

const WrapperTable = styled.div`
	margin: 10px 20px 20px;
`
