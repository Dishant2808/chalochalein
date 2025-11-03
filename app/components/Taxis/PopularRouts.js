import Image from "next/image";
import Link from "next/link";
import styles from './Taxis.module.scss';

const PopularRoutes = () => {

    const popularRoutes = [
        {
            id: 1,
            title: 'Dharamshala to Shimla Taxi',
            route_img: '/images/tours/Shimla.jpg',
        },
        {
            id: 2, title: 'Dharamshala to Dalhousie Taxi',
            route_img: '/images/tours/dalhousie.png',
        },
        {
            id: 3, title: 'Dharamshala to Rampur Taxi',
            route_img: '/images/adventure-activities/trekking/triund-trek.jpg',
        },
        {
            id: 4, title: 'Dharamshala To Katra Taxi Service',
            route_img: '/images/adventure-activities/trekking/kareri-lake-trek.webp',

        },
        {
            id: 5, title: 'Dharamshala To Jalandhar Taxi',
            route_img: '/images/adventure-activities/trekking/indrahar-paas-trek.jpg',

        },
        {
            id: 6, title: 'Dharamshala To Gurugram Taxi',
            route_img: '/images/adventure-activities/trekking/malana-trek.jpg',

        },
        {
            id: 7, title: 'Dharamshala To Amritsar Taxi',
            route_img: '/images/adventure-activities/trekking/kheerganga-trek.jpg',

        },
        {
            id: 8, title: 'Dharamshala To Chandigarh Taxi',
            route_img: '/images/adventure-activities/trekking/bir-billing-paragliding.jpg',

        },
        {
            id: 9, title: 'Gagret To Dharamshala Taxi',
            route_img: '/images/adventure-activities/trekking/thatharna-trek.jpg',

        },
        {
            id: 10, title: 'Dharamshala Jwalaji Taxi',
            route_img: '/images/adventure-activities/camping.webp',

        },
        {
            id: 11, title: 'Dharamshala Chintapurni Taxi',
            route_img: '/images/adventure-activities/trekking/snow-line-trek.jpg',

        },
        {
            id: 12, title: 'Sirmour To Dharamahala Taxi',
            route_img: '/images/tours/Shimla.jpg',

        },
        {
            id: 13, title: 'Mecleodganj To Dharamshala Taxi',
            route_img: '/images/tours/machleodganj.webp',
        },
        {
            id: 14, title: 'Dharamshala to Kullu Taxi',
            route_img: '/images/destinations/kullu.png',
        },
        {
            id: 15, title: 'Dharamahala To Delhi Taxi',
            route_img: '/images/tours/Baijnath.jpg',

        },
        {
            id: 16, title: 'Una To Dharamshala Taxi',
            route_img: '/images/tours/Shimla.jpg',

        },
        {
            id: 18, title: 'Dharamshala to Dalhousie Taxi',
            route_img: '/images/tours/dharamshala-taxi-tour.png',
        },
        {
            id: 19, title: 'Dharamshala to Chamba Taxi',
            route_img: '/images/tours/golden-temple.webp',
        },
        { id: 20, title: 'Dharamshala to Mandi Taxi' ,  route_img: '/images/tours/dalhousie.png',},
        {
            id: 21, title: 'Dharamshala to Manali Taxi',
            route_img: '/images/tours/Baijnath.jpg',
        },
        {
            id: 22, title: 'Dharamshala to Rohtang Taxi',
            route_img: '/images/destinations/manali.png',
        },
        { id: 23, title: 'Dharamshala to Leh Taxi',  route_img: '/images/tours/dharamshala-ropeway.webp', },
        { id: 24, title: 'Dharamshala to Solan Taxi',  route_img: '/images/tours/golden-temple.webp', },
        { id: 25, title: 'Hamirpur To Dharamshala Taxi',  route_img: '/images/tours/dharamshala-taxi-tour.png', },
        {
            id: 26, title: 'Bilaspur To Dharmahala Taxi',  route_img: '/images/tours/dalhousie.png',
        },
        { id: 27, title: 'Dharamshala To Baddi Taxi',  route_img: '/images/tours/dharamshala-ropeway.webp', },
        { id: 28, title: 'Dharamshala To Haridwar Taxi',  route_img: '/images/destinations/dharamshala.png', },
        { id: 29, title: 'Dharamshala To Jammu Taxi',  route_img: '/images/tours/golden-temple.webp', },
        { id: 30, title: 'Dharamshala To Ludhiana Taxi',  route_img: '/images/tours/dalhousie.png', },
        { id: 31, title: 'Dharamshala To Pathankot Taxi',  route_img: '/images/tours/Baijnath.jpg', },
        { id: 32, title: 'Kasol To Dharamshala Taxi',  route_img: '/images/tours/dharamshala-taxi-tour.png', },
        { id: 33, title: 'Dharamshala To Chamunda Taxi',  route_img: '/images/tours/devi-darshan.jpg', }
    ];

    return (
        <>
            <section className={`${styles.popular_routes} common_margin`}>
                <div className="container">
                    <div className="common_heading">
                        <h4>Chalo Chalein Routes</h4>
                        <h5>Discover Our Top Destinations</h5>
                        <span></span>
                    </div>
                    <div className={styles.popular_routes_main}>
                        {popularRoutes.map((route) => (
                            <div className={styles.popular_routes_child} key={route.id}>
                                <Link href='tel:8894460060' aria-label={'Book' + route.title}></Link>
                                <div className={styles.popular_routes_child_image}>
                                    <Image src={route.route_img} fill={true} alt={route.title} />
                                </div>
                                <div className={styles.popular_routes_child_right}>
                                    <p>{route.title}</p>
                                    <span aria-label={'Book' + route.title}>Book Now</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default PopularRoutes;
