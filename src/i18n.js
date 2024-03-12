import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// i18n
//   .use(Backend)
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     debug: true,
//     fallbackLng: "en",
//   });
  const resources = {
    en: {
      translation: {
        "About us": "About us",
        "Services":"Services",
        "Portfolio":"Portfolio",
        "We offer digital solutions":"We offer digital solutions",
        "Umd Group is one of the leading companies that puts innovation and quality first. We offer services and solutions in various fields such as technology, finance, education and healthcare. Umd Group started its activities in 2023 and has established reliable relationships with many companies. customers. and partners.":"Umd Group is one of the leading companies that puts innovation and quality first. We offer services and solutions in various fields such as technology, finance, education and healthcare. Umd Group started its activities in 2023 and has established reliable relationships with many companies. customers. and partners.",
        "Call":"Call",
        "Quick solutions":"Quick solutions",
        "Unique projects":"Unique projects",
        "Our Services":"Our Services",
        "Web Development":"Web Development",
        "Dev":"We develop websites high quality,from corporate websites to web application",
        "Mobile Apps":"Mobile Apps",
        "Mob":"Development and technical support of mobile applications of any complexity",
        "Media Production":"Media Production",
       "Media":"Professional preparation of 2D / 3D animation, project presentation, advertising, video and other media resources.",
       "Branding":"Branding",
       "Logo":"Developing a creative and unique logo for your project and create its branding guidelines"
      }
    },
    uzb: {
      translation: {
        "About us":"Biz haqqimizda",
        "Services":"Xizmatlar",
        "Portfolio":"Portfolio",
        "We offer digital solutions":"Raqamli yechimlarni taklif qilamiz",
        "Umd Group is one of the leading companies that puts innovation and quality first. We offer services and solutions in various fields such as technology, finance, education and healthcare. Umd Group started its activities in 2023 and has established reliable relationships with many companies. customers. and partners.":"Umd Group innovatsiya va sifatni birinchi oʻringa qoʻyadigan yetakchi kompaniyalardan biridir. Biz texnologiya, moliya, taʼlim va sogʻliqni saqlash kabi turli sohalarda xizmatlar va yechimlarni taklif etamiz. Umd Group oʻz faoliyatini 2023-yilda boshlagan bo'lib,koʻplab kompaniyalar,hamkorlar va mijozlar bilan ishonchli aloqalar oʻrnatgan.",
        "Quick solutions":"Tezkor Yechimlar",
        "Unique projects":"Takrorlanmas loyihalar",
        "Call":"Tel",
        "Our Services":"Bizning xizmatlar",
        "Web Development":"Web-saytlar",
        "Dev":"Korporativ veb saytlardan tortib veb ilovalargacha boʻlgan murakkablikdagi internet saytlarni sifat kafolati bilan ishlab chiqamiz",
        "Mobile Apps":"Mobil Ilovalar",
        "Mob":"Istalgan qiyinchilikdagi mobil ilovalarni ishlab chiqish va ularni texnik qoʻllab-quvvatlash",
        "Media Production":"Media Production",
        "Media":"2D/3D animatsiya, loyiha taqdimoti, reklamasi, videomateriallar va boshqa media resurslarni professional tarzida tayyorlash",
        "Branding":"Brending",
        "Logo":"Biznesni ilgari surish uchun asosiy vositalar va marketing materiallari to'plamini noldan yaratish."
      }
    }
  };
  
  i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next) // react-i18next bilan bog'lanish
    .init({
      resources,
      lng: "en", 
      fallbackLng: "uzb",// boshlang'ich til
      keySeparator: false, // agar foydalanishingiz mumkin bo'lgan kalitlar bo'lmasa
      interpolation: {
        escapeValue: false 
      }
    });

export default i18n;
