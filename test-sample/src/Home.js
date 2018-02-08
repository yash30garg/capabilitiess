import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';



class Home extends Component {

constructor(props) {
        super();
        this.state = {
            age:0
            
        };
}

         onMakeOlder() {
        this.setState({
            age: this.state.age + 3
        });
         }


  render() {
    return (
      <div className="Home">
        



        
        <button id="btnnn" onClick={() => this.onMakeOlder()} className="btn btn-primary">Make me older!</button>
      </div>
    );
  }
}

export default Home;
