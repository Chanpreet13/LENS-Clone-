'use client'
import './enquirySection.css'
import MapLogo from '../../public/map.webp'
import Image from 'next/image'
import { useSelector } from 'react-redux'
const EnquirySection = () => {
	const initialValue = useSelector((state) => state.updateMode.darkMode)

	return (
		<>
			<div
				className={!initialValue ? 'enuiryMainParent' : 'darkEnuiryMainParent'}
			>
				<div className='mapContentParent'>
					<h1 className='serviceHeadingText lensHeading blogHeading enquiryHeading'>
						Get in touch with us
					</h1>

					<div className='enquiryInputParent'>
						<p className='inputHeading'>Send your enquiry now!</p>
						<div className='inputParent'>
							<input placeholder='Enter email address' className='mainInput' />
							<button className='inputButton'>Request Demo</button>
						</div>
					</div>
				</div>

				<div className='mapParent'>
					<Image
						src={MapLogo}
						width={800}
						style={{ objectFit: 'none' }}
						className='mapImage'
					/>
				</div>
			</div>
		</>
	)
}

export default EnquirySection
