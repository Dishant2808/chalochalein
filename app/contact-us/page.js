
import PageTopBanner from '../components/Banners/PageTopBanner'
import ContactUsComponent from '../components/ContactUsComponent/ContactUsComponent'
import SEOContent from '../components/SEOContent/SEOContent';

export const metadata = {
    title: 'Check Taxi Prices in Dharamshala | Contact Us for Tour Packages',
    description: 'Looking for taxi prices in Dharamshala? Contact us to know about tour packages prices, adventure activities price, and sightseeing in Himachal Pradesh. Send your query now and explore the beauty of Himachal with us.',
}

const page = () => {
    return (
        <>
            <PageTopBanner
                bannerImage={'/images/banners/contact-page-banner.webp'}
                title={'Contact Us'}
                subtitle={'Contact for Queries, Ready to Assist'}
                altTag={'Contact Chalo Chalein tour and travel'}
            />

            <SEOContent
                title="Check dharamshala taxi rates"
                description={`Contact Chalo Chalein today for the best taxi service in Dharamshala! We take pride in providing unparalleled transportation solutions, ensuring a seamless and comfortable journey for our valued customers. Whether you're arriving at the airport, planning a tour, or need reliable local transportation, our professional drivers and modern fleet are at your service. Reach out to us through the contact information below to experience the epitome of convenience and excellence in taxi services in the enchanting city of Dharamshala. Your satisfaction is our priority, and we look forward to being your preferred choice for transportation in Himachal Pradesh`}
            />

            <ContactUsComponent />
        </>
    )
}

export default page
