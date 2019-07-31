import React, {Component} from 'react';
import './MyComponent.css';

class MyComponent extends Component {

    state = {
        count: 5,
        myKey: "myValue"
    };

    increaseCount = () => {
        this.setState({count: this.state.count + 1});
    };

    divStyle = {
        fontSize: "20px"
    };

    render(){
        let myVar = "my var";
        return <div className="MyClass" style={{fontSize: this.state.count + "px"}} >this is my component and my name is {this.props.name}

        <br/>
        and my variable is {myVar}
        <br/>
            and my children is {this.props.children}
        <br/>
            and my count is  {this.state.count}
        <br/>
            <button onClick={() => this.increaseCount()} >increase count</button>
        </div>;
    }

}

export default MyComponent;