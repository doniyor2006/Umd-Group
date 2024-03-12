import React from 'react'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useTranslation } from 'react-i18next';
export default function Section() {
  const { t } = useTranslation()
  useEffect(() => {
    AOS.init({
      once: true, 
      duration: 1000,
    });
  }, []);
  return (
    <div className='Services'>
        <dir className='ServiceTitle'>
          <h1 className='Title' data-aos="fade-up" data-aos-duration='1500'> {t("Our Services")}</h1>
        </dir>
        <ul className="ServiceType"  >
          <li className='SreviceList'data-aos="fade-up-left" data-aos-duration='1500'>
            <h1 className='ListTitle'>{t("Web Development")}</h1>
            <p className='ListParagraph'>{t("Dev")}</p>
          </li>
          <li className='SreviceList' data-aos="fade-up-left" data-aos-duration='1500'>
            <h1 className='ListTitle'>{t("Mobile Apps")}</h1>
            <p className='ListParagraph'>{t("Mob")}</p>
          </li>
          <li className='SreviceList' data-aos="fade-up-left" data-aos-duration='1500'>
            <h1 className='ListTitle'>{t("Media Production")}</h1>
            <p className='ListParagraph'>{t("Media")}</p>
          </li>
          <li className='SreviceList' data-aos="fade-up-left" data-aos-duration='1500'>
            <h1 className='ListTitle'>{t("Branding")}</h1>
            <p className='ListParagraph'>{t("Logo")}</p>
          </li>
        </ul>
    </div>
  )
}
