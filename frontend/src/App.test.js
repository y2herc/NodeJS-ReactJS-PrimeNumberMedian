import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Form from './NameForm'

it('App renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
it('Form renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Form />, div);
});