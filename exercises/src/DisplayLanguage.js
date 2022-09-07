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
                    return <h1>{selectLeang[lenguage].SELECTLANG}</h1>
                }}
            </LanguageContext.Consumer>
        </div>
    }
}