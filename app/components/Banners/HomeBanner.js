'use client'
import Image from "next/image";
import styles from "./Banners.module.scss";
import Slider from "react-slick";
import Link from "next/link";
import { FaTaxi } from "react-icons/fa";
import { TbTrekking } from "react-icons/tb";
import { MdOutlineTour } from "react-icons/md";
import { useState, useEffect } from "react";

const HomeBanner = () => {
  const [isDesktop, setIsDesktop] = useState(true);

  const banners = [
    {
      id: 0,
      title: `Dharamshala Tour Packages`,
      description: `Discover Dharamshala's Charm! Book Now and Enjoy 5% Off on Tour Packages. Limited Time Offer!`,
      // imgSrc: "/images/banners/tours-banner.jpg",
      imgSrc: '/images/banners/stadium-banner.webp',
      mobileBannerImage: "/images/banners/stadium-mobile-banner.webp",
      button_text: 'Book a Tours',
      button_icon: <MdOutlineTour />
    },
    {
      id: 1,
      title: `Seamless Transfers`,
      description: 'Effortless journeys across Himachal Pradesh with our reliable taxi services. Your destination, our priority.',
      // imgSrc: "/images/banners/taxi-banner.webp",
      imgSrc: '/images/banners/new-taxi-banner.webp',
      mobileBannerImage: "/images/banners/taxi-banner-mobile.webp",
      button_text: 'Book A Taxi',
      button_icon: <FaTaxi />
    },
    {
      id: 2,
      title: `Trek Beyond Boundaries`,
      description: `Unleash your spirit of adventure amidst the Himalayas. Experience exhilarating treks and stunning vistas that defy imagination.`,
      // imgSrc: "/images/banners/trekking-banner.jpg",
      imgSrc: '/images/banners/trekking-home-banner.webp',
      mobileBannerImage: "/images/banners/trekking-home-banner-mobile.webp",
      button_text: 'Book Treks',
      button_icon: <TbTrekking />
    },
    // {
    //   id: 3,
    //   title: `Journey into Himachal's Charm`,
    //   description: `Explore Himachal's wonders with our curated tours. Discover the beauty and culture that define this mesmerizing region`,
    //   // imgSrc: "/images/banners/tours-banner.jpg",
    //   imgSrc: '/images/banners/tours-home-banner.webp',
    //   mobileBannerImage: "/images/banners/tours-home-banner-mobile.webp",
    //   button_text: 'Book a Tours',
    //   button_icon: <MdOutlineTour />
    // },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    arrows: false,
  };

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 600);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {isDesktop ? (
        <section className={styles.desktop_banner} aria-hidden={true}>
          <Slider {...settings} className="banner_slider">
            {banners.map((banner, index) => (
              <div className={`slick-slide ${styles.home_banner} ${index === 0 ? 'slick-active slick-current' : ''}`} key={banner.id}>
                <Image
                  src={banner.imgSrc}
                  alt={banner.button_text + 'with Chalo Chalein'}
                  fill={true}
                />
                <div className="container">
                  <div className={styles.home_banner_content}>
                    <h2 className="common_headings_white">{banner.title}</h2>
                    <p className="common_para_white">{banner.description}</p>
                    <Link href="tel:8894460060" className="common_animate_btn">{banner.button_icon} {banner.button_text}</Link>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </section>
      ) : (
        <section className={styles.mobile_banner} aria-hidden={true}>
          <Slider {...settings} className='banner_slider' >
            {banners.map((banner, index) => (
              <div className={`slick-slide ${styles.home_banner} ${index === 0 ? 'slick-active slick-current' : ''}`} key={banner.id}>
                <Image
                  src={banner.mobileBannerImage}
                  alt={banner.button_text + 'with Chalo Chalein'}
                  fill={true}
                />

                <div className={styles.home_banner_content}>
                  <h2 className="common_headings_white">{banner.title}</h2>
                  <p className="common_para_white">{banner.description}</p>
                  <Link href="tel:8894460060" className="common_animate_btn">{banner.button_icon} {banner.button_text}
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
        </section>
      )}
      {/* <section className={styles.desktop_banner}>
        <Slider {...settings} className="banner_slider" aria-hidden="true">
          {banners.map((banner) => (
            <div className={styles.home_banner} key={banner.id}>
              <Image
                src={banner.imgSrc}
                alt={banner.button_icon + 'with Chalo Chalein'}
                fill={true}

              />
              <div className="container">
                <div className={styles.home_banner_content}>
                  <h2 className="common_headings_white">{banner.title}</h2>
                  <p className="common_para_white">{banner.description}</p>
                  <Link href="tel:8894460060" className="common_animate_btn">{banner.button_icon} {banner.button_text}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      <section className={styles.mobile_banner}>
        <Slider {...settings} className='banner_slider' aria-hidden="true">
          {banners.map((banner) => (
            <div className={styles.home_banner} key={banner.id}>
              <img src={banner.mobileBannerImage} width="100%" height="100%" />
              <div className={styles.home_banner_content}>
                <h2 className="common_headings_white">{banner.title}</h2>
                <p className="common_para_white">{banner.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </section> */}
    </>
  );
};
export default HomeBanner;