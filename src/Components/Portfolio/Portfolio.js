import React from 'react'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default function Portfolio() {
  useEffect(() => {
    AOS.init({
      once: true, 
      duration: 1000,
    });
  }, []);
  return (
    <div className='Portfolio'>
        <h1 className='ITitle'  data-aos="fade-up" data-aos-duration='1500'>Portfolio</h1>
      <div className="PortfolioIntro"  data-aos="fade-up-right" data-aos-duration='1000' >
          <div className="newKonst">
          </div>
          <div className='TinyProject'>
          <ul className="TinyProject">
             <li className='ProjectList'></li>
             <li className='ProjectList'></li>
             <li className='ProjectList'></li>
             <li className='ProjectList'></li>
          </ul>
          </div>
      </div>
  
          <ul className="MobileApps" data-aos="fade-up-left" data-aos-duration='1000'>
            <li className='appList'></li>
            <li className='appList'></li>
            <li className='appList'></li>
      </ul>
    </div>
  )
}
