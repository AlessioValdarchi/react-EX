//import { Hello } from "./Hello";
import React, { useState } from "react";
//import { TodoList } from "./TodoList";
//import { Welcome, name } from "./Welcome";
//import { Login } from "./Login";
import { Container } from "./Container";
import { LanguageContext } from "./languageContext";
import { DisplayLanguage } from "./DisplayLanguage";
import { HooksLogin } from "./HooksLogin";
import { GitHubUser } from "./GitHubUser";
import { HookCounter } from "./HookCounter";
import { CarDetails } from "./CarDetails";
import { FilterdList } from "./FilteredList";
//import { HookCounter } from "./HookCounter";
//import { LoginForm } from "./LoginForm";
//import { Counter } from "./Counter";
//import { GitHubUser } from "./GitHubUser";
//import { GithubUserList } from "./GithubUserList";
//import { Sum } from "./Sum";

export function App() {

    const [language, SetLanguage] = useState('en')
    const handelLanguage = (event) => {
        SetLanguage(event.target.value)
    }
    return (<div>
        <select value={language} onChange={handelLanguage}>
            <option value='en'>English</option>
            <option value='it'>Italiano</option>
            <option value='es'>Espanol</option>
        </select>
        <LanguageContext.Provider value={language}>
            <Container title='React Component'>
                <DisplayLanguage />
                <CarDetails />
                <FilterdList />
            </Container>
        </LanguageContext.Provider>
    </div>
    )
}
