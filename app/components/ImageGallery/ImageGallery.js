'use client';
import Image from "next/image";
import Link from "next/link";
import styles from './ImageGallery.module.scss';
import { useEffect, useState } from "react";
import { CiCircleChevRight, CiCircleChevLeft } from "react-icons/ci";
import Slider from "react-slick";

const ImageGallery = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const [imageLoading, setImageLoading] = useState(false);

    const galleryImages = [
        {
            id: 1,
            title: 'Dharamshala Taxi',
            route_img: '/images/gallery/chalo-chalein-gallery-1.jpg',
        },
        {
            id: 2, title: ' Dalhousie Taxi',
            route_img: '/images/gallery/chalo-chalein-gallery-2.jpg',
        },
        {
            id: 3, title: ' Rampur Taxi',
            route_img: '/images/gallery/chalo-chalein-gallery-3.jpg',
        },
        {
            id: 4, title: ' Katra Taxi Service',
            route_img: '/images/gallery/chalo-chalein-gallery-4.jpg',
        },
        {
            id: 5, title: ' Jalandhar Taxi',
            route_img: '/images/gallery/chalo-chalein-gallery-5.jpg',
        },
        {
            id: 6, title: ' Gurugram Taxi',
            route_img: '/images/gallery/chalo-chalein-gallery-6.jpg',
        },
        {
            id: 7, title: ' Amritsar Taxi',
            route_img: '/images/gallery/chalo-chalein-gallery-7.jpg',
        },
        {
            id: 8, title: 'Chandigarh Taxi',
            route_img: '/images/gallery/chalo-chalein-gallery-8.jpg',
        },
        {
            id: 9, title: 'Gagret Taxi',
            route_img: '/images/gallery/chalo-chalein-gallery-9.jpg',
        },
        {
            id: 10, title: ' Jwalaji Taxi',
            route_img: '/images/gallery/chalo-chalein-gallery-10.jpg',
        },
        {
            id: 11, title: 'Dharamshala Taxi',
            route_img: '/images/gallery/chalo-chalein-gallery-11.jpg',
        },
        {
            id: 12, title: 'Sirmour Taxi',
            route_img: '/images/gallery/chalo-chalein-gallery-12.jpg',
        },
    ];

    const openModal = (index) => {
        setSelectedImageIndex(index);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedImageIndex(null); // Reset selected image index when closing modal
    };

    const goToPrevious = (e) => {
        e.stopPropagation();
        setSelectedImageIndex((prevIndex) => (prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1));
    };

    const goToNext = (e) => {
        e.stopPropagation();
        setSelectedImageIndex((prevIndex) => (prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        setIsMobile(window.innerWidth <= 768);

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        // autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: "40px",
                },
            },
            {
                breakpoint: 480,
                settings: {
                    // className: "center",
                    // infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: "40px",
                },
            },
        ],
    };

    return (
        <>
            {isMobile ? (
                <>
                    <div className="container">
                        <div className="common_heading">
                            <h4>Chalo Chalein Gallery</h4>
                            <h5>Capturing Travel Moments</h5>
                            <span></span>
                        </div>
                    </div>
                    <Slider {...settings} className="insta_gallery_slider">
                        {galleryImages && galleryImages.map((gallery, index) => (
                            <div className="instaimg" key={index}>
                                <Image width={381} height={400} src={gallery.route_img} alt={gallery.title}></Image>
                                {/* <Link href={feed.permalink} target="_blank" className="middle">
                                <Image src="/icons/instagram-icon.svg" height={30} width={30} alt='InstaIcon'></Image>
                            </Link> */}
                            </div>
                        ))}
                    </Slider>
                </>
            ) : (
                <>
                    <section className={`${styles.image_gallery} common_margin`}>
                        <div className="container">
                            <div className="common_heading">
                                <h4>Chalo Chalein Gallery</h4>
                                <h5>Capturing Travel Moments</h5>
                                <span></span>
                            </div>
                            <div className={styles.image_gallery_main}>
                                {galleryImages.map((gallery, index) => (
                                    <div className={styles.image_gallery_main_child} key={gallery.id}>
                                        <Image src={gallery.route_img} fill={true} onClick={() => openModal(index)} alt={gallery.title} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                    {modalOpen && (
                        <div className={styles.modal_overlay} onClick={closeModal} >
                            <button className={styles.close_button} onClick={closeModal}>
                                &times;
                            </button>
                            {selectedImageIndex !== null ? ( // Check if an image is selected
                                <>
                                    <img
                                        src={galleryImages[selectedImageIndex].route_img}
                                        alt={galleryImages[selectedImageIndex].title}
                                    />
                                    <button className={styles.prev_button} onClick={goToPrevious}>
                                        <CiCircleChevLeft />
                                    </button>
                                    <button className={styles.next_button} onClick={goToNext}>
                                        <CiCircleChevRight />
                                    </button>
                                </>
                            ) : (
                                <div className={styles.loader}></div>
                            )}
                        </div>
                    )}
                </>
            )}
        </>
    );
};

export default ImageGallery;
