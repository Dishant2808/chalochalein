import BookCabBanner from "../components/Banners/BookCabBanner";
import PageTopBanner from "../components/Banners/PageTopBanner";
import ImageGallery from "../components/ImageGallery/ImageGallery";
import SEOContent from "../components/SEOContent/SEOContent";
import styles from "../styles/pages/about.module.scss";
import Image from "next/image";

export const metadata = {
  title: 'About Chalo Chalein Tour and Travel | Taxi Service, Tours, and Travel',
  description: 'Discover the beauty of Himachal Pradesh with Chalo Chalein Tour and Travel. Offering reliable taxi service, guided tours, and unforgettable travel experiences. Plan your adventure today!',
}

const AboutUs = () => {
  return (
    <>
      <PageTopBanner
        bannerImage={'/images/banners/new-about-page-banner.webp'}
        title={'About Us'}
        subtitle={'Our Journey, Your Experience'}
        altTag={'About Chalo Chalein tour and travel'}
      />

      <SEOContent
        title="About chalo chalein"
        description="Welcome to Chalo Chalein, your premier tour and travel agency in Himachal Pradesh, where the essence of wanderlust blends with expert travel services. As our name suggests, 'Chalo Chalein' which means 'let's go' in Hindi, we are dedicated to igniting the spirit of adventure and guiding you through the serene landscapes of the Himalayas. Whether you're looking to book a taxi in Dharamshala, embark on a scenic trek, or explore the cultural rich heritage of this mountainous region, our local expertise and personalized services ensure an unforgettable experience. At Chalo Chalein, we pride ourselves on crafting tailor-made itineraries that cater to your unique travel desires, all while ensuring comfort, safety, and the highest standards of hospitality. Join us on a journey of discovery and enchantment with Chalo Chalein, where every trip is more than just travel—it's a seamless blend of exploration, excitement, and memories that last a lifetime."
      />

      <section className={`${styles.about_us_sec} common_margin`}>
        <div className="container">
          <div className={`${styles.about_us_content} ${styles.about_us_content1} flex_center d_flex`}>
            <div className={`${styles.left_sec} ${styles.top_sec_content} common_heading`}>
              <h4>What is Chalo-Chalein?</h4>
              <p>
                At Chalo Chalein, the very essence of our name, 'Chalo Chalein,' encapsulates the spirit of exploration and the call to embark on unforgettable journeys. In Hindi, 'Chalo Chalein' translates to 'let's go,' and for us, it represents more than just a phrase – it's an invitation to discover, experience, and create lasting memories.
              </p>
            </div>
            <div className={styles.right_sec}>
              <div className={styles.about_image}>
                <Image
                  src="/images/about-chalochalein.webp"
                  fill={true}
                  alt="Chalo Chalein Trekking Service"
                />
              </div>
            </div>
          </div>
          <div className={`${styles.about_us_content} ${styles.about_us_content2} flex_center d_flex`}>
            <div className={styles.right_sec}>
              <div className={styles.about_image}>
                <Image
                  src="/images/about-chalo-chalein-tour-travel.webp"
                  fill={true}
                  alt="Chalo Chalein Taxi Service"
                />
              </div>
            </div>
            <div className={`${styles.left_sec} ${styles.bottom_sec_content}`}>
              <p>
                We are not just a travel agency; we are your companions on the road, guiding you through the diverse landscapes, vibrant cultures, and hidden gems that our beautiful destinations have to offer. Whether you're seeking the convenience of seamless taxi services, the excitement of curated tours, or the thrill of adventurous trekking, Chalo Chalein is your trusted partner in every step of the journey.
              </p>
              <p>So, join us on this incredible journey. Let's go explore, let's go discover – Chalo Chalein!</p>
            </div>
          </div>
        </div>
      </section>

      <BookCabBanner
        title={'Book Your Cab'}
        description={'Explore Himachal Pradesh with ease. Book your taxi now for a seamless journey through Dharamshala, Manali, and beyond. Our professional drivers ensure comfort and punctuality, making every trip memorable. Start your adventure today!'}
        CTA_text={'Book Now'}
        image={'/vectors/taxi.svg'}
      />
    </>
  );
};

export default AboutUs;