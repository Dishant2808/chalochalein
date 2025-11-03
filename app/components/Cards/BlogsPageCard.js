'use client';
import Image from 'next/image';
import styles from './Cards.module.scss';
import Link from 'next/link';
import { CiCalendar } from "react-icons/ci";

export default function BlogsPageCard({ blog }) {
    return (
        <div className={styles.blog_card}>
            <div className={styles.card_top}>
                <div className={styles.card_image}>
                    <Image
                        className={styles.image}
                        src={blog.ImageSrc}
                        fill={true}
                        alt={blog.title}
                    />
                </div>
            </div>
            <div className={`${styles.card_content}`}>
                <h4>{blog.title}</h4>
                <p>{blog.description}</p>
                <span><CiCalendar /> {blog.date}</span>
                <div className='d_flex justify_content_between align_items_center'>
                    {/* <span>{blog.date}</span> */}
                    <Link href={`blogs/${blog.slug}`} className={styles.readmore_btn}>Read More</Link>
                </div>
            </div>
        </div>
    )
}
