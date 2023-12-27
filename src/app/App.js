import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Root from '../pages/Root'
import AddEmployee from '../pages/AddEmployee'
import EmployeesTable from '../pages/EmployeesTable'
import Error from '../pages/Error'

// Creating a browser router with defined routes and associated components
const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				index: true,
				element: <AddEmployee />,
			},
			{
				path: '/employees',
				element: <EmployeesTable />,
			},
			{
				path: '*',
				element: <Error />,
			},
		],
	},
])

export default function App() {
	return <RouterProvider router={router} />
}
