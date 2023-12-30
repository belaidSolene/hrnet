import styled from 'styled-components'
import { colors } from '../../utils/style/colors'
function Modal({ isOpen, onClose, children, style }) {
	if (!isOpen) {
		return null
	}
	const handleClickOutside = (e) => {
		if (e.target === e.currentTarget) {
			onClose()
		}
	}

	const ModalContainer = styled(style)`
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		overflow: hidden;
		z-index: 101;
		background-color: white;
		padding: 20px;
	`
	const ModalBg = styled.div`
		position: fixed;
		z-index: 100;
		left: 0;
		top: 0;
		height: 100%;
		width: 100%;
		overflow: auto;
		background-color: rgba(${colors.fieldset}, 0.5);
	`

	const CloseButton = styled.button`
		position: absolute;
		top: 0;
		right: 0;
		margin: 15px;
	`

	return (
		<ModalBg onClick={handleClickOutside}>
			<ModalContainer>
				<CloseButton onClick={onClose}>X</CloseButton>
				{children}
			</ModalContainer>
		</ModalBg>
	)
}

export default function ConfirmationModal({ isModalOpen, setModalOpen }) {
	const closeModal = () => {
		setModalOpen(false)
	}

	return (
		<Modal isOpen={isModalOpen} onClose={closeModal} style={MyModal}>
			<ModalContent>
				<h2>Employee Created</h2>
				<p>
					<i class='fa-solid fa-people-group'></i> A
					new colleague has joined our team!
				</p>
			</ModalContent>
		</Modal>
	)
}

const MyModal = styled.div`
	width: 400px;
	height: 200px;
	border-radius: 7px;
`
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
