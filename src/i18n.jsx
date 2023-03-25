import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
.use(initReactI18next)
.use(LanguageDetector)
.init({
    debug:true,
    fallbackLng:"az",
    resources:{
        // en:{
        //     translation:{
        //         learn:"Learn React"
        //     }
        // },
        az:{
            translation:{
                learn:"React Örgən"
            }
        }
    }
})
