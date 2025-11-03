'use client';
import React, { useState } from 'react';
import styles from './FaqCallSec.module.scss';
import Link from 'next/link';
import { MdAddCall } from "react-icons/md";

const FaqCallSec = () => {

    return (
        <div className={styles.faqcallsec}>
            <div className={styles.faqcallsec_main}>
                <div className={styles.faqcallsec_main_icon}>
                    <MdAddCall />
                </div>
                <h3>Do You Still Have Question?</h3>
                <p>Call Anytime</p>
                <Link href="tel:8894460060">+91 8894460060</Link>
            </div>
        </div>
    );
};

export default FaqCallSec;
