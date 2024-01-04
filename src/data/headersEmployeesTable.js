/**
 * The 'headersEmployeesTable' array contains objects representing column headers for the employees table.
 *
 * Each object has properties such as 'Header' (displayed column header), 'accessor' (corresponding data property),
 * and 'sortType' (type of sorting applied to the column, e.g., 'basic').
 *
 * @type {Array}
 * @constant
 */
export const headersEmployeesTable = [
	{
		Header: 'First Name',
		accessor: 'firstName',
		sortType: 'basic',
	},
	{
		Header: 'Last Name',
		accessor: 'lastName',
		sortType: 'basic',
	},
	{
		Header: 'Start Date',
		accessor: 'startDate',
		sortType: 'basic',
	},
	{
		Header: 'Department',
		accessor: 'department',
		sortType: 'basic',
	},
	{
		Header: 'Date of Birth',
		accessor: 'birthDate',
		sortType: 'basic',
	},
	{
		Header: 'Street',
		accessor: 'street',
		sortType: 'basic',
	},
	{
		Header: 'City',
		accessor: 'city',
		sortType: 'basic',
	},
	{
		Header: 'State',
		accessor: 'state',
		sortType: 'basic',
	},
	{
		Header: 'Zip Code',
		accessor: 'zipCode',
		sortType: 'basic',
	},
]
