import Image from "next/image";
import Link from "next/link";
import styles from './Taxis.module.scss';
import { FaUserClock } from "react-icons/fa";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa";

const Benefits = () => {

    const benefits = [
        {
            id: 1,
            icon: <FaUserClock />,
            title: '24/7 Service',
            description: 'Travel any time, anywhere with our round-the-clock availability for seamless journeys.',
        },
        {
            id: 2,
            icon: <MdAirlineSeatReclineExtra />,
            title: 'Cozy Rides',
            description: 'Enjoy a smooth and comfortable journey in our modern, well-equipped vehicles.',
        },
        {
            id: 3,
            icon: <FaUserClock />,
            title: 'Expert Drivers',
            description: 'Experience safe and friendly travel guided by our professional and knowledgeable drivers.',
        },
        {
            id: 4,
            icon: <FaBookOpen />,
            title: 'Easy Reservations',
            description: 'Book your ride hassle-free with our user-friendly and efficient booking system.',
        },
    ];

    return (
        <>
            <section className={`${styles.benefits_sec} common_margin`}>
                <div className="container">
                    <div className="common_heading">
                        <h4>Why Chalo Chalein Stands Out</h4>
                        <h5>Elevate Your Journey with Exclusive Benefits</h5>
                        <span></span>
                    </div>
                    <div className={styles.benefits_sec_main}>
                        {benefits.map((benefit) => (
                            <div className={styles.benefits_sec_main_child} key={benefit.id}>
                                <div className={styles.benefits_sec_main_child_image}>
                                    {benefit.icon}
                                </div>
                                <div className={styles.benefits_content}>
                                    <h4>{benefit.title}</h4>
                                    <p>{benefit.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Benefits;
