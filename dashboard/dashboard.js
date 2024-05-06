import MainHeading from '@/components/mainHeading/mainHeading'
import AboutUs from './aboutUs/aboutUs'
import HomeSection from './home/homeSection'
import Services from './services/services'
import TrueAi from './trueAi/trueAi'
import WhyLens from './whyLens/whyLens'
import Blog from './blogs/blogs'
import PartnerCompanies from './partnerCompanies/partnerCompanies'
import TotalCompany from './totalCompany/totalCompany'
import EnquirySection from './enquirySection/enquirySection'
import FooterOption from './footerOption/footerOption'
import Footer from './footer/footer'
const Dashboard = () => {
	return (
		<>
			<div style={{ position: 'absolute', top: '70px' }}>
				<HomeSection />
				<AboutUs />
				<Services />
				<TrueAi />
				<WhyLens />
				<Blog />
				<PartnerCompanies />
				<TotalCompany />
				<EnquirySection />
				<FooterOption />
				<Footer />
			</div>
		</>
	)
}

export default Dashboard
