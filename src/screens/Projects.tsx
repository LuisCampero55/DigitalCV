import { useTranslation } from 'react-i18next';
import styles from './Projects.module.css';
import imageOne from "./../assets/game.png";
import imageTwo from "./../assets/machine.png";
import { FaJava } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaAngular } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiPhpmyadmin } from "react-icons/si";
import { DiCodeigniter } from "react-icons/di";
import { FaPhp } from "react-icons/fa";
import { GiDinosaurRex } from "react-icons/gi";

export const Projects = () => {

    const { t } = useTranslation()

    return (
        <main className={styles.projects}>
            <div>
                <h1>{t('projects')}</h1>
            </div>
            <div>
                <h2 className={styles.h2}>
                    <li className={styles.sli}>
                        <a href='https://github.com/LuisCampero55/TheGame' className={styles.sc}>The Game</a>
                    </li>
                </h2>
                <span className={styles.text}>{t('desP1')}</span>
                <center><a href='https://github.com/LuisCampero55/TheGame'><img className={styles.imagegame} src={imageOne} alt="Image"/></a></center>
                <FaJava size={50}/> <SiMysql size={50}/>
                <center><p className={styles.stepBorder}/></center>
            </div>
            <div>
                <h2 className={styles.h2}>
                    <li className={styles.sli}>
                        <a href='https://github.com/LuisCampero55/ProyectoPaqueteriaEquipoRoma' className={styles.sc}>{t('titleP2')}</a>
                    </li>
                </h2>
                <span className={styles.text}>{t('desP2')}</span><br/><br/>
                <FaAngular size={50}/> <IoLogoJavascript size={50}/> <SiPhpmyadmin size={50}/>
                <center><p className={styles.stepBorder}/></center>
            </div>
            <div>
                <h2 className={styles.h2}>
                    <li className={styles.sli}>
                        <a href='https://github.com/LuisCampero55/Vending-Machine' className={styles.sc}>{t('titleP3')}</a>
                    </li>
                </h2>
                <span className={styles.text}>{t('desP3')}</span>
                <center><a href='https://github.com/LuisCampero55/Vending-Machine'><img className={styles.imagemachine} src={imageTwo} alt="Image"/></a></center>
                <FaJava size={50}/> 
                <center><p className={styles.stepBorder}/></center>
            </div>
            <div>
                <h2 className={styles.h2}>{t('titleP4')}</h2>
                <span className={styles.text}>{t('desP4')}</span><br/><br/>
                <FaPhp size={50}/> <DiCodeigniter size={50}/> <SiPhpmyadmin size={50}/>
                <center><p className={styles.stepBorder}/></center>
            </div>
            <div>
                <h2 className={styles.h2}>
                    <li className={styles.sli}>
                        <a href='https://github.com/LuisCampero55/Cobol' className={styles.sc}>{t('titleP5')}</a>
                    </li>
                </h2>
                <span className={styles.text}>{t('desP5')}</span><br/><br/>
                <GiDinosaurRex size={50}/>
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