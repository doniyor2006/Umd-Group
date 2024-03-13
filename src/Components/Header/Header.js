import React from 'react'
import {Link} from 'react-scroll';
import { useTranslation } from 'react-i18next';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PhoneIcon from '@mui/icons-material/Phone';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
export default function Header() {
  const { t } = useTranslation()
  useEffect(() => {
    AOS.init({
      once: true, 
      duration: 1000,
    });
  }, []);
  return (

    <div className='Header'>
     
      <div className="headerLeft">
        <h1 className='headerTitle' data-aos="fade-up" data-aos-duration='1500'>{t("We offer digital solutions")}</h1>
        <p className='headerPtag' data-aos="fade-down" data-aos-duration='1500'>{t("IN ANY DIFFICULTY")}</p>
        <div className="headerButtons"data-aos="fade-up-left" data-aos-duration='1500'>
        <button type="button" className="btn btn-outline-info text-white w-50 px-2 py-2 fs-6" data-aos="fade-down" data-aos-duration='1500'><Link activeClass="active" to="section3" spy={true} smooth={true} offset={-70} duration={500}>
    {t('Portfolio')}  <ArrowForwardIcon className='pb-1 ps-2 pt-1 '></ArrowForwardIcon></Link></button>
        <a className='phoneLink btn-custom' href='tel:+998903556052'>
         <button class="btn-custom  btn-info px-4 py-2 text-white w-auto" type="submit " data-aos="fade-up" data-aos-duration='500' >{t('Call')}<PhoneIcon className='text-white   pb-1 '></PhoneIcon></button>
        </a> 
        </div>
      </div>
      <div className="headerRight">
      </div>
    </div>
  )
}

  
  
