import styles from '../styles/pages/tours.module.scss';
import PageTopBanner from "../components/Banners/PageTopBanner";
import SEOContent from '../components/SEOContent/SEOContent'
import BlogsPageCard from "../components/Cards/BlogsPageCard";
import blogsData from '../Data/blogsData';

export const metadata = {
    title: 'Explore Inspiring Travel Stories and Tips | Chalo Chalein Blog',
    description: 'Discover a treasure trove of travel inspiration and practical tips on the Chalo Chalein blog. Dive into captivating stories, insightful guides, and expert advice to plan your next adventure in Himachal Pradesh and beyond.',
    alternates: {
        canonical: 'https://www.chalochaleinhimachal.com/blogs',
    }
}

export default function Blogs() {
    return (
        <>
            <PageTopBanner
                bannerImage={'/images/banners/blogs-page-banner.webp'}
                title={'Blogs'}
                subtitle={'Explore Inspiring Travel Stories and Tips on Our Blog'}
                altTag={'Blogs Chalo Chalein'}
            />
            <SEOContent
                title="Explore Our Travel Blog for Adventure Stories and Insider Tips"
                description={`Dive into our travel blog for a wealth of adventure stories, insider tips, and destination guides. Discover the best trekking trails, camping spots, paragliding experiences, and more in Himachal Pradesh. Let our blog inspire your next journey and help you plan an unforgettable adventure in the heart of the Himalayas. Let's explore together!`}
            />

            <section className={`${styles.blogs_page} common_margin`}>
                <div className="container">
                    <div className={styles.blogs_page_cards}>
                        {blogsData && blogsData.map((blog) => (
                            <div className={styles.blogs_page_card} key={blog.title}>
                                <BlogsPageCard blog={blog} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
