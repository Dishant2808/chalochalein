
import Image from 'next/image';
import styles from './Loader.module.scss';

export default function Loader() {
    return (
        <div className={styles.loader_overlay}>
            <Image src="/vectors/taxi-cab.gif" width={150} height={150} alt={'Taxi Loader'}></Image>
            <p>Loading ...</p>
        </div>
    )
}
