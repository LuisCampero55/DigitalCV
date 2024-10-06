import { useTranslation } from 'react-i18next'
import styles from './Home.module.css';
import imagePrograming from '../assets/programing.png'

export const Home = () => {

    const { t } = useTranslation()

    return (
        <main className={styles.home}>
            <h1>{t('title', { name: 'Luis Campero' })}</h1>
            <h2>{t('subtitle')}</h2>
            <span>{t('label')} </span>
            <img className={styles.image_banner} src={imagePrograming} alt="Image"/>
        </main>
    )
}
