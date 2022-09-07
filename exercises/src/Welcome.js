import React from "react";
//import { Age } from "./Age";
export const name = 'John'
export function Welcome({ name = 'Alessio' }) {
    return (
        <div className="welcome">
            <p>Welcome, {name}</p>
        </div>
    )
}

// export class Welcome extends React.Component {
//     render() {
//         return (
//             (<div className="welcome">
//                 <p>Welcome, {this.props.name}</p>
//                 {(this.props.age
//                     && this.props.age < 65
//                     && this.props.name === 'John')
//                     && < Age age={this.props.age} />}
//             </div>
//             )
//         )
//     }
// }
