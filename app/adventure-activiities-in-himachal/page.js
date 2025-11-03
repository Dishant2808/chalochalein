import activitiesData from "../Data/activitiesData";
import ActivityPageCard from "../components/Cards/ActivityPageCard";
import PageTopBanner from "../components/Banners/PageTopBanner";
import styles from '../styles/pages/activities.module.scss';
import BookCabBanner from "../components/Banners/BookCabBanner";
import SEOContent from '../components/SEOContent/SEOContent';

export const metadata = {
    title: 'Adventure activity in Himachal Pradesh',
    description: 'Adventure Activity in Hiamchal Pradesh, Praglading, River Rafting, Trekking, Camping, etc.',
}

export default function Activities() {
    return (
        <>
            <PageTopBanner
                bannerImage={'/images/banners/activities-page-banner.webp'}
                title={'Explore the Wild: Trek, Glide, Camp'}
                subtitle={'Embark on Thrilling Treks, Soar through the Skies with Paragliding, and Unwind Amidst Nature with Camping.'}
                altTag={'Chalo Chalein tour and travel activities'}

            />

            <SEOContent
                title="Adventure activities in himachal pradesh	"
                description="Embark on unforgettable journeys with Chalo Chalein's diverse range of activities in Himachal Pradesh. From heart-pounding trekking adventures through the majestic landscapes of Dharamshala to soaring high above picturesque valleys with our exhilarating paragliding experiences, and immersing yourself in the tranquility of nature with our camping getaways — our activities promise unparalleled excitement and breathtaking scenery. With Chalo Chalein, your quest for thrilling exploration and outdoor escapades in Himachal Pradesh begins. Book your next adventure now and let the excitement unfold in the lap of the Himalayas."
            />

            <section className={`${styles.activities_page} common_margin`}>
                <div className="container">
                    <div className={styles.activity_card}>
                        {activitiesData && activitiesData.map((activity, index) => (
                            <div className={styles.activity_page_card} key={index} >
                                <ActivityPageCard activity={activity} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            <BookCabBanner
                title={'Explore the Outdoors with Chalo Chalein'}
                description={'Unleash the adventurer in you! Choose from exciting trekking trails, exhilarating paragliding experiences, or serene camping getaways. Your next escapade awaits – book now!'}
                CTA_text={'Book Now'}
                image={'/vectors/trekking.svg'}
            />
        </>
    )
}