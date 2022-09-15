import React, { useContext } from "react";
import { LanguageContext } from "./languageContext";
const selectLeang = {

    en: 'English selected!',

    it: 'Italiano selezionato',
    es: 'Español seleccionado'
}
export const DisplayLanguage = () => {

    const lang = useContext(LanguageContext)

    return (<div>
        <h1>{selectLeang[lang]}</h1>
    </div>)
}
