import React from 'react';
import {connect} from 'react-redux';
import Child1 from './components/Child1';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      message: ''
    }
    this.changeHandler = this.changeHandler.bind(this);
    this.addMessage = this.addMessage.bind(this);
  }

  addMessage = () =>{

  }

  changeHandler = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  render(){
    return <div className="app-main">
      <input value={this.state.message} onChange={e => this.changeHandler(e)}/>
      <button onClick={this.addMessage}>Add Comment</button>
      <Child1/>
    </div>
  }
}

const mapStateToProps = state => state
export default connect(mapStateToProps)(App);
