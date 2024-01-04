/**
 * The 'EmployeeContext' is a context created to manage the state and actions related to employee data.
 * It provides a provider component ('EmployeeProvider') to wrap components that need access to the employee context.
 * The context includes an initial state with a list of employees and a reducer function to handle state changes.
 * The 'useEmployeeContext' hook is created to easily access the context values in components.
 *
 * @example
 * // To use in a component:
 * const { state, dispatch } = useEmployeeContext();
 * // Access the state and dispatch functions related to employees.
 *
 * @component
 */

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

/**
 * The 'EmployeeProvider' component is a provider that wraps components requiring access to the employee context.
 * It uses the 'EmployeeContext' and 'useReducer' to manage the state and actions related to employees.
 *
 * @param {Object} props - The properties passed to the 'EmployeeProvider'.
 * @param {ReactNode} props.children - The child components to be wrapped by the 'EmployeeProvider'.
 * @returns {ReactNode} The wrapped child components with access to the employee context.
 */
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
