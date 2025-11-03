import Image from "next/image";
import Link from "next/link";
import styles from './Banners.module.scss'

const PageTopBanner = (props) => {
    return (
        <div className={styles.page_top_banner}>
            <Image
                src={props?.bannerImage}
                fill={true}
                alt={props?.altTag}
                quality={100}
                
            /> 
            <div className={styles.page_top_banner_content}>
                <div className ="container">
                    <h2>{props?.title}</h2>  
                    <p>{props?.subtitle}</p>
                </div>
            </div>
        </div>
    );
};

export default PageTopBanner;
