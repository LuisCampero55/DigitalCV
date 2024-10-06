import { useTranslation } from 'react-i18next';
import styles from './Contact.module.css';
import imageSend from '../assets/send.png';

export const Contact = () => {

    const { t } = useTranslation()

    return (
        <main className={styles.contact}>
            <h1>{t('contact')}</h1>
            <form className={styles.form} method="POST" action="https://getform.io/f/aolgepyb">
                <div className={styles.inputgroup}>
                    <input id="Name" name="Name" className={styles.input} required></input>
                    <label htmlFor="Name">{t('name')}</label>
                </div>
                <div className={styles.inputgroup}>
                    <input id="Email" name="Email" type="Email" className={styles.input} required></input>
                    <label htmlFor="Email">{t('email')}</label>
                </div>
                <div className={styles.inputgroup}>
                    <textarea id="Message" name="Message" className={styles.textArea} required></textarea>
                    <label htmlFor="Message">{t('message')}</label>
                </div>
                    <button type="submit">{t('button')}</button>
            </form>
            <img className={styles.image_banner} src={imageSend} alt="Image"/>
        </main>
    )
}