import React from 'react'
import {Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import LanguageIcon from '@mui/icons-material/Language';
import { useState, useEffect } from 'react';
import "bootstrap";
import MenuIcon from '@mui/icons-material/Menu';
export default function Navbar({logo}) {
  const { i18n } = useTranslation()
  const { t } = useTranslation()
  const token = window.localStorage.getItem('i18nextLng')
  const changeLanguage = (lang) => {
      i18n.changeLanguage(lang);
    };
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 120);
    });
  }, []);

  return (
     <ul className={`${ scroll ? ' Navbar nav ': 'Navbar'}`}>
       <li className='NavleftPart'>
         <ul>
          <li className='siteLogo'> 
          <img className='sitLogo' src={logo} alt="" width={120} height='100px'/>
          </li>
         </ul>
       </li>
       <li>
         <ul className='NavRightPart'>
      <li className='siteSection' ><Link activeClass="active" to="section1" spy={true} smooth={true} offset={-70} duration={500}>
    {t('About us')}
  </Link></li>
      <li className='siteSection'><Link activeClass="active" to="section2" spy={true} smooth={true} offset={-70} duration={500}>
    {t('Services')}
  </Link></li>
      <li className='siteSection'><Link activeClass="active" to="section3" spy={true} smooth={true} offset={-70} duration={500}>
    {t('Portfolio')}
  </Link></li>
      <li className='siteSection'> <a className='contactLink' href='tel:+998903556052'>+998 90 3556052</a> </li>
      <li className='sitelanguage'>
        <div className='langButton'>
          <LanguageIcon className='mt-2 ms-2'></LanguageIcon>
          {token === 'en' && (
            <button className=" enLang me-2 me-2" onClick={() => changeLanguage('en')}>EN</button>
            )}
        {token === 'uzb'  &&  (
          <button className="uzbLang me-2" onClick={() => changeLanguage('uzb')}>UZB</button>
          )}
          {
            token === 'en' &&(
              <button className="Android me-2  text-dark " onClick={() => changeLanguage('uzb')}>UZB</button>
            )
          }
            {
            token === 'uzb' &&(
              <button className="Android me-2 text-dark " onClick={() => changeLanguage('en')}>EN</button>
            )
          }
        </div>
        </li>
        <li className='hiddenItem'>
          <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
    <MenuIcon></MenuIcon>
  </button>
  <ul className="dropdown-menu bg-secondary" aria-labelledby="dropdownMenu2">
    <li><button className="dropdown-item" type="button"><Link activeClass="active" to="section1" spy={true} smooth={true} offset={-70} duration={500}> {t('About us')} </Link></button></li>
    <li><button className="dropdown-item" type="button"><Link activeClass="active" to="section2" spy={true} smooth={true} offset={-70} duration={500}>{t('Services')}</Link></button></li>
    <li><button className="dropdown-item" type="button"><Link activeClass="active" to="section3" spy={true} smooth={true} offset={-70} duration={500}>{t('Portfolio')}</Link></button></li>
  </ul>
          </div>
        </li>
         </ul>
       </li>
     </ul>
  )
}
