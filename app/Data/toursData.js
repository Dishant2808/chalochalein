import { FaTaxi } from "react-icons/fa6";
import { FaBinoculars } from 'react-icons/fa';
import { MdHotel } from 'react-icons/md';
import { GiMeal } from 'react-icons/gi';

const toursData = [
  {
    ImageSrc: "/images/tours/machleodganj.webp",
    tourName: "Mcleodganj Taxi Tour",
    location: 'Dharamshala, Himachal Pradesh',
    inclusion: [
      {
        icon: <FaTaxi />,
        text: 'Transfer'
      },
      {
        icon: <FaBinoculars />,
        text: 'Sightseeing',
      },
      {
        icon: <MdHotel />,
        text: 'Stay',
      }
    ],
    description:
      "Immerse yourself in nature's beauty on our thrilling treks.",
    duration: "1D",
  },
  {
    ImageSrc: "/images/tours/dharamshala-ropeway.webp",
    tourName: "Dharamshala to Mcleodganj Ropeway",
    location: 'Dharamshala, Himachal Pradesh',
    inclusion: [
      {
        icon: <FaTaxi />,
        text: 'Transfer'
      },
      {
        icon: <FaBinoculars />,
        text: 'Sightseeing',
      },
      {
        icon: <MdHotel />,
        text: 'Stay',
      }
    ],
    description:
      "Immerse yourself in nature's beauty on our thrilling treks.",
    duration: "1D",
  },
  {
    ImageSrc: "/images/tours/Baijnath.jpg",
    tourName: "Baijnath Taxi Tour",
    location: 'Baijnath, Himachal Pradesh',
    inclusion: [
      {
        icon: <FaTaxi />,
        text: 'Transfer'
      },
      {
        icon: <FaBinoculars />,
        text: 'Sightseeing',
      },
      {
        icon: <MdHotel />,

        text: 'Stay',
      }
    ],
    description:
      "Immerse yourself in nature's beauty on our thrilling treks.",
    duration: "1D",
  },
  {
    ImageSrc: "/images/tours/dharamshala-taxi-tour.png",
    tourName: "Dharamshala Taxi Tour",
    location: 'Dharamshala, Himachal Pradesh',
    inclusion: [
      {
        icon: <FaTaxi />,
        text: 'Transfer'
      },
      {
        icon: <FaBinoculars />,
        text: 'Sightseeing',
      },
      {
        icon: <MdHotel />,
        text: 'Stay',
      }
    ],
    description:
      "Immerse yourself in nature's beauty on our thrilling treks.",
    duration: "4D/3N",
  },
  {
    ImageSrc: "/images/tours/dalhousie.png",
    tourName: "Dharamshala Dalhousie Taxi Tour",
    location: 'Dharamshala, Himachal Pradesh',
    inclusion: [
      {
        icon: <FaTaxi />,
        text: 'Transfer'
      },
      {
        icon: <FaBinoculars />,
        text: 'Sightseeing',
      },
      {
        icon: <MdHotel />,
        text: 'Stay',
      }
    ],
    description:
      "Immerse yourself in nature's beauty on our thrilling treks.",
    duration: "2D/3N",
  },
  {
    ImageSrc: "/images/destinations/shimla.png",
    tourName: "Dharamshala Dalhousie Manali Shimla Taxi Tour",
    location: 'Dharamshala, Himachal Pradesh',
    inclusion: [

      {
        icon: <FaTaxi />,
        text: 'Transfer'
      },
      {
        icon: <FaBinoculars />,
        text: 'Sightseeing',
      },
      {
        icon: <MdHotel />,
        text: 'Stay',
      }
    ],
    description:
      "Immerse yourself in nature's beauty on our thrilling treks.",
    duration: "11N/12D",
  },
  {
    ImageSrc: "/images/tours/Manali.heic",
    tourName: "Dharamshala Dalhousie Manali Taxi Tour",
    location: 'Dharamshala, Himachal Pradesh',
    inclusion: [
      {
        icon: <FaTaxi />,
        text: 'Transfer'
      },
      {
        icon: <FaBinoculars />,
        text: 'Sightseeing',
      },
      {
        icon: <MdHotel />,
        text: 'Stay',
      }
    ],
    description:
      "Immerse yourself in nature's beauty on our thrilling treks.",
    duration: "(8N/9D)",
  },
  {
    ImageSrc: "/images/tours/devi-darshan.jpg",
    tourName: "Devi Darshan Taxi Tour",
    location: 'Himachal Pradesh',
    inclusion: [
      {
        icon: <FaTaxi />,
        text: 'Transfer'
      },
      {
        icon: <FaBinoculars />,
        text: 'Sightseeing',
      },
      {
        icon: <MdHotel />,
        text: 'Stay',
      }
    ],
    description:
      "Immerse yourself in nature's beauty on our thrilling treks.",
    duration: "2D/3N",
  },
  {
    ImageSrc: "/images/tours/golden-temple.webp",
    tourName: "Golden Temple Taxi Tour",

    inclusion: [
      {
        icon: <FaTaxi />,
        text: 'Transfer'
      },
      {
        icon: <FaBinoculars />,
        text: 'Sightseeing',
      },
      {
        icon: <MdHotel />,
        text: 'Stay',
      }
    ],
    location: 'Amritsar, Punjab',
    title: "Powered Paragliding in Rishikesh",
    description:
      "Immerse yourself in nature's beauty on our thrilling treks.",
    duration: "1N/2D",
  },


  {
    ImageSrc: "/images/tours/chamunda-devi-tour.jpg",
    tourName: "Chamunda Devi Darshan Tour",

    inclusion: [
      {
        icon: <FaTaxi />,
        text: 'Transfer'
      },
      {
        icon: <FaBinoculars />,
        text: 'Sightseeing',
      },
      {
        icon: <GiMeal />,
        text: 'Meal',
      }
    ],
    location: 'Dharamshala',
    description:
      "Immerse yourself in nature's beauty on our thrilling treks.",
    duration: "1D",
    category: 'devi_darshan'
  },
  {
    ImageSrc: "/images/tours/kangra-devi-tour.jpg",
    tourName: "Kangra Devi Darshan Tour",

    inclusion: [
      {
        icon: <FaTaxi />,
        text: 'Transfer'
      },
      {
        icon: <FaBinoculars />,
        text: 'Sightseeing',
      },
      {
        icon: <GiMeal />,
        text: 'Meal',
      }
    ],
    location: 'Kangra',
    description:
      "Immerse yourself in nature's beauty on our thrilling treks.",
    duration: "1D",
    category: 'devi_darshan'
  },
  {
    ImageSrc: "/images/tours/chintpurni-devi-tour.jpg",
    tourName: "Chintpurni Devi Darshan Tour",

    inclusion: [
      {
        icon: <FaTaxi />,
        text: 'Transfer'
      },
      {
        icon: <FaBinoculars />,
        text: 'Sightseeing',
      },
      {
        icon: <GiMeal />,
        text: 'Meal',
      }
    ],
    location: 'Amb, Himachal Pradesh',
    description:
      "Immerse yourself in nature's beauty on our thrilling treks.",
    duration: "1D",
    category: 'devi_darshan'
  },
  {
    ImageSrc: "/images/tours/baglamukhi-devi-tour.jpg",
    tourName: "Baglamukhi Devi Darshan Tour",
    inclusion: [
      {
        icon: <FaTaxi />,
        text: 'Transfer'
      },
      {
        icon: <FaBinoculars />,
        text: 'Sightseeing',
      },
      {
        icon: <GiMeal />,
        text: 'Meal',
      }
    ],
    location: 'Bankhandi, Kangra',
    description:
      "Immerse yourself in nature's beauty on our thrilling treks.",
    duration: "1D",
    category: 'devi_darshan'
  },
  {
    ImageSrc: "/images/tours/jwalaji-devi-tour.webp",
    tourName: "Jwalaji Devi Darshan Tour",
    inclusion: [
      {
        icon: <FaTaxi />,
        text: 'Transfer'
      },
      {
        icon: <FaBinoculars />,
        text: 'Sightseeing',
      },
      {
        icon: <GiMeal />,
        text: 'Meal',
      }
    ],
    location: 'Jawalamukhi, Himachal Pradesh',
    description:
      "Immerse yourself in nature's beauty on our thrilling treks.",
    duration: "1D",
    category: 'devi_darshan'
  },
  {
    ImageSrc: "/images/tours/naina-devi-tour.jpg",
    tourName: "Naina Devi Darshan Tour",
    inclusion: [
      {
        icon: <FaTaxi />,
        text: 'Transfer'
      },
      {
        icon: <FaBinoculars />,
        text: 'Sightseeing',
      },
      {
        icon: <GiMeal />,
        text: 'Meal',
      }
    ],
    location: 'Jawalamukhi, Himachal Pradesh',
    description:
      "Immerse yourself in nature's beauty on our thrilling treks.",
    duration: "1D",
    category: 'devi_darshan'
  },

];

export default toursData;