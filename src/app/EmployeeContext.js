import React, { createContext, useContext, useReducer } from 'react'

import { employeesList } from '../data/employeeList'

// Create the context
const EmployeeContext = createContext()

// Initialize the state with the initial list of employees
const initialState = {
	employees: employeesList,
	// ... other state fields related to employees
}

// Define the reducer function to handle state changes
const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD_EMPLOYEE':
			return {
				...state,
				employees: [...state.employees, action.employee],
			}
		// ... other action types as needed
		default:
			return state
	}
}

// Create the EmployeeProvider component using the context and reducer
export const EmployeeProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)

	return (
		<EmployeeContext.Provider value={{ state, dispatch }}>
			{children}
		</EmployeeContext.Provider>
	)
}

// Create a custom hook to use the EmployeeContext in components
export const useEmployeeContext = () => {
	return useContext(EmployeeContext)
}
