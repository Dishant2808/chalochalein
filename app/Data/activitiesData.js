import { FaRegSmile } from "react-icons/fa";
import { FaRegMeh } from "react-icons/fa";
import { FaRegDizzy } from "react-icons/fa";

const activitiesData = [
    {
        activity_name: 'Triund Trek, Mcleodganj',
        short_description: `Explore the breathtaking landscapes and adventure expeditions in the cold desert mountain valley of Mcleodganj. Immerse yourself in the serene surroundings and visit ancient monasteries on this 2-day trek. With an easy difficulty level, it's perfect for both beginners and nature enthusiasts.`,
        activity_image: '/images/adventure-activities/trekking/triund-trek.jpg',
        days: "2D-1N",
        difficulty_level: { text: 'Easy', icon: <FaRegSmile /> },
        CTA_text: 'Enquire Now',
        location: 'Dharamshala'
    },
    {
        activity_name: 'Paragliding in Dharamshala',
        short_description: 'Soar through the skies and experience the thrill of paragliding in the picturesque region of Dharamshala. Enjoy a day filled with adrenaline as you glide over the stunning landscapes. This 1-day adventure promises an easy and exhilarating experience suitable for all.',
        activity_image: '/images/adventure-activities/trekking/indrunag-paragliding.webp',
        days: "1D",
        difficulty_level: { text: 'Easy', icon: <FaRegSmile /> },
        CTA_text: 'Enquire Now',
        location: 'Dharamshala'
    },
    {
        activity_name: 'Kareri Lake Trek',
        short_description: 'Embark on a 4-day expedition to the breathtaking Kareri Lake. Known for its challenging trails and mesmerizing landscapes, this trek offers an unforgettable adventure. Challenge yourself with a trek that leads you through diverse terrains and rewards you with stunning views.',
        activity_image: '/images/adventure-activities/trekking/kareri-lake-trek.webp',
        days: "4D-3N",
        difficulty_level: { text: 'Challenging', icon: <FaRegDizzy /> },
        CTA_text: 'Enquire Now',
        location: 'Dharamshala'
    },
    {
        activity_name: 'Indrahar Pass Trek',
        short_description: 'Conquer the challenging trails of the Indrahar Pass on this 4-day trek. Journey through the cold desert mountain valley and explore landscapes that captivate the senses. With a challenging difficulty level, this trek is designed for experienced adventurers seeking a thrilling mountain experience.',
        activity_image: '/images/adventure-activities/trekking/indrahar-paas-trek.jpg',
        days: "4D-3N",
        difficulty_level: { text: 'Challenging', icon: <FaRegDizzy /> },
        CTA_text: 'Enquire Now',
        location: 'Dharamshala'
    },
    {
        activity_name: 'Malana Village Trek',
        short_description: 'Explore the enchanting landscapes and adventure expeditions of the cold desert mountain valley. Immerse yourself in the rich culture of Malana, known for its monasteries and stunning vistas.',
        activity_image: '/images/adventure-activities/trekking/malana-trek.jpg',
        days: "6D",
        difficulty_level: { text: 'Moderate', icon: <FaRegMeh /> },
        CTA_text: 'Enquire Now',
        location: 'Kasol'
    },
    {
        activity_name: 'Kheerganga Trek',
        short_description: 'Embark on a blissful journey through a cold desert mountain valley, renowned for its easy trails and breathtaking landscapes. Experience the tranquility of Kheerganga on this 2-day adventure.',
        activity_image: '/images/adventure-activities/trekking/kheerganga-trek.jpg',
        days: "2D-1N",
        difficulty_level: { text: 'Easy', icon: <FaRegSmile /> },
        CTA_text: 'Enquire Now',
        location: 'Kasol'
    },
    {
        activity_name: 'Paragliding Bir Billing',
        short_description: ' Soar through the skies in Bir Billing, an adventure haven surrounded by majestic mountains. Experience the thrill of paragliding and capture stunning aerial views of the picturesque landscape.',
        activity_image: '/images/adventure-activities/trekking/bir-billing-paragliding.jpg',
        days: "2D-1N",
        difficulty_level: { text: 'Easy', icon: <FaRegSmile /> },
        CTA_text: 'Enquire Now',
        location: 'Bir Billing'
    },
    {
        activity_name: 'Thatharana Trek',
        short_description: 'Discover the hidden gems of Dharamshala with the Thatharana Trek. This 2-day adventure offers easy trails, allowing you to soak in the beauty of the cold desert mountain valley and create lasting memories.',
        activity_image: '/images/adventure-activities/trekking/thatharna-trek.jpg',
        days: "2D-1N",
        difficulty_level: { text: 'Easy', icon: <FaRegSmile /> },
        CTA_text: 'Enquire Now',
        location: 'Dharamshala'
    },
    {
        activity_name: 'Mankiani Pass',
        short_description: ' Explore the cold desert mountain valley of Mankiani Pass, renowned for its breathtaking landscapes, ancient monasteries, and thrilling adventure expeditions. Immerse yourself in a 3-day, 2-night journey through this picturesque region, offering both ease and smiles along the way. Enquire now and embark on an unforgettable experience in the heart of Dharamshala.',
        activity_image: '/images/adventure-activities/camping.jpg',
        days: "3D-2N",
        difficulty_level: { text: 'Easy', icon: <FaRegSmile /> },
        CTA_text: 'Enquire Now',
        location: 'Dharamshala'
    },
    {
        activity_name: 'Snowline Lake Trek',
        short_description: 'Embark on the Snowline Laka Trek, a captivating adventure in the cold desert mountain valley near Dharamshala. This 2-day, 1-night trek offers a moderate challenge, allowing you to experience the beauty of the landscapes and the joy of the journey. Enquire now and discover the wonders of this stunning location.        ',
        activity_image: '/images/adventure-activities/trekking/snow-line-trek.jpg',
        days: "2D-1N",
        difficulty_level: { text: 'Moderate', icon: <FaRegMeh /> },
        CTA_text: 'Enquire Now',
        location: 'Dharamshala'
    },
    {
        activity_name: 'Sar Pass Trek',
        short_description: 'Discover the enchanting landscapes of Kasol through the Sar Pass Trek. This 2-day, 1-night trek provides a moderate challenge, perfect for adventure seekers. Enquire now to experience the thrill of the journey and explore the natural beauty that Kasol has to offer.        ',
        activity_image: '/images/adventure-activities/trekking/sar-paas.webp',
        days: "2D-1N",
        difficulty_level: { text: 'Moderate', icon: <FaRegMeh /> },
        CTA_text: 'Enquire Now',
        location: 'Kasol'
    },
    {
        activity_name: 'Prashar Lake Trek',
        short_description: 'Immerse yourself in the tranquility of Mandi with the Prashar Lake adventure. This 2-day, 1-night journey offers a moderate trekking challenge, allowing you to connect with nature and witness the landscapes that make Mandi unique. Enquire now and embark on a memorable exploration of Prashar Lake.',
        activity_image: '/images/adventure-activities/trekking/parashar-lake-trek.jpg',
        days: "2D-1N",
        difficulty_level: { text: 'Moderate', icon: <FaRegMeh /> },
        CTA_text: 'Enquire Now',
        location: 'Mandi'
    },
    {
        activity_name: 'Rajgundha Trek',
        short_description: 'Explore the cold desert mountain valley of Rajgundha, renowned for its breathtaking landscapes, ancient monasteries, and thrilling adventure expeditions. This 2-day, 1-night trek offers a moderate level of difficulty, providing a perfect blend of natural beauty and exciting challenges. Enquire now and embark on an unforgettable journey in the heart of Bir Billing.',
        activity_image: '/images/adventure-activities/trekking/rajgundha-trek.jpg',
        days: "2D-1N",
        difficulty_level: { text: 'Moderate', icon: <FaRegMeh /> },
        CTA_text: 'Enquire Now',
        location: 'Bir Billing'
    },
    {
        activity_name: 'Kedarkantha Trek',
        short_description: `Immerse yourself in the stunning landscapes of Kedarkantha, a cold desert mountain valley nestled in the picturesque surroundings of Uttarakhand. This 2-day, 1-night trek, with a moderate difficulty level, promises awe-inspiring views and unforgettable adventures. Enquire now to experience the charm and serenity of Uttarakhand's wilderness.        `,
        activity_image: '/images/adventure-activities/trekking/kedarnath-trek.heic',
        days: "2D-1N",
        difficulty_level: { text: 'Moderate', icon: <FaRegMeh /> },
        CTA_text: 'Enquire Now',
        location: 'Uttrakhand'
    },
    {
        activity_name: 'Jakhu Temple Trek',
        short_description: 'Discover the tranquility of Shimla through the Jakhu Temple Trek, a delightful 1-day excursion with an easy difficulty level. Enjoy the scenic beauty surrounding Shimla as you ascend to the renowned Jakhu Temple. Enquire now to partake in this accessible and rewarding trek, immersing yourself in the cultural and natural wonders of Shimla.',
        activity_image: '/images/adventure-activities/trekking/jakhu.jpg',
        days: "1D",
        difficulty_level: { text: 'Easy', icon: <FaRegSmile /> },
        CTA_text: 'Enquire Now',
        location: 'Shimla'
    },
];
export default activitiesData;