import React from 'react';
import {connect} from 'react-redux';
import {addMessage} from './redux/reducer';
import Child1 from './components/Child1';
import './App.css';
import e from 'express';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      message: ''
    }
    this.changeHandler = this.changeHandler.bind(this);
    this.pushButton = this.addMessage.bind(this);
  }

  pushButton = () =>{
    this.props.addMessage(this.state.message);
    this.setState({
      message: ''
    })

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

const mapDispatchToProps = {addMessage}

export default connect(mapStateToProps, {addMessage})(App);
