/**
 * The 'ConfirmationModal' component is a modal used to confirm the creation of a new employee.
 * It displays a success message with an icon when an employee is created.
 * This component utilizes the 'easy-peasy-modal-react' library for modal functionality.
 *
 * @component
 * @param {Object} props - The properties of the 'ConfirmationModal' component.
 * @param {boolean} props.isOpen - A boolean indicating whether the modal is open or closed.
 * @param {function} props.setIsOpen - A function to set the state and control the modal's visibility.
 * @returns {JSX.Element} The JSX representation of the 'ConfirmationModal' component.
 */

import React from 'react'
import Modal from 'easy-peasy-modal-react'

// Importing necessary dependencies for styling
import styled from 'styled-components'

const ConfirmationModal = ({ isOpen, setIsOpen }) => {
	const closeModal = () => {
		setIsOpen(false)
	}

	// JSX structure defining the ConfirmationModal component layout
	return (
		<Modal isOpen={isOpen} onClose={closeModal}>
			<ModalContent>
				<h2>Employee Created</h2>
				<p>
					<i className='fa-solid fa-people-group'></i>{' '}
					A new colleague has joined our team!
				</p>
			</ModalContent>
		</Modal>
	)
}

// Styled components
const ModalContent = styled.div`
	width: 100%;
	margin-bottom: 20px;
	background-color: white;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	h2 {
		text-align: center;
		width: 100%;
		margin-bottom: 10px;
	}

	p {
		text-align: center;
		width: 100%;
	}
`

export default ConfirmationModal
