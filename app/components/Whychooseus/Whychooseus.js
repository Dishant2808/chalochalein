import Link from "next/link";
import styles from './Whychooseus.module.scss'
import { MdLocalTaxi } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { GiHiking } from "react-icons/gi";

const Whychooseus = () => {

    const whychooseData = [
        {
            id: 1,
            icon: <MdLocalTaxi />,
            title: 'Efficient Transport',
            description: 'Experience hassle-free transportation with our 24/7 service. Our professional drivers ensure punctuality and comfort, while our seamless booking system makes your travel effortless.',
            cta_text: 'Book Now',
            cta_link: '/dharamshala-taxi-service',
        },
        {
            id: 2,
            icon: <TbWorld />,
            title: 'Memorable Excursions',
            description: 'Embark on unforgettable journeys with our curated tours. Explore captivating destinations led by knowledgeable guides, creating memories that last a lifetime.',
            cta_text: 'Discover Tours',
            cta_link: '/himachal-tour-package',
        },
        {
            id: 3,
            icon: <GiHiking />,
            title: 'Adventurous Trekking',
            description: `Immerse yourself in nature's beauty on our thrilling treks. Our expert guides lead you through awe-inspiring trails, showcasing the wonders of the outdoors for an unforgettable adventure.`,
            cta_text: 'Start Trekking',
            cta_link: '/adventure-activiities-in-himachal',
        },
    ];

    return (
        <>
            <section className={`${styles.whychooseus_sec} common_margin`}>
                <div className="container">
                    <div className="common_heading">
                        <h4>Ride, Explore, Trek</h4>
                        <h5>Seamless Transport, Unforgettable Tours, Thrilling Treks</h5>
                        <span></span>
                    </div>
                    <div className={styles.whychooseus_sec_main}>
                        {whychooseData.map((item) => (
                            <div className={styles.whychooseus_sec_child} key={item.id}>
                                <span className={styles.whychooseus_sec_child_icon}>{item.icon}</span>
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                                <Link className={styles.whychooseus_sec_child_ancor} href={item.cta_link}>{item.cta_text}</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Whychooseus;