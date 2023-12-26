import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Index from '../pages/Index'
import EmployeeList from '../pages/EmployeeList'

import './App.css'

// Creating a browser router with defined routes and associated components
const router = createBrowserRouter([
	{
		path: '/',
		element: <Index />,
	},
	{
		path: '/employees',
		element: <EmployeeList />,
	},
])

export default function App() {
	return <RouterProvider router={router} />
}
