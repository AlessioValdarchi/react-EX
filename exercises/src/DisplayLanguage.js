import React from "react";
import { LanguageContext } from "./languageContext";
const selectLeang = {
    en: {
        SELECTLANG: 'English selected!'
    },
    it: { SELECTLANG: 'Italiano selezionato' },
    es: { SELECTLANG: 'Español seleccionado' }
}
export class DisplayLanguage extends React.Component {

    render() {
        return <div>
            <LanguageContext.Consumer>
                {(lenguage) => {
                    return <h2>{selectLeang[lenguage].SELECTLANG}</h2>
                }}
            </LanguageContext.Consumer>
        </div>
    }
}