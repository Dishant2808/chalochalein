'use client';
import Image from 'next/image';
import styles from './Cards.module.scss';
import { IoLocationOutline } from 'react-icons/io5';
import { MdArrowOutward } from 'react-icons/md';
import Link from 'next/link';

export default function ToursPageCard({ tour }) {
    return (
        <div className={styles.tour_card}>
            <div className={styles.card_top}>
                <div className={styles.card_image}>
                    <Image
                        className={styles.image}
                        src={tour.ImageSrc}
                        fill={true}
                        alt={tour.tourName}
                    />
                </div>
                {/* <div className={styles.tour_gradient}></div>
                <div className={`${styles.card_image_content} flex_center`}>
                    <div>
                        <p>{tour.Duration}</p>
                    </div>
                    <div className="flex_center">
                        <IoLocationOutline />
                        <h5>{tour.tourName}</h5>
                    </div>
                </div> */}
            </div>
            <div className={`${styles.card_content}`}>
                <h4>{tour.tourName}</h4>
                <p className={styles.tour_location}><span><IoLocationOutline /></span> {tour.location}</p>
                {/* <button className="common_animate_btn">{destination.button}</button>               */}
                <div className={styles.card_inclusion}>
                    {tour.inclusion.map((item, index) => (
                        <div className={styles.card_inclusion_div} key={index}>
                            <p>{item.icon}</p>
                            <span>{item.text}</span>
                        </div>
                    ))}
                </div>
                <div className="d_flex justify_content_between">
                    <div className={styles.tour_price}>
                        <span>Price:</span>
                        <p>On Request</p>
                    </div>
                    <Link href='tel:8894460060' className="common_animate_btn"> Book Now</Link>
                </div>
            </div>
        </div>
    )
}
