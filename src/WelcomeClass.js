import React, {Component} from 'react'

class WelcomeClass extends Component {
    render() { 
        return <h1>Hello {this.props.name}, I am a class based component</h1>;
    }
}
 
export default WelcomeClass;