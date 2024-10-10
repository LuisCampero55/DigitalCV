import React from 'react'
import { Languages } from '../constants'
import styles from './NavBar.module.css'
import { FaUser } from 'react-icons/fa'
import { FaDiagramProject } from 'react-icons/fa6'
import { IoHome } from 'react-icons/io5'
import { MdContactMail } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const isActive = ({ isActive }: any) => `link ${isActive ? 'active' : ''}`

export const NavBar = () => {
    const { i18n, t} = useTranslation()
    const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const lang_code = e.target.value
        i18n.changeLanguage(lang_code)
    }
  return (
    <nav className={styles.fixed}>
            <div className={styles.navigation}>
                <NavLink className={isActive} to='/'><center><IoHome className={styles.icon}/></center><br/>{t('home')}</NavLink>
                <NavLink className={isActive} to='/about'><center><FaUser /></center><br/>{t('about')}</NavLink>
                <NavLink className={isActive} to='/projects'><center><FaDiagramProject /></center><br/>{t('projects')}</NavLink>
                <NavLink className={isActive} to='/contact'><center><MdContactMail /></center><br/>{t('contact')}</NavLink>
            </div>
            <div className={styles.box}>
                <select defaultValue={i18n.language} onChange={onChangeLang}  >
                    {
                        Languages.map(({ code, label }) => (
                            <option
                                key={code}
                                value={code}
                            >{label}</option>
                        ))
                    }
                </select>    
            </div>
        </nav>
  )
}
