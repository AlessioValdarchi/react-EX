import { Hello } from "./Hello";
import React from "react";
import { TodoList } from "./TodoList";
import { Welcome, name } from "./Welcome";
import { Login } from "./Login";
import { Container } from "./Container";
import { LanguageContext } from "./languageContext";
import { DisplayLanguage } from "./DisplayLanguage";
import { HookCounter } from "./HookCounter";
import { LoginForm } from "./LoginForm";
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
                    <Hello />
                    <Welcome name='Ale' />
                    <Login />
                    <TodoList
                        render={(items, remove) => {
                            return (<ul>
                                {items.map((item, index) => <li key={item + index}>{item}
                                    <span><button id={item + index} onClick={remove}>Delete item</button></span></li>
                                )}
                            </ul>)
                        }}
                    />
                    <LoginForm />
                </Container>
            </LanguageContext.Provider>


        </div>
        )
    }
}