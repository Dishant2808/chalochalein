'use client'
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./Forms.module.scss"
import { showErrorToast, showSuccessToast } from "../../utils/toastUtils";

export default function BookTaxiForm() {
  const [date, setDate] = useState(new Date());
  const [sending, setSending] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    nooftravellers: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendBookTaxiForm = async (e) => {
    e.preventDefault();
    setSending(true);
    const formattedDate = date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });

    const response = await fetch('/api/sendbooktaxiform', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        nooftravellers: formData.nooftravellers,
        date: formattedDate,
      })
    });

    if (response.status === 200) {
      setSending(false);
      showSuccessToast("Message Submit Successfuly!")
      setFormData({ name: '', email: '', phoneNumber: '', nooftravellers: '' });
    } else {
      setSending(false);
      showErrorToast("Something Went Wrong. Please Try Again Later...")
    }
  };

  return (
    <>
      <div className={`${styles.book_taxi_form} card`}>
        <h4>Book Your Ride</h4>
        <form onSubmit={sendBookTaxiForm}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={handleInputChange}
            required />
          <input type="number" name="phoneNumber" placeholder="Phone Number" onChange={handleInputChange} required />
          <input type="email" name="email" placeholder="Email Address" onChange={handleInputChange} required />
          <input type="text" name="nooftravellers" placeholder="Number of Traveller." onChange={handleInputChange} required />
          <div className="booktaxiform__date_picker_wrapper">
            <DatePicker label="Select Date"
              id='dateofdeparture'
              className={`${styles.date_picker} px-2`}
              minDate={new Date()}
              selected={date}
              onChange={(date) => setDate(date)}
              required
            />
          </div>
          <button type="submit" className="common_btn justify_content_center">Request Service</button>
          {sending && <p className={styles.sending_msg}>Sending, Please Wait!</p>}
        </form>

      </div>
      <div className={styles.info_contact}>
        <p>For more information :</p>
        <Link href="tel:8894460060">
          +91 8894460060
        </Link>
      </div>
    </>
  );
}