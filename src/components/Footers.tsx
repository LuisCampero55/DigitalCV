import { useTranslation } from 'react-i18next';
import styles from './Footers.module.css';
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
export const Footers = () => {

    const { t } = useTranslation()

    return (
        
        <main className={styles.footercontainer}>
            <footer className={styles.footercontainer}>
                <div className={styles.footercontainer}>
                    <a className={styles.footerleft}></a>
                    <div className={styles.footericons}>
                        <ul>
                            <li>
                                <a href='https://github.com/LuisCampero55/'>
                                <FaGithub size={30}/></a>
                            </li>
                            <li>
                                <a href='https://www.linkedin.com/in/dannl55/'>
                                <IoLogoLinkedin size={30}/></a>
                            </li>
                        </ul>
                    </div>
                    {/* Link hacia Contact */}
                    {/*<a className={styles.footerright} href='/contact'>{t("contact")}</a>*/}
                </div>
            </footer>
            <p className={styles.colorp}>
                2024  {t('copy', { name: 'Luis Campero' })}
            </p>
        </main>
    )
}