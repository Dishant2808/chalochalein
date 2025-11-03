'use client';
import React, { useState } from 'react';
import styles from './Accordion.module.scss';

const Accordion = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(0);

    const handleItemClick = (index) => {
        setOpenIndex(index === openIndex ? -1 : index);
    };

    return (
        <>
            {items && items.map((item, index) => (
                <div key={index} className={`${styles.accordionItem} ${index === openIndex ? styles.open : ''}`}>
                    <div className={styles.accordionHeader} onClick={() => handleItemClick(index)}>
                        <h3 className={styles.accordionQuestion}>{item.question}</h3>
                        <div className={styles.accordion_btn}>
                            <button className={`${styles.accordionIcon} ${index === openIndex ? styles.opened : ''}`}>
                                <span>{index === openIndex ? '-' : '+'}</span>
                            </button>
                        </div>
                    </div>
                    {index === openIndex && (
                        <div className={styles.accordionContent}>
                            <p className={styles.contentInner}>{item.answer}</p>
                        </div>
                    )}
                </div>
            ))}
        </>
    );
};

export default Accordion;