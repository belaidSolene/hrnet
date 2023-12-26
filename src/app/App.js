import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Root from '../pages/Root'
import Index from '../pages/Index'
import EmployeeList from '../pages/EmployeeList'
import Error from '../pages/Error'

// Creating a browser router with defined routes and associated components
const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				index: true,
				element: <Index />,
			},
			{
				path: '/employees',
				element: <EmployeeList />,
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
