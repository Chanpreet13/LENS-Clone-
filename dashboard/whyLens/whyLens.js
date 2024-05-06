'use client'
import { whyLensCard } from '@/constant/constant'
import './whyLens.css'
import MiniHeading from '@/components/miniHeading/miniHeading'
import { useState } from 'react'
import Image from 'next/image'
import Vision from '../vision/vision'
import { useSelector } from 'react-redux'
import { CheckOutlined } from '@ant-design/icons'
const WhyLens = () => {
	const initialValue = useSelector((state) => state.updateMode.darkMode)

	const [mouseOver, setMouseOver] = useState()

	return (
		<>
			<div style={{ width: '100%', height: 'auto', backgroundColor: 'black' }}>
				<div
					className={`serviceParent ${
						!initialValue ? 'whyLensMainParent' : 'darkWhyLensMainParent'
					}  `}
				>
					<MiniHeading heading={'WHY CHOOSE LENS'} />
					<h1 className='serviceHeadingText lensHeading'>
						AI-driven solutions backed by science
					</h1>

					<p className='lensDescription'>
						Every piece of AI technology shipped from LENS is thoroughly
						benchmarked via rigorous evaluations. With a global network of
						experts and academicians, we guarantee the most accurate and robust
						solutions in the market.
					</p>

					<div className='checkpointsParent'>
						<div className='left'>
							<li>
								<CheckOutlined /> State-of-the-art solutions
							</li>
							<li>
								{' '}
								<CheckOutlined /> Fast & Efficient
							</li>
							<li>
								{' '}
								<CheckOutlined /> No extra computation fee
							</li>
							<li>
								{' '}
								<CheckOutlined /> No licensing fee
							</li>
						</div>

						<div className='right'>
							<li>
								{' '}
								<CheckOutlined /> Lifetime support & upgrades
							</li>
							<li>
								{' '}
								<CheckOutlined /> Plug-and-Play
							</li>
							<li>
								{' '}
								<CheckOutlined /> 24x7 Progress Monitoring
							</li>
							<li>
								{' '}
								<CheckOutlined /> Incremental Updates
							</li>
						</div>
					</div>

					<div className='serviceCardParent whyLensCardParent'>
						{whyLensCard.map((value, index) => {
							return (
								<div
									className='borderDiv whyLensBorderDiv'
									style={{
										border:
											mouseOver !== '' && mouseOver == index
												? `1px solid ${value.color}`
												: ' ',
									}}
								>
									<div
										key={index}
										className={`cardContentParent ${
											!initialValue
												? 'whyLensCardContentParent'
												: 'darkWhyLensCardContentParent'
										} `}
										style={{
											backgroundImage:
												mouseOver !== '' && mouseOver == index
													? `linear-gradient(to right, ${value.hoverGradientColor}, #ffffff)`
													: ' ',
										}}
										onMouseEnter={() => setMouseOver(value.id)}
										onMouseLeave={() => setMouseOver('')}
									>
										<div className='headingParent'>
											<h1 className='headingNumber'>
												<span
													className='highlightNumber'
													style={{
														color:
															mouseOver !== '' && mouseOver == index
																? value.color
																: ' ',
													}}
												>
													{value.number}
												</span>
												<p className='whyLensTitle'>{value.title}</p>
											</h1>
										</div>

										<div className='whyLensCardImageParent'>
											<Image
												width={value.imagewidth}
												src={value.image}
												className='whyLensCardImage'
												style={{
													display: `${
														mouseOver !== '' && mouseOver == index
															? 'block'
															: 'none'
													}`,
												}}
											/>
										</div>
										<div className='description whyLensCardDescription'>
											{value.description}
										</div>
									</div>
								</div>
							)
						})}
					</div>
					<Vision />
				</div>
			</div>
		</>
	)
}

export default WhyLens
