import './footerOption.css'
import Logo from '../../public/lens_logo.webp'
import DarkLogo from '../../public/darkLogo.webp'

import Image from 'next/image'
import { useSelector } from 'react-redux'
import {
	FacebookFilled,
	InstagramOutlined,
	LinkedinFilled,
	DiscordOutlined,
	XOutlined,
} from '@ant-design/icons'

const FooterOption = () => {
	const initialValue = useSelector((state) => state.updateMode.darkMode)

	return (
		<>
			<div
				className={
					!initialValue ? 'footerOptionParent' : 'darkFooterOptionParent'
				}
			>
				<div className='logoParent'>
					<div className='logoWithText'>
						<Image src={!initialValue ? Logo : DarkLogo} width={70} />
						<p className='text'>Tomorrow's Vision, Today!</p>
					</div>

					<div className='socialLogoParent'>
						<FacebookFilled
							style={{
								fontSize: '24px',
								color: initialValue ? 'white' : 'black',
							}}
						/>
						<InstagramOutlined
							style={{
								fontSize: '24px',
								color: initialValue ? 'white' : 'black',
							}}
						/>
						<LinkedinFilled
							style={{
								fontSize: '24px',
								color: initialValue ? 'white' : 'black',
							}}
						/>
						<DiscordOutlined
							style={{
								fontSize: '24px',
								color: initialValue ? 'white' : 'black',
							}}
						/>
						<XOutlined
							style={{
								fontSize: '24px',
								color: initialValue ? 'white' : 'black',
							}}
						/>
					</div>
				</div>

				<div className='sitemapParent'>
					<p className='heading'>SITEMAP</p>

					<div className='optionParent'>
						<p>MakeMyWeb</p>
						<p>Services</p>
						<p>Products</p>
						<p>Blogs</p>
						<p>Life at LENS</p>
					</div>
				</div>

				<div className='sitemapParent'>
					<p className='heading'>CONNECT</p>

					<div className='optionParent'>
						<p>+1-517-9300-792</p>
						<p>+91-9990-736-796</p>
						<p>solutions@lenscorp.ai</p>
					</div>
				</div>
			</div>
		</>
	)
}
export default FooterOption
