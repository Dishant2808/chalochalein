import styles from "./WhatsappIcon.module.scss";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";

const WhatsappIcon = () => {
    return (
        <Link href={'https://wa.me/+918894460060'} target="_blank" className={styles.btn_whatsapp_pulse} aria-label="Contact us on WhatsApp">
            <span className="d_flex"><FaWhatsapp /></span>
        </Link>
    );
};
export default WhatsappIcon;
