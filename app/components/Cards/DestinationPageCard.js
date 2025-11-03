'use client';
import Image from 'next/image';
import styles from './Cards.module.scss';
import Link from 'next/link';
import { PiArrowUpRightLight } from "react-icons/pi";
import { PiMountainsFill } from "react-icons/pi";

export default function DestinationPageCard({ destination }) {
    return (
        <div className={`${styles.destination_page_card} d_flex flex_center`}>
            {/* <Link className='ancor_click' href={`/destinations/${destination.slug}`}></Link> */}
            <div className={styles.card_left}>
                <div className={styles.card_image}>
                    <Image className={styles.destination_image}
                        src={destination.destination_image}
                        alt={destination.destination_name}
                        fill={true}
                    />
                </div>
            </div>
            <div className={`${styles.card_content}`}>
                <h4>{destination.destination_name}</h4>
                <p>{destination.short_description}</p>
                <p className={styles.best_time_to_visit}><strong>Best Time: </strong>{destination.best_time_to_visit}</p >
                <Link href={`/best-places-in-himachal-pradesh/${destination.slug}`} className="common_animate_btn">
                    Discover
                    <PiArrowUpRightLight />
                </Link>
            </div>
        </div>
    )
}
