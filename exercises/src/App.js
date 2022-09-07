import { Hello } from "./Hello";
import React from "react";
import { TodoList } from "./TodoList";
//import { Colors } from "./Colors";
import { Welcome, name } from "./Welcome";
//import { Counter } from "./Counter";
//import { ClickCounter } from "./ClickCounter";
//import { ClickTracker } from "./ClickTracker";
//import { InteractiveWelcome } from "./InteractiveWelcome";
//import { UncontrolledLogin } from "./UncontrolledLogin";
import { Login } from "./Login";
import { Container } from "./Container";
// const colors = [
//     { id: 1, color: 'bianco' },
//     { id: 2, color: 'celeste' },
//     { id: 3, color: 'verde' }
//]

export class App extends React.Component {
    render() {
        return (<div>
            <Container title='React Component'>
                <Hello />
                <Welcome name={name} age={10} />
                {/* <InteractiveWelcome />
            <ClickCounter />
            <ClickTracker />
            <UncontrolledLogin /> */}
                {/* <Colors colors={colors} /> */}
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
            </Container>
        </div>
        )
    }
}