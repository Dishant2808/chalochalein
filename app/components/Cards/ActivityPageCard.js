// import adventureActivitiesData from "../../Data/activitiesData";
import styles from "./Cards.module.scss";
import Image from "next/image";
import Link from "next/link";
import { FaCalendarCheck } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";

const ActivityPageCard = ({ activity }) => {

    return (
        <div className={styles.activity_page_card}>
            <div className={styles.activity_page_card_image}>
                <span className={styles.location_badge}><FaLocationDot /> {activity.location}</span>
                <Image src={activity.activity_image}
                    alt={activity.activity_name}
                    fill={true}
                />
            </div>
            <div className={styles.activity_content}>
                <h3 className="card_title">{activity.activity_name}</h3>
                <p className={styles.activity_description}>{activity.short_description}</p>
                <div className="d_flex align_items_center gap_20">
                    <h6 className={styles.days_and_difficult}><span><FaCalendarCheck /></span> {activity.days}</h6>
                    <h6 className={styles.days_and_difficult}><span>{activity.difficulty_level.icon}</span> {activity.difficulty_level.text}</h6>
                </div>
                <div className="d_flex justify_content_between">
                    <div className={styles.activity_price}>
                        <span>Price:</span>
                        <p>On Request</p>
                    </div>
                    <Link href='tel:8894460060' className="common_animate_btn"><FiPhoneCall /> {activity.CTA_text}</Link>
                </div>
            </div>
        </div>
    );
};

export default ActivityPageCard;