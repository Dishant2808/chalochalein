import styles from "./Footer.module.scss";
import { IoCall } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer_parent}>
      <div className="container">
        <div className={styles.footer_container}>
          {/* <div className={styles.footer_head}>
            <h2>Follow Us</h2>
            <h3>#Chalo Chalein</h3>
          </div> */}
          <div className={styles.footer_column}>
            <div className={`${styles.column} ${styles.footer_first_column}`}>
              <h4>Follow Us</h4>
              <ul>
                <li>
                  <p style={{ width: '20px', color: 'white' }}><IoCall /></p>
                  <span> <Link href='tel:8894460060'>+91 8894460060</Link></span>
                </li>
                <li>
                  <p style={{ width: '20px', color: 'white' }}> <IoMail /></p>
                  <span> <Link href='mailto:chalochaleinhimachal@gmail.com'>chalochaleinhimachal@gmail.com</Link></span>
                </li>
                <li>
                  <p style={{ width: '30px', color: 'white' }}> <FaLocationDot /></p>
                  <span>
                    <Link href="https://maps.app.goo.gl/3XAQGtFt4k7oMKDq6" className={styles.contact_links} >
                      Shyam Nagar, Uparli Barol, Dharamshala, Himachal Pradesh 176215
                    </Link>
                  </span>
                </li>
              </ul>
              <div className={styles.social_icons_main}>
                <Link href="https://www.facebook.com/people/Chalo-Chalein-Tours-and-Travels/61556841593754/?mibextid=ZbWKwL" target="_blank" aria-label="Facebook" className={styles.social_icons}>
                  <FaFacebookF />
                </Link>
                <Link href="https://www.instagram.com/chalochaleinhimachal" target="_blank" aria-label="Instagram" className={styles.social_icons}>
                  <FaInstagram />

                </Link>
                {/* <Link href="/" className={styles.social_icons}>
                  <FaTwitter />
                </Link> */}
              </div>
            </div>
            <div className={`${styles.column} ${styles.footer_secound_column}`}>
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <Link href='/about-us'>About Us</Link>
                </li>
                <li>
                  <Link href='/dharamshala-taxi-service'>Taxi Services</Link>
                </li>
                <li>
                  <Link href='/himachal-tour-package'>Tours</Link>
                </li>
                <li>
                  <Link href='/adventure-activiities-in-himachal'>Activities</Link>
                </li>
                <li>
                  <Link href='/best-places-in-himachal-pradesh'>Destinations</Link>
                </li>
                <li>
                  <Link href='/blogs'>Blogs</Link>
                </li>
                <li>
                  <Link href='/contact-us'>Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className={`${styles.column} ${styles.footer_third_column}`}>
              <h4>Tours</h4>
              <ul className="tours_list">
                <li> <Link href='/himachal-tour-package'>Mcleodganj Taxi Tour</Link></li>
                <li> <Link href='/himachal-tour-package'>Dharamshala Taxi Tour</Link></li>
                <li> <Link href='/himachal-tour-package'>Devi Darshan Taxi Tour</Link></li>
                <li> <Link href='/himachal-tour-package'>Golden Temple Taxi Tour</Link></li>
                <li> <Link href='/himachal-tour-package'>Explore More</Link></li>
              </ul>
            </div>
            <div className={`${styles.column} ${styles.footer_last_column}`}>
              <h4>Destinations</h4>
              <div className={styles.projects_container}>
                <div className={styles.projects_list}>
                  <Image className={styles.project_image}
                    src="/images/destinations/dharamshala.png"
                    alt='Dharamshala'
                    // fill={true}
                    height={100}
                    width={100}
                  />
                  <Link href='/best-places-in-himachal-pradesh/dharamshala'>Dharamshala</Link>
                </div>
                <div className={styles.projects_list}>
                  <Image className={styles.project_image}
                    src="/images/destinations/shimla.png"
                    height={100}
                    width={100}
                    alt="Shimla"

                  />
                  <Link href='/best-places-in-himachal-pradesh/shimla'>Shimla</Link>
                </div>

                <div className={styles.projects_list}>
                  <Image className={styles.project_image}
                    src="/images/destinations/dalhousie.png"
                    height={100}
                    width={100}
                    alt="Dalhousie"
                  />

                  <Link href='/best-places-in-himachal-pradesh/dalhousie'>Dalhousie</Link>
                </div>
                <div className={styles.projects_list}>
                  <Image className={styles.project_image}
                    src="/images/destinations/kullu.png"
                    height={100}
                    width={100}
                    alt="Kullu"
                  />

                  <Link href='/best-places-in-himachal-pradesh/kullu'>Kullu</Link>
                </div>
                <div className={styles.projects_list}>
                  <Image className={styles.project_image}
                    src="/images/destinations/kasol.png"
                    height={100}
                    width={100}
                    alt="kasol"
                  />

                  <Link href='/best-places-in-himachal-pradesh/kasol'>kasol</Link>
                </div>

                <div className={styles.projects_list}>
                  <Image className={styles.project_image}
                    src="/images/destinations/manali.png"
                    height={100}
                    width={100}
                    alt="Manali"
                  />
                  <Link href='/best-places-in-himachal-pradesh/manali'> Manali</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footer_bottom}>
          <p>Copyright © 2024 Chalo Chalein</p>
          <p>Design & Developed by <Link href='https://ishav.vercel.app' target="_blank">Ishav Bhatt</Link></p>
        </div>
      </div>
    </footer>
  );
}