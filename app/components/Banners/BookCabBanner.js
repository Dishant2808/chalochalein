import Image from "next/image";
import styles from './Banners.module.scss'
import Link from "next/link";

const BookCabBanner = (props) => {
    return (
        <section className="common_margin">
            <div className="container">
                <div className={`${styles.cab_banner} d_flex`} >
                    <div className={`${styles.cab_banner_left}`}>
                        <h3>{props.title}</h3>
                        <p>{props.description}</p>
                        <Link href="tel:8894460060" className="common_animate_btn">{props.CTA_text}</Link>
                    </div>
                    <div className={styles.cab_banner_right}>
                        <div className={styles.cab_banner_right_image}>
                            <Image src={props.image} fill={true} alt={'book cab in dharamshala'}></Image>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default BookCabBanner;