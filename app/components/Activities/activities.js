// import adventureActivitiesData from "../../Data/activitiesData";
import styles from "./activities.module.scss";
import Image from "next/image";
import { FaHiking, FaMountain, FaParachuteBox } from 'react-icons/fa';
import { GiCampingTent } from "react-icons/gi";
import Link from 'next/link';

const Activities = () => {

  const activitiesData = [
    {
      activity_name: 'Trekking',
      short_description: 'Renowned for its picturesque landscapes, trekking trails, and backpacking culture.',
      activity_image: '/images/adventure-activities/trekking.jpg',
      icon: <FaHiking />
    },
    {
      activity_name: 'Paragliding',
      short_description: 'Known for its ancient temples, vibrant culture, and stunning natural beauty.',
      activity_image: '/images/adventure-activities/paragliding.webp',
      icon: <FaParachuteBox />
    },
    {
      activity_name: 'Camping',
      short_description: 'A cold desert mountain valley famous for its landscapes, monasteries, and adventure expeditions.',
      activity_image: '/images/adventure-activities/camping.webp',
      icon: <GiCampingTent />
    },
  ];

  return (
    <div className={styles.activity_card_main}>
      {activitiesData.map((activity) => (
        <div className={styles.activity_card} key={activity.activity_name}>
          <div className={styles.card_image}>
            <Image src={activity.activity_image} fill={true} alt={activity.activity_name + 'with Chalo Chalein'} />
          </div>
          <div className={styles.card_content}>
            <div className={styles.card_content_icon}>{activity.icon}</div>
            <vr />
            <Link href='/adventure-activiities-in-himachal'>{activity.activity_name}</Link>
            {/* <p>{activity.short_description}</p> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Activities;