'use client'
import { blogDataForHomepage, newLastBlogData } from '@/constant/constant'
import './blog.css'
import MiniHeading from '@/components/miniHeading/miniHeading'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const Blog = () => {
	const initialValue = useSelector((state) => state.updateMode.darkMode)

	const [mouseOver, setMouseOver] = useState()

	return (
		<>
			<div
				className={`serviceParent ${
					!initialValue ? 'blogParent' : 'darkBlogParent'
				}`}
			>
				<MiniHeading heading={'OUR BLOGS'} />
				<h1 className='serviceHeadingText lensHeading blogHeading'>
					Inhouse Mindscape
				</h1>

				<div className='blogsCardsParent'>
					{blogDataForHomepage.map((value, index) => {
						return (
							<div
								className={
									!initialValue
										? 'singleBlogCardParent'
										: 'darkSingleBlogCardParent'
								}
								style={{
									backgroundImage:
										mouseOver !== '' && mouseOver == index && !initialValue
											? `linear-gradient(to top, ${value.hoverGradientColor}, #ffffff)`
											: '',
								}}
								onMouseEnter={() => setMouseOver(value.id)}
								onMouseLeave={() => setMouseOver('')}
							>
								<div
									className={
										!initialValue
											? 'mainContentParent'
											: 'darkMainContentParent'
									}
								>
									<p className='blogDate'>{value.date}</p>
									<p className='blogTitle'>{value.title}</p>

									<div
										className={
											!initialValue ? 'blogDescription' : 'darkBlogDescription'
										}
										style={{
											backgroundColor: value.color,
											padding: '20px 35px',
										}}
									>
										{value.description}
									</div>
								</div>
							</div>
						)
					})}
				</div>

				<div
					className={
						!initialValue ? 'blogsCardsParent' : 'darkBlogsCardsParent'
					}
				>
					{newLastBlogData.map((value, index) => {
						return (
							<div
								className={`singleBlogCardParent ${
									!initialValue
										? 'singleLastBlogCardParent'
										: 'darkSingleLastBlogCardParent'
								}`}
								style={{
									backgroundImage:
										mouseOver !== '' && mouseOver == index + 2 && !initialValue
											? `linear-gradient(to top, ${value.hoverGradientColor}, #ffffff)`
											: ' ',
								}}
								onMouseEnter={() => setMouseOver(value.id)}
								onMouseLeave={() => setMouseOver('')}
							>
								<div className='mainContentParent'>
									<p className='blogDate'>{value.date}</p>
									<p className='blogTitle'>{value.title}</p>

									<div
										className={
											!initialValue ? 'blogDescription' : 'darkBlogDescription'
										}
										style={{
											backgroundColor: value.color,
											padding: '20px 35px',
										}}
									>
										{value.description}
									</div>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</>
	)
}
export default Blog
