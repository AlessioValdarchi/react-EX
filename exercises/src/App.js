//import { Hello } from "./Hello";
import React from "react";
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



    return (<div>

        <DisplayLanguage />
        <Container title='React Component'>
            <CarDetails />
            <FilterdList />
        </Container>
    </div>
    )
}
