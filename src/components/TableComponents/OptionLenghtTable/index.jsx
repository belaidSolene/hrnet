import styled from 'styled-components'
import { colors } from '../../../utils/style/colors'

export default function OptionLengthTable({ pageSize, setPageSize }) {
	const paginationOptions = [10, 20, 50, 100]

	return (
		<LengthTableWrappers>
			Show
			<Select
				value={pageSize}
				onChange={(e) => {
					setPageSize(Number(e.target.value))
				}}
			>
				{paginationOptions.map((pageSize) => (
					<option key={pageSize} value={pageSize}>
						{pageSize}
					</option>
				))}
			</Select>
			entries
		</LengthTableWrappers>
	)
}

const LengthTableWrappers = styled.div`
	display: flex;
	align-items: center;
	gap: 4px;
	font-size: 0.8rem;
`

const Select = styled.select`
	font-size: 0.8rem;
	padding: 4px;
	border-radius: 4px;
	border: 1px solid rgba(${colors.fieldset}, 0.3);
`
