'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from './CallButton.module.scss';
import { IoMdCall } from "react-icons/io";
import Link from 'next/link';

const CallNowButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const phoneRef = useRef(null);
    const phoneNumber = "88944-60060"; // Replace with your phone number

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const handleIconClick = (e) => {
        e.stopPropagation(); // Prevent event bubbling to parent div
        handleClick();
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (phoneRef.current && !phoneRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className={`${styles.call_now_button} ${isOpen ? `${styles.open}` : ''}`}>
            <IoMdCall onClick={handleIconClick} />
            <div ref={phoneRef} className={styles.phone_number}>
                <Link href="tel:+918894460060">{phoneNumber}</Link>
            </div>
        </div>
    );
};

export default CallNowButton;
