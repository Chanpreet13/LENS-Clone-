import { useSelector } from 'react-redux'
import './footer.css'
const Footer = () => {
	const initialValue = useSelector((state) => state.updateMode.darkMode)

	return (
		<>
			<div className={!initialValue ? 'footerParent' : 'darkFooterParent'}>
				<p className='heading'>
					2023 <span style={{ color: 'white' }}> LENS, Inc. </span>All rights
					reserved.
				</p>
				<div className='keypointsParent'>
					<p>Code of conduct</p>
					<p>Sustainability Goals</p>
				</div>
			</div>
		</>
	)
}
export default Footer
