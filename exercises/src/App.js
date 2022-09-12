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
//import { HookCounter } from "./HookCounter";
//import { LoginForm } from "./LoginForm";
//import { Counter } from "./Counter";
//import { GitHubUser } from "./GitHubUser";
//import { GithubUserList } from "./GithubUserList";
//import { Sum } from "./Sum";

export class App extends React.Component {
    state = {
        language: 'en'
    }
    selectLeng = (event) => {
        this.setState({
            language: event.target.value
        })
    }
    render() {
        return (<div>
            <select value={this.state.language} onChange={this.selectLeng}>
                <option value='en'>English</option>
                <option value='it'>Italiano</option>
                <option value='es'>Espanol</option>
            </select>
            <LanguageContext.Provider value={this.state.language}>
                <DisplayLanguage />
                <Container title='React Component'>
                    <GitHubUser username={'AlessioValdarchi'} />
                </Container>
            </LanguageContext.Provider>


        </div>
        )
    }
}