'use client'
import Image from 'next/image'
import LensLogo from '../public/lens_logo.webp'
import DarkLogo from '../public/darkLogo.webp'
import { MoonFilled, SunFilled, BarsOutlined } from '@ant-design/icons'

import './navbar.css'
import { useEffect, useState } from 'react'
import { updateMode } from '../reducer/reducer'
import { useDispatch, useSelector } from 'react-redux'
const Navbar = () => {
	const [lastScrollTop, setLastScrollTop] = useState(0)
	const [isVisible, setIsVisible] = useState(true)
	const [darkMode, setDarkMode] = useState(false)
	const [sidebar, setSidebar] = useState(false)
	const dispatch = useDispatch()
	const initialValue = useSelector((state) => state.updateMode.darkMode)

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = document.documentElement.scrollTop

			if (scrollTop > lastScrollTop) {
				setIsVisible(false)
			} else {
				setIsVisible(true)
			}

			setLastScrollTop(scrollTop)
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [lastScrollTop])

	useEffect(() => {
		const value = localStorage.getItem('darkMode')

		if (value && initialValue) {
			dispatch(updateMode(true))
		} else {
			localStorage.removeItem('darkMode')
			dispatch(updateMode(false))
		}
	}, [initialValue])

	const handleSetLocalStorage = () => {
		localStorage.setItem('darkMode', !initialValue)
		dispatch(updateMode(!initialValue))
	}

	const handleShowSidebar = () => {
		setSidebar(!sidebar)
	}

	return (
		<>
			<div
				className={`z-10 fixed top-0 left-0 w-full h-12 md:h-20 lg:h-24 bg-white flex justify-center transition-top duration-300 ${
					isVisible ? 'visible' : ''
				} ${!initialValue ? 'parent' : 'darkMode'}`}
			>
				<div className='contentParent'>
					<Image
						height={60}
						width={initialValue ? 70 : 80}
						src={initialValue ? DarkLogo : LensLogo}
					/>

					<div className='barsIconParent'>
						<BarsOutlined
							onClick={handleShowSidebar}
							style={{
								color: initialValue ? 'white' : 'black',
								fontSize: '34px',
							}}
						/>
					</div>

					{sidebar && (
						<div className='sideMenuParent'>
							<div className=' sideMenuContentParent'>
								<li>MakeMyWeb.</li>
								<li>Home</li>
								<li>Company</li>
								<li>Blogs</li>
								<li onClick={handleSetLocalStorage}>
									{!initialValue ? (
										<MoonFilled style={{ fontSize: '24px' }} />
									) : (
										<SunFilled style={{ color: 'yellow', fontSize: '24px' }} />
									)}
								</li>
							</div>
						</div>
					)}

					<div className=' navbarMenuParent'>
						<li>MakeMyWeb.</li>
						<li>Home</li>
						<li>Company</li>
						<li>Blogs</li>
						<li onClick={handleSetLocalStorage}>
							{!initialValue ? (
								<MoonFilled style={{ fontSize: '24px' }} />
							) : (
								<SunFilled style={{ color: 'yellow', fontSize: '24px' }} />
							)}
						</li>
					</div>
				</div>
			</div>
		</>
	)
}

export default Navbar
