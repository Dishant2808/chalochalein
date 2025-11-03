import styles from './styles/pages/page.module.scss';
import HomeBanner from "./components/Banners/HomeBanner";
import MainTaxis from "./components/Taxis/MainTaxis";
import Whychooseus from "./components/Whychooseus/Whychooseus";
import destinationsData from "./Data/destinationsData";
import toursData from "./Data/toursData";
import DestinationCard from "./components/Cards/DestinationCard";
import Tours from "./components/Tours/tours";
import Loader from './components/Loader/Loader';
import Link from 'next/link';
import { GoArrowUpRight } from "react-icons/go";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import BookTaxiBanner from './components/Banners/BookTaxiBanner';
import ToursPageCard from './components/Cards/ToursPageCard';
import Activities from './components/Activities/activities';
import Accordion from './components/Accordion/Accordion'
import BookCabBanner from './components/Banners/BookCabBanner';
import homePageFaqs from './Data/homePageFaqs';
import FaqCallSec from './components/FaqCallSec/FaqCallSec';
import Benefits from './components/Taxis/Benifits';
import Testimonial from './components/Testimonial/Testimonial';
import ImageGallery from './components/ImageGallery/ImageGallery';

export const metadata = {
  title: 'Book Taxi in Dharamshala, Himachal Pradesh - Reliable Taxi Service',
  description: 'Experience the convenience of booking a taxi in Dharamshala, Himachal Pradesh. Our reliable taxi service offers hassle-free transportation for your travel needs. Book now!',
  keywords: 'Book taxi in dharamshala, dharamshala taxi service, dharmashala tours, manali trip packages, Taxi in dharamshala price, 24 hours taxi in dharamshala, Cheap taxi in dharamshala.'
}

export default async function Home() {

  // Local Business Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Chalo Chalein",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "686G+7XQ, Shyam Nagar, Uparli Barol",
      "addressLocality": "Dharamshala",
      "addressRegion": "Himachal Pradesh",
      "postalCode": "176215"
    },
    "image": "https://www.chalochaleinhimachal.com/images/adventure-activities/paragliding.webp",
    "email": "chalochaleinhimachal@gmail.com",
    "telePhone": "8894460060",
    "url": "https://www.chalochaleinhimachal.com/",
    "paymentAccepted": ["cash"],
    "openingHours": "Mo,Tu,We,Th,Fr,Sa,Su 12:00-00:00",
    "openingHoursSpecification": [{
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "12:00",
      "closes": "00:00"
    }],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.219044",
      "longitude": "76.323402"
    },
    "priceRange": "$"
  }

  // Organisation Schema
  const organisationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Chalo Chalein",
    "alternateName": "Chalo Chalein",
    "url": "https://www.chalochaleinhimachal.com/",
    "logo": "https://www.chalochaleinhimachal.com/logo-color.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "8894460060",
      "contactType": "customer service"
    },
    "sameAs": [
      "https://www.facebook.com/people/Chalo-Chalein-Tours-and-Travels/61556841593754/?mibextid=ZbWKwL",
      "https://www.instagram.com/chalochaleinhimachal"
    ]
  }

  // BreadCrumb Schema
  const breadCrumbSchema = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.chalochaleinhimachal.com/"
    }, {
      "@type": "ListItem",
      "position": 2,
      "name": "About Us",
      "item": "https://www.chalochaleinhimachal.com/about-us"
    }, {
      "@type": "ListItem",
      "position": 3,
      "name": "Taxi Service",
      "item": "https://www.chalochaleinhimachal.com/dharamshala-taxi-service"
    }, {
      "@type": "ListItem",
      "position": 4,
      "name": "Tours",
      "item": "https://www.chalochaleinhimachal.com/himachal-tour-package"
    }, {
      "@type": "ListItem",
      "position": 5,
      "name": "Activities",
      "item": "https://www.chalochaleinhimachal.com/adventure-activiities-in-himachal"
    }, {
      "@type": "ListItem",
      "position": 6,
      "name": "Destinations",
      "item": "https://www.chalochaleinhimachal.com/best-places-in-himachal-pradesh"
    },
    {
      "@type": "ListItem",
      "position": 7,
      "name": "Contact Us",
      "item": "https://www.chalochaleinhimachal.com/contact-us"
    },
    {
      "@type": "ListItem",
      "position": 8,
      "name": "Blogs",
      "item": "https://www.chalochaleinhimachal.com/blogs"
    }
    ]
  }

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    "name": "Chalo Chalein",
    "url": "https://www.chalochaleinhimachal.com/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "{search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  // FaqPage Schema
  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": `What does "Chalo Chalein" mean?`,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "\"Chalo Chalein\" is a Hindi phrase that translates to \"Let's go\" in English. It encapsulates the spirit of our travel agency, inviting you to embark on exciting journeys and adventures."
      }
    }, {
      "@type": "Question",
      "name": "What services does Chalo Chalein offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Chalo Chalein provides a range of travel services, including taxi services for seamless transportation, curated tours for memorable experiences, adventurous trekking in the lap of nature, thrilling paragliding adventures, and immersive camping experiences."
      }
    }, {
      "@type": "Question",
      "name": "Where does Chalo Chalein operate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our services extend across Himachal Pradesh, with a primary focus on popular destinations such as Dharamshala, Dalhousie, Manali, Shimla, Kinnaur, Kullu, Lahaul Spiti, as well as connectivity to Amritsar, Chandigarh, and Delhi."
      }
    }, {
      "@type": "Question",
      "name": "How can I book a taxi with Chalo Chalein?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Booking a taxi with Chalo Chalein is easy. Simply visit our website, choose your destination, select the type of taxi service you need, and follow the intuitive booking process. Alternatively, you can contact our customer support for assistance."
      }
    }, {
      "@type": "Question",
      "name": "Are your drivers experienced and professional?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our drivers are seasoned professionals with extensive experience. They are not only skilled in safe navigation but also knowledgeable about the local attractions, ensuring you have a comfortable and enjoyable journey."
      }
    }, {
      "@type": "Question",
      "name": "What safety measures are in place for trekking and paragliding activities?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your safety is our priority. Our trekking and paragliding activities adhere to stringent safety protocols. We work with certified guides and instructors, use high-quality equipment, and conduct thorough safety briefings to ensure a secure and enjoyable experience."
      }
    }, {
      "@type": "Question",
      "name": "Can Chalo Chalein customize tour packages?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! We understand that every traveler has unique preferences. Chalo Chalein offers customizable tour packages to tailor your journey according to your interests, schedule, and group size. Contact us, and we'll create a personalized itinerary for you."
      }
    }, {
      "@type": "Question",
      "name": "What amenities are provided during camping trips?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our camping trips are designed for comfort and adventure. We provide essential amenities such as tents, sleeping bags, and camping gear. Additionally, our camping experiences include bonfires, delicious meals, and activities to make your stay memorable."
      }
    }]
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationSchema) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbSchema) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />
      <HomeBanner />

      <h1 style={{ display: 'none' }}>Book Taxi in Dharamshala</h1>

      <Whychooseus />

      <MainTaxis />

      <section className={`${styles.popular_destinations} common_margin`}>
        <div className="container">
          <div className="d_flex justify_content_between align_items_center common_parent_div">
            <div className="common_heading">
              <h4>Explore Our Premier Destinations</h4>
              <h5>Discover the Charms of Shimla, Manali, Dharamshala, and More</h5>
              <span></span>
            </div>
            <div className="common_btn_div">
              <Link href="/best-places-in-himachal-pradesh" className='common_animate_btn inline-block'>
                Explore More <HiOutlineArrowUpRight />
              </Link>
            </div>
          </div>
          <div className={styles.popular_destinations_cards}>
            {destinationsData && destinationsData.slice(0, 4).map((destination, index) => (
              <div className={styles.popular_destinations_card} key={index} >
                <DestinationCard destination={destination} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.activities_sec} common_margin`}>
        <div className="container">
          <div className="d_flex justify_content_between align_items_center common_parent_div">
            <div className="common_heading">
              <h4>Adventure Awaits</h4>
              <h5>Explore the Thrill of Our Popular Activities</h5>
              <span></span>
            </div>
            <div className="common_btn_div">
              <Link href="/best-places-in-himachal-pradesh" className='common_animate_btn'>
                Explore More <HiOutlineArrowUpRight />
              </Link>
            </div>
          </div>
          <Activities />
        </div>
      </section>

      <section className={`${styles.popular_tours} common_margin`}>
        <div className="container">
          <div className="d_flex justify_content_between align_items_center common_parent_div">
            <div className="common_heading">
              <h4>Featured Tours for Unforgettable Adventures</h4>
              <h5>Embark on Exciting Journeys: Explore, Trek, and Discover</h5>
              <span></span>
            </div>
            <div className="common_btn_div">
              <Link href="/himachal-tour-package" className='common_animate_btn inline-block'>
                View All Tours <HiOutlineArrowUpRight />
              </Link>
            </div>
          </div>
          <div className={styles.popular_tours_cards}>
            {toursData && toursData.slice(0, 4).map((tour, index) => (
              <div className={styles.popular_tour_card} key={index} >
                <ToursPageCard tour={tour} />
              </div>
            ))}
          </div>
        </div>
      </section>



      <Benefits />

      <section className={`${styles.testimonial_sec} common_margin`}>
        <div className='container'>
          <div className="d_flex justify_content_between align_items_center common_parent_div">
            <div className="common_heading">
              <h4>Testimonial</h4>
              <h5>What people are saying!</h5>
              <span></span>
            </div>
            <div className="common_btn_div">
              <Link href="https://g.page/r/CX_0NrLYwkRSEAI/review" className='common_animate_btn inline-block' target='_blank'>
                Review Us
              </Link>
            </div>
          </div>
          <Testimonial />
        </div>
      </section>

      <ImageGallery />

      <section className={`${styles.faq_sec} common_margin`}>
        <div className='container'>
          <div className="common_heading">
            <h4>Chalo Chalein FAQs</h4>
            <h5>Your Journey Begins with Answers</h5>
            <span></span>
          </div>
          <div className={`${styles.faq_content_main} d_flex gap_20`}>
            <div className={styles.faq_sec_left}>
              <FaqCallSec />
            </div>
            <div className={styles.faq_sec_right}>
              <Accordion items={homePageFaqs} />
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

    </main>
  )
}
