import ToursPageCard from "../components/Cards/ToursPageCard";
import styles from '../styles/pages/tours.module.scss';
import toursData from "../Data/toursData";
import PageTopBanner from "../components/Banners/PageTopBanner";
import SEOContent from '../components/SEOContent/SEOContent'

export const metadata = {
    title: 'Dharamshala Taxi Tour Package with chalo chalein Himachal',
    description: ' Dharamshala Taxi Tour Package | Book Dharamshala Taxi tour Package at Best Price.',
    keywords: ['Hiamchal Pradesh Tour Package ']
}

export default function HimachalToursPackages() {
    return (
        <>
            <PageTopBanner
                bannerImage={'/images/banners/tours-page-banner.webp'}
                title={'Tours'}
                subtitle={'Explore Our Exciting Offerings'}
                altTag={'Chalo Chalein himachal tour packages'}
            />
            <SEOContent
                title="Dharamshala tour Package with chalo chalein"
                description={`There are many places in Himachal where you can visit but one special place among them is Dhamashala which has a rich history that includes connections to ancient Hindu kingdoms, the British Raj, and the Tibetan people. Dharamshala Town is situated in the Kangra Valley in the shadow of the Dhauladhar Range of the Himalayas at an altitude of 1,457 meters(4780 ft.) So if you visited or planning to visit Dharamshala and want to explore Dharamshala there are many places which you can visit like Adventurous activities (Kareri Lake, Bhagsu Waterfall, Triund Trek,) Spiritual pilgrimage sites (Shaktipeeth Mata Jawala Ji Temple, Baijnath Temple, Gyuto Tantric Monastery Temple, Baglamukhi Devi Darshan, Jwalaji Devi Darshan)
And other sites (Dal Lake, McleodGanj, Kangra Fort, Tea Garden, Dharamkot) etc. 

Chalo Chalein Dharamshala Taxi Service is here to fulfill your travel dream in Dharamshala by providing taxi service in Dharamshala at a reasonable price. Our local Driver knows the hidden gems of Dharamshala and they will help you find a place that most tourists miss. Whether you want to visit bustling markets, serene monasteries, or beautiful sceneries, our knowledgeable drivers will guide you to the best spot. With our comfortable and reliable taxi, You can enjoy a hassle-free journey and spend most of your time in the hills of Dharamshala. Book your ride with chalo chalein Taxi service in Dharamshala and experience  the magic of Dharamshala like never before!`}
            />

            <section className={`${styles.tours_page} common_margin`}>
                <div className="container">
                    <div className={styles.tours_page_cards}>
                        {toursData && toursData.map((tour, index) => (
                            <div className={styles.tours_page_card} key={index}>
                                {/* <DestinationPageCard destination={tour} /> */}
                                <ToursPageCard tour={tour} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
