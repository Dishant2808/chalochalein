import Image from "next/image";
import Link from "next/link";
import styles from './Banners.module.scss'
import { IoCallSharp } from "react-icons/io5";

const BookTaxiBanner = () => {
    return (
        <>
            <div className="common_margin">
                <section className={styles.book_taxi_banner}>
                    <div className="container">
                        <div className={styles.book_taxi_banner_main}>
                            <Image src="/images/taxi/taxi-banner.png" alt="book taxi in dharamshala" fill={true} priority={true} sizes="(max-width: 768px) 400px, (max-width: 1200px) 600px, 1200px" />
                            <div className={styles.book_taxi_banner_main_content}>
                                <h2>Seamless Travel Experiences </h2>
                                <h2>Await</h2>
                                <p>Book Your Ride Now</p>
                                <Link className="transparent_button" href="tel:8894460060">
                                    <IoCallSharp /> +91 8894460060</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default BookTaxiBanner;
