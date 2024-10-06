import { useTranslation } from 'react-i18next';
import styles from './Projects.module.css';
import imageOne from "./../assets/game.png";
import imageTwo from "./../assets/machine.png";
import { FaJava } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaAngular } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiPhpmyadmin } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { DiCodeigniter } from "react-icons/di";

export const Projects = () => {

    const { t } = useTranslation()

    return (
        <main className={styles.projects}>
            <div>
                <h1>{t('projects')}</h1>
            </div>
            <div>
                <h2 className={styles.h2}>The Game</h2>
                <span className={styles.text}>{t('desP1')}</span>
                <center><img className={styles.imagegame} src={imageOne} alt="Image"/></center>
                <FaJava size={50}/> <SiMysql size={50}/>
                <center><p className={styles.stepBorder}/></center>
            </div>
            <div>
                <h2 className={styles.h2}>{t('titleP2')}</h2>
                <span className={styles.text}>{t('desP2')}</span><br/><br/>
                <FaAngular size={50}/> <IoLogoJavascript size={50}/> <SiPhpmyadmin size={50}/>
                <center><p className={styles.stepBorder}/></center>
            </div>
            <div>
                <h2 className={styles.h2}>{t('titleP3')}</h2>
                <span className={styles.text}>{t('desP3')}</span>
                <center><img className={styles.imagemachine} src={imageTwo} alt="Image"/></center>
                <FaJava size={50}/> 
                <center><p className={styles.stepBorder}/></center>
            </div>
            <div>
                <h2 className={styles.h2}>{t('titleP4')}</h2>
                <span className={styles.text}>{t('desP4')}</span><br/><br/>
                <FaPython size={50}/> <DiCodeigniter size={50}/> <SiPhpmyadmin size={50}/>
                <center><p className={styles.stepBorder}/></center>
            </div>
            <div>
                <h2 className={styles.h2}>{t('titlePFinal')}</h2>
                <span className={styles.text}>{t('desPFinal')}</span>
            </div>
        </main>
  )
}

export default Projects