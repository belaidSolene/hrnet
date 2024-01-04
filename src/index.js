import React from 'react'
import ReactDOM from 'react-dom/client'

import { EmployeeProvider } from './app/EmployeeContext'

// Import the default styles for the application
import App from './app/App'

// Import the default styles for the application
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<EmployeeProvider>
			<App />
		</EmployeeProvider>
	</React.StrictMode>,
)
