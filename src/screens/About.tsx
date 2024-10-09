import { useTranslation } from 'react-i18next';
import styles from './About.module.css';
import imageBio from '../assets/bio.png';

export const About = () => {

    const { t } = useTranslation()

    return (
        <main className={styles.about}>
            <h1>{t('about')}</h1>
            <span>{t('desabout')}</span>
            <div className={styles.timelinegood}>
                <div className={styles.containerLeft}>
                    <div className={styles.textbox}>
                        <h2>{t('timelinetitle1')}</h2>
                        <small>{t('timelinetime1')}</small>
                        <p>{t('timelinedes1')}</p>
                    </div>
                </div>
                <div className={styles.containerRight}>
                    <div className={styles.textbox}>
                        <h2>{t('timelinetitle2')}</h2>
                        <small >{t('timelinetime2')}</small>
                        <p>{t('timelinedes2')}</p>
                    </div>
                </div>
                <div className={styles.containerLeft}>
                    <div className={styles.textbox}>
                        <h2>{t('timelinetitle3')}</h2>
                        <small >{t('timelinetime3')}</small>
                        <p>{t('timelinedes3')}</p>
                    </div>
                </div>
            </div>
            <img className={styles.image_banner} src={imageBio} alt="Image"/>
        </main>
    )
}