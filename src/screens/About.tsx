import { useTranslation } from 'react-i18next';
import styles from './About.module.css';
import imageBio from '../assets/bio.png';

export const About = () => {

    const { t } = useTranslation()

    return (
        <main className={styles.about}>
            <h1>{t('about')}</h1>
            <span>{t('desabout')}</span>
            <img className={styles.image_banner} src={imageBio} alt="Image"/>
        </main>
    )
}