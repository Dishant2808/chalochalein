import styles from '../../styles/pages/destination.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import blogsData from '../../Data/blogsData';

function getSingleBlogs(slug) {
    return blogsData.find(blog => blog.slug === slug);
}

function getOtherBlogs(slug) {
    return blogsData.filter(blog => blog.slug !== slug);
}

export async function generateMetadata({ params }) {
    const single_blog = getSingleBlogs(params?.slug);
    return {
        title: single_blog.title,
        description: single_blog?.metaDescription,
        alternates: {
            canonical: `https://www.chalochaleinhimachal.com/blogs/${single_blog?.slug}`,
        }
    }
}

const page = ({ params }) => {
    const single_blog = getSingleBlogs(params?.slug);
    const otherBlogs = getOtherBlogs(params?.slug);

    if (!single_blog) {
        return <div>Blogs not found</div>;
    }

    return (
        <>
            <section className={`${styles.single_blog} common_margin`}>
                <div className='container'>
                    <div className={` ${styles.single_blog_parent} d_flex gap_20 justify_content_between`}>
                        <div className={styles.single_blog_parent_left}>
                            <h1 className={styles.blog_title}>{single_blog.title}</h1>
                            <p className={styles.blog_description}>{single_blog.description}</p>
                            <div className={styles.blog_content} dangerouslySetInnerHTML={{ __html: single_blog?.content }} />
                        </div>
                        <div className={styles.single_blog_parent_right}>
                            <div className={`${styles.recent_top} common_title`}>
                                <h3 className='text-white'>Recent Blogs</h3>
                            </div>
                            <div className={styles.recent_bottom}>
                                {otherBlogs && otherBlogs.map((recentBlog) => (
                                    <div key={recentBlog.slug}>
                                        <Link href={`/blogs/${recentBlog.slug}`} className={`${styles.recent_bottom_main} d_flex align_items_center`}>
                                            <div className={styles.recent_bottom_main_image}>
                                                <Image src={recentBlog.ImageSrc} alt={single_blog.title} width={60} height={60}></Image>
                                            </div>
                                            <p className='m-0 ps-2'>{recentBlog.title}</p>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default page;
