import React, { Component } from 'react';
import Form from './NameForm';


export default class App extends Component {
  componentDidMount() {
    document.title = 'TouchBistro ReactApp';
  }
  render() {
    return (
      
    	<div>
         <Form />
    	</div>
    );
  }
}


