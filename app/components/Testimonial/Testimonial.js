'use client';
import Image from "next/image";
import Link from "next/link";
import styles from './Testimonial.module.scss';
import { FaQuoteLeft } from "react-icons/fa";
import { FaStar } from 'react-icons/fa';
import Slider from "react-slick";

const StarRating = ({ rating }) => {
    // Assuming rating is a number from 1 to 5
    const stars = Array.from({ length: 5 }, (_, index) => (
        <FaStar key={index} color={index < rating ? 'gold' : 'gray'} />
    ));

    return <div>{stars}</div>;
};

const Testimonial = () => {

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const testimonialData = [
        {
            name: 'Abhishek Sharma',
            content: 'Best taxi service in Dharamshala. Driver was well experienced, friendly and reliable. He help us to explore the unseen beauty in the hills in a very affordable price. Highly recommendable to all.'
        },
        {
            name: 'Ravi kumar',
            content: 'I recently used chalo chalein taxi service in Dharamshala and was thoroughly impressed with their quality service. The driver was punctual, the car was clean and comfortable, and the overall experience was excellent. I highly recommended chalo chalein for anyone looking for a reliable and professional taxi service in Dharamshala.'
        },
        {
            name: 'Baljeet Singh',
            content: 'I recently had the pleasure of using Chalo Chalein Tour and Travel, and I must say, my experience was very positive. The service provided was excellent, from the seamless booking process to the actual trip. The destinations included in the tour were captivating, and the overall customer service exceeded my expectations. I appreciated the attention to detail, making the journey enjoyable and hassle-free. I would recommend Chalo Chalein for a delightful travel experience.'
        },
        {
            name: 'Pankaj Kapoor',
            content: 'We had a good experience with chalo chlaien tours and travel.Its a good option with decent rates compared to other vendors.The cab was well maintained, neat and clean.Our driver Rahul was very cooperative and guided us very well through out the tour.He never complaint about timings/delays. I would definitely recommend chalo chlaien tours and travel 😊'
        },
        {
            name: 'Akanksha sharma',
            content: 'Best travel company in Dharamshala. If you want to explore Dharamshala with its defining beauty and unexplored places, do contact them. Great experience 💯'
        },
        {
            name: 'Sandhya',
            content: 'I am very much satisfied with the wonderful service of chalo chalein for their good quality of cars, experienced, dutiful and polite Drivers, through knowledge about the root of this Hilly area. I strongly recommend chalo chalein to all Tourists who require quality service at reasonable cost.'
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className={`${styles.testimonial_sec}`}>
                <Slider {...settings} className="testimonial_slider">
                    {testimonialData.map((review) => (
                        <div className={styles.testimonial_card} key={review.name}>
                            <div className={`${styles.testimonial_card_quote} d_flex`}>
                                <FaQuoteLeft />
                            </div>
                            <p className={styles.testimonial_content}>{review.content}</p>
                            <div className={`${styles.testimonial_name_icon} d_flex gap_10`}>
                                <div className={styles.testimonial_icon} style={{ backgroundColor: getRandomColor() }}>
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <h4>{review.name}</h4>
                                    <StarRating rating={5} />
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
};

export default Testimonial;
