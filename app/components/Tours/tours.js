import Image from "next/image";
import styles from "./tours.module.scss";
import { MdArrowOutward } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import Link from "next/link";
import ToursData from "../../Data/toursData";
import ToursPageCard from '../Cards/ToursPageCard'
const Tours = () => {
  return (
    <section className={styles.destination_section}>
      <div className="container">
        <div className={`${styles.destination_head} d_flex`}>
          <h1>Popular Tours</h1>
          <button className={styles.more_btn}>
            More <MdArrowOutward />
          </button>
        </div>
        <div className={styles.destinations_card}>
          {ToursData.map((tour, index) => (
            <ToursPageCard key={index} tour={tour} />
            // return (
            //   <div className={styles.single_tour} key={index}>
            //     <div className={styles.card_top}>
            //       <div className={styles.card_image}>
            //         <Image
            //           className={styles.image}
            //           src={tour.ImageSrc}
            //           fill={true}
            //           alt="Picture of the tour"
            //         />
            //       </div>
            //       <div className={styles.tour_gradient}></div>
            //       <div className={`${styles.card_image_content} flex_center`}>
            //         <div>
            //           <p>{tour.Duration}</p>
            //         </div>
            //         <div className="flex_center">
            //           <IoLocationOutline />
            //           <h5>{tour.tourName}</h5>
            //         </div>
            //       </div>
            //     </div>
            //     <div className={`${styles.card_bottom}`}>
            //       <h4>{tour.title}</h4>
            //       <p>{tour.description}</p>
            //       {/* <button className="common_animate_btn">{destination.button}</button>               */}
            //       <Link href={"/"}>
            //         <button className="common_animate_btn">
            //           Explore <MdArrowOutward />
            //         </button>{" "}
            //       </Link>
            //     </div>
            //   </div>
            // );
          ))}
        </div>
      </div>
    </section>
  );
};
export default Tours;
