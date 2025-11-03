import Image from "next/image";
import Link from "next/link";
import styles from './Taxis.module.scss';
import { FaArrowRight } from "react-icons/fa6";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

const MainTaxis = () => {

    const taxisData = [
        {
            id: 1,
            taxi_image: '/images/taxi/innova.png',
            taxi_name: 'Innova',
            description: 'Spacious and comfortable SUV, perfect for families or groups, seating up to 7 passengers.',
            cta_link: '',
        },
        {
            id: 2,
            taxi_image: '/images/taxi/tempo-traveller.png',
            taxi_name: 'Tempo Traveller',
            description: 'Large and versatile, ideal for group travel, accommodating up to 12 passengers comfortably.',
            cta_link: '',
        },
        {
            id: 3,
            taxi_image: '/images/taxi/swift-desire.png',
            taxi_name: 'Swift Desire',
            description: `Compact and efficient sedan, great for small groups or solo travelers, with seating for up to 4 passengers.`,
            cta_link: '',
        },
        {
            id: 4,
            taxi_image: '/images/taxi/alto.png',
            taxi_name: 'Alto',
            description: `Economical and compact, suitable for individuals or couples, seating up to 4 passengers comfortably.`,
            cta_link: '',
        },
    ];

    return (
        <>
            <section className={`${styles.main_taxis_sec} `}>
                <div className="container">
                    <div className="d_flex justify_content_between align_items_center common_parent_div">
                        <div className="common_heading">
                            <h4>Our Fleet of Reliable Taxis</h4>
                            <h5>Explore Our Diverse Range of Vehicles for Every Need</h5>
                            <span></span>
                        </div>
                        <div className="common_btn_div">
                            <Link href="/dharamshala-taxi-service" className='common_animate_btn inline-block'>
                                View More <HiOutlineArrowUpRight />
                            </Link>
                        </div>
                    </div>
                    <div className={styles.main_taxis}>
                        {taxisData.map((taxi) => (
                            <div className={styles.main_taxis_child} key={taxi.id}>
                                <Link href={'/dharamshala-taxi-service'}  aria-label="Taxi Services" ></Link>
                                <div className={styles.main_taxis_child_image}>
                                    <Image src={taxi.taxi_image} height={150} width={150} alt={taxi.taxi_name} priority={true} />
                                </div>
                             
                                    <div className={styles.taxi_content}>
                                        <h4>{taxi.taxi_name}</h4>
                                        <p>{taxi.description}</p>
                                    </div>
                                    <button className={styles.taxi_btn} aria-label="Taxi Services">
                                        <FaArrowRight />
                                    </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default MainTaxis;
