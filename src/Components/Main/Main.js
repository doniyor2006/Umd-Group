import React from 'react'
import { Element,Link} from 'react-scroll';
import { useTranslation } from 'react-i18next';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PhoneIcon from '@mui/icons-material/Phone';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
export default function Main({CarOne}) {
  const { t } = useTranslation()
  useEffect(() => {
    AOS.init({
      once: true, 
      duration: 1000,
    });
  }, []);
  return (
    <Element name='section1' className="element">
    <div className='Main'>
        <div className="mainLeft">
     <div className="MainCarusel">
       <img className='LeftImage' src={CarOne} alt="" data-aos="fade-up-right" data-aos-duration='1500'/>
     </div>
        </div>
        <div className="mainRight">
            <div className="mainRaboutUS">
                <h1 className='MainTitle'data-aos="fade-up-left" data-aos-duration='1500'>{t("About us")}</h1>
                <p className='mainPargraph' data-aos="fade-down" data-aos-duration='1500'>{t("Umd Group is one of the leading companies that puts innovation and quality first. We offer services and solutions in various fields such as technology, finance, education and healthcare. Umd Group started its activities in 2023 and has established reliable relationships with many companies. customers. and partners.")}

</p>
            <div className="mainActions">
                <div className="mainSolutions" data-aos="fade-up-right" data-aos-duration='1500'>
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="90" fill="currentColor" className=" bi bi-lightning-charge-fill text-info SolutionIcon" viewBox="0 0 16 16">
  <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/>
</svg>

                    <p data-aos="fade-up" data-aos-duration='1500'>
                    {t("Quick solutions")}
                    </p>
                </div>
                <div className="MainProjects" data-aos="fade-up-right" data-aos-duration='1500'>
                <svg xmlns="http://www.w3.org/2000/svg" width="90" height="85" fill="currentColor" className="ProjectIcon bi bi-terminal text-info" viewBox="0 0 16 16">
  <path d="M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9M3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708z"/>
  <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"/>
</svg>
                    <p data-aos="fade-up" data-aos-duration='1500'>
                    {t("Unique projects")}
                    </p>
                </div>
            </div>

            </div>
            <div className="MainButtons" data-aos="fade-up-left" data-aos-duration='1500'>
        <button type="button" class=" btn btn-outline-info text-white w-auto px-4 py-2" data-aos="fade-down" data-aos-duration='1500'><Link activeClass="active" to="section3" spy={true} smooth={true} offset={-70} duration={500}>
    {t('Portfolio')}  <ArrowForwardIcon className='pb-1 ps-2 pt-1'></ArrowForwardIcon></Link></button>
        <a className='phoneLink btn-custom' href='tel:+998903556052'>
         <button class="btn-custom  px-4 py-2 text-white w-auto" type="submit " data-aos="fade-up-right" data-aos-duration='1500'>{t('Call')} <PhoneIcon className='text-white   pb-1 '></PhoneIcon></button>
        </a> 
        </div>
        </div>
    </div>
    </Element>
  )
}
