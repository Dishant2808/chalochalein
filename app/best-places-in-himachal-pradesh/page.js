import destinationsData from "../Data/destinationsData";
import PageTopBanner from "../components/Banners/PageTopBanner";
import DestinationPageCard from "../components/Cards/DestinationPageCard";
import styles from '../styles/pages/destination.module.scss';
import SEOContent from '../components/SEOContent/SEOContent';

export const metadata = {
    title: 'Top Places To see In Himachal Pradesh | Explore The Best Places In Himachal Pradesh',
    description: 'Explore The Top Destination Places in Himachal Pradesh.  One of the top places to see in Himachal Pradesh, Kullu, Khajjiar, Dalhousie, Palampur.',
}

export default function Destinations() {
    return (
        <>
            <PageTopBanner
                bannerImage={'/images/banners/destination-page-banner.webp'}
                title={'Destinations'}
                subtitle={'Your Gateway to Adventure'}
                altTag={'Chalo Chalein tour and travel sightseeing'}
            />

            <SEOContent
                title="Explore himachal with chalo chalein"
                description={`Experience the mesmerizing beauty of the Himalayas with Chalo Chalein, your ultimate travel partner for an unforgettable journey through Himachal Pradesh. Our newly crafted destination page showcases the quintessential places to visit in Himachal Pradesh, offering travelers a glimpse of serene landscapes, vibrant culture, and exhilarating adventures. With Chalo Chalein, explore Himachal Pradesh's snow-capped peaks, lush valleys, and picturesque hill stations that promise a retreat from the hustle and bustle of daily life. From the bustling markets of Shimla to the tranquil monasteries of Dharamshala, our curated tours ensure you soak in the essence of each destination with comfort and ease. Join us at Chalo Chalein to embark on an enchanting voyage through the heart of the Himalayas, where every corner turned unfolds a new panoramic delight.`}
            />

            <section className={`${styles.destinations_page} common_margin`}>
                <div className="container-sm">
                    <div className={styles.destinations_cards}>
                        {destinationsData && destinationsData.map((destination, index) => (
                            <div className={styles.destinations_page_card} key={index} >
                                <DestinationPageCard destination={destination} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>

    )
}
