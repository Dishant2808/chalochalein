'use client';
import Image from 'next/image';
import styles from './Cards.module.scss';
import Link from 'next/link';
import { PiArrowUpRightLight } from "react-icons/pi";
import { PiMountainsFill } from "react-icons/pi";


export default function DestinationCard({ destination }) {
    return (
        <div className={styles.popular_destination_page_card}>
            <div className={styles.popular_destination_card_image}>
                <Image src={destination.destination_image}
                    alt={destination.destination_name}
                    fill={true}
                />
                {/* <div className={styles.popular_destination_name}>
                    <h4>{destination.destination_name}</h4>
                </div> */}
            </div>
            <Link className={styles.popular_destination_name} href={`/best-places-in-himachal-pradesh/${destination.slug}`}>
                <span>
                    {destination.destination_name}
                </span>
            </Link>
        </div>
    )
}
