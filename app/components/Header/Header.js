"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.scss";
import { CgMenuRight } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
// import styles from './Whychooseus.module.scss';
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header_main}>
      <div className="container">
        <nav className={styles.navbar}>
          <div className={styles.header_logo}>
            <Link href="/">
              <Image src="/logo-color.png" height={80} width={100} alt="Chalo Chalein Logo" />
            </Link>
          </div>
          <div
            className={`${styles.links} ${menuOpen ? styles.open : styles.close
              }`}
          >
            <div className={styles.links_main}>
              {menuOpen === true && (
                <button className={styles.cross_btn} onClick={toggleMenu}>
                  <RxCross2 />
                </button>
              )}
              <Link href="/about-us" onClick={toggleMenu} className={styles.header_ancor}>
                About Us
              </Link>
              {/* <Link className={styles.header_ancor} href='/'>{item.cta_text}</Link> */}
              <Link href="/dharamshala-taxi-service" onClick={toggleMenu} className={styles.header_ancor}>
                Taxi Services
              </Link>
              <Link href="/himachal-tour-package" onClick={toggleMenu} className={styles.header_ancor} >
                Tours
              </Link>
              <Link href="/adventure-activiities-in-himachal" onClick={toggleMenu} className={styles.header_ancor}>
                Activities
              </Link>
              <Link href="/best-places-in-himachal-pradesh" onClick={toggleMenu} className={styles.header_ancor}>
                Destinations
              </Link>
              <Link href="/blogs" onClick={toggleMenu} className={styles.header_ancor}>
                Blogs
              </Link>
              <Link href="/contact-us" onClick={toggleMenu} className={styles.header_ancor}>
                Contact Us
              </Link>
            </div>
          </div>
          {/* <div className={styles.header_right}>
            <Link href="tel:8894460060">8894460060</Link>
          </div> */}
          <div className={styles.hamburger} onClick={toggleMenu}>
            <CgMenuRight />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;