'use client';
import { useState } from 'react';
import styles from './Taxis.module.scss';
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';
import { IoCallSharp } from "react-icons/io5";

export default function TaxiServiceContent() {

    const [hideText, setHideText] = useState(false);

    const handleShowHide = () => {
        setHideText(!hideText);
    };

    const mainlyTaxiService = [
        {
            id: 1,
            title: `Taxi Service in\n Dharamshala`,
            taxi_image: '/images/taxi/dharamshala-taxi.webp',
            alt_Tag: 'Taxi service in Dharamshala'
        },
        {
            id: 2,
            title: `Taxi Service in\n Kangra Airport`,
            taxi_image: '/images/taxi/taxi-in-kangra.jpg',
            alt_Tag: 'Taxi service in Kangra Airport'

        },
        {
            id: 3,
            title: `Taxi Service in\n McLeod Ganj`,
            taxi_image: '/images/taxi/taxi-in-mecleodganj.jpg',
            alt_Tag: 'Taxi service in Mcleod Ganj'
        }
    ];

    return (
        <div className={`${styles.taxi_service_overview} `}>
            <div className='common_heading'>
                <h4>Welcome to Chalo Chalein Taxi Service- </h4>
                <h5>Your Trusted Travel Companion in Dharamshala</h5>
                <span></span>
            </div>
            <div className={styles.text_container}>
                <p>Our mission to transform your exploration of Dharamshala and surrounding areas into your memorable journey. 
                Whether you crave the soul - Stirring seniority of Mcleodganj, the historical splendor of Kangra fort, and trilled adventure of Himalayas treks, we ensure that we provide you the smooth and comfortable journey of every step of way. Experience Unmatched Comfort and Reliability: 
                {hideText ? `  Your Comfort and safety are our top priorities. Our meticulously maintained fleets feature a range of vehicles - From spacious sedans for families to robust SUVs perfect for adventurous excursions - perfectly suits for travel needs.  

                Experience the journey with our local drivers who know the best hidden gems of Dharamshala. Whether it's exploring the serene landscape, visiting local places or exploring the secret spots, our drivers ensure that your ride is not just a trip, but an unforgettable adventure. At chalo chalein - Taxi Service in Dharamshala for a seamless blend of comfort, expertise and local insight.  ` : null}
                    {hideText ?
                        <button
                            className={styles.showhide_Btn}
                            onClick={handleShowHide}
                        >Show Less <FaAngleUp />
                        </button> :
                        <button
                            className={styles.showhide_Btn}
                            onClick={handleShowHide}>
                            Show More <FaAngleDown />
                        </button>
                    }
                </p>
            </div>

            <div className={styles.mainly_taxi_service}>
                <div className={styles.mainly_taxi_service_main}>
                    {mainlyTaxiService.map((item) => (
                        <div className={styles.mainly_taxi_service_main_child} key={item.id}>
                            <Image src={item.taxi_image} alt={item.title} fill={true} priority />
                            <div className={styles.mainly_taxi_service_content}>
                                <h4>{item.title}</h4>
                                {/* <Link href="tel:8894460060" className="transparent_button">
                                    <IoCallSharp />
                                    Book Now
                                </Link> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.key_features}>
                <div className='common_heading'>
                    {/* <h6>Chalo Chalein Specialties:</h6> */}
                    <h6>Why choose Chalo Chalein Himachal for Your Taxi service in dharamshala?</h6>
                    <p>Explore the Dharamshala and Hiamchal with comfort and stylishness with chalo chalein Hiamchal - Dharamshala taxi service as your trusted taxi partner in Dharamshala.</p>
                    <ul>
                        <li><strong>Reliable and punctual:</strong> We know the value of time and we understand that your time is precious. Our professional drivers ensure prompt pickup and  drop-off on the time.
                        </li>
                        <li><strong>Local expertise:</strong> Our user-friendly booking system ensures convenience at your fingertips. Simply say "Chalo Chalein" and embark on your journey hassle-free.</li>
                        <li><strong>Safe and Comfortable Travel:</strong> Our drivers are not just a driver; they are local experts. They know the best route and the most attractive place of Dharamshala.</li>
                    </ul>
                    <p>Whether you're exploring Dharamshala's cultural richness, delving into the tranquility of nature, or seeking thrilling adventures off the beaten path, Chalo Chalein is your partner in creating memories that linger long after your journey ends.</p>
                    <p>Let's venture into the heart of Himachal Pradesh together. Chalo Chalein Hiamchal – Let's go!</p>
                </div>
            </div>
        </div>
    )
}