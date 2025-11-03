'use client'
import styles from "./ContactUsComponent.module.scss";
// import Pagebanner from "../Pagebanner/Pagebanner";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { showErrorToast, showSuccessToast } from "../../utils/toastUtils";
import { IoCall } from "react-icons/io5";
import { IoMdMailUnread } from "react-icons/io";
import { PiMapPinFill } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";

function ContactUsComponent() {
    const [sending, setSending] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        phoneNumber: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

    };

    const sendMail = async (e) => {
        e.preventDefault();
        setSending(true);
        const response = await fetch('/api/sendContactForm', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                name: formData.name,
                email: formData.email,
                message: formData.message,
                phoneNumber: formData.phoneNumber
            })
        });

        if (response.status === 200) {
            showSuccessToast("Message Submit Successfuly!")
            setSending(false);
            setFormData({ name: '', email: '', message: '', phoneNumber: '' });
        } else {
            setSending(false);
            showErrorToast("Something Went Wrong. Please Try Again Later...")
        }
    };

    return (
        <>
            <section className={styles.footer_sec}>
                <div className="container">
                    <div className="common_margin">
                        <div className={styles.contact_main}>
                            <div className={styles.contact_main_left}>
                                <div className={`${styles.contact_main_left_details}`}>
                                    <h4 className="text-white"> Get In Touch</h4>
                                    <div className={styles.contact_main_left_details_child}>
                                        <IoCall />
                                        <Link href="tel:8894460060" className={styles.contact_links}>
                                            8894460060
                                        </Link>
                                    </div>
                                    <div className={styles.contact_main_left_details_child}>
                                        <IoMdMailUnread />
                                        <Link href="mailto:chalochaleinhimachal@gmail.com" className={styles.contact_links}>
                                            chalochaleinhimachal@gmail.com
                                        </Link>
                                    </div>
                                    <div className={styles.contact_main_left_details_child}>
                                        <PiMapPinFill />
                                        <Link href="https://maps.app.goo.gl/3XAQGtFt4k7oMKDq6" className={styles.contact_links}>
                                            Shyam Nagar, Uparli Barol, Dharamshala, Himachal Pradesh 176215
                                        </Link>
                                    </div>
                                    <div className="d_flex gap_10">
                                        <Link href="https://www.facebook.com/people/Chalo-Chalein-Tours-and-Travels/61556841593754/?mibextid=ZbWKwL" target="_blank" className={styles.round_icons}>
                                            <FaFacebookF />
                                        </Link>
                                        <Link href="https://www.instagram.com/chalochaleinhimachal" target="_blank" className={styles.round_icons}>
                                            <FiInstagram />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.contact_main_right}>
                                <form
                                    className={styles.contact_form}
                                    onSubmit={sendMail}
                                >
                                    <div className={styles.form_group}>
                                        <label htmlFor="name">
                                            Name:
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            id="name"
                                            name="name"
                                            placeholder="Full Name"
                                            required
                                        />
                                    </div>
                                    <div className={styles.form_group}>
                                        <label htmlFor="phone " >
                                            Phone Number:
                                        </label>
                                        <input
                                            type="tel"
                                            className="form-control"
                                            id="phoneNumber"
                                            name="phoneNumber"
                                            value={formData.phoneNumber}
                                            onChange={handleInputChange}
                                            placeholder="77788-89990"
                                            required
                                        />
                                    </div>
                                    <div className={styles.form_group}>
                                        <label htmlFor="email">
                                            Email Address:
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            id="email"
                                            name="email"
                                            placeholder="example@email.com"
                                            required
                                        />
                                    </div>
                                    <div className={styles.form_group}>
                                        <label htmlFor="message">
                                            Message:
                                        </label>
                                        <textarea
                                            className="form-control"
                                            id="message"
                                            name="message"
                                            style={{ resize: 'vertical' }}
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            rows="4"
                                            placeholder="Write Your Message..."
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="common_btn justify_content_center">
                                        Send Message
                                    </button>
                                    {sending && <p className={styles.sending_msg}>Sending, Please Wait!</p>}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2007.2397935734793!2d76.32651030811837!3d32.21065684345586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x29892b774742b635%3A0x5244c2d8b236f47f!2sChalo%20Chalein%20Tours%20and%20Travel!5e0!3m2!1sen!2sin!4v1708517075479!5m2!1sen!2sin"
                    width="100%" height="450"
                    allowFullScreen=""
                    style={{ border: '0' }}
                    loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </section>
        </>
    );
}

export default ContactUsComponent;

