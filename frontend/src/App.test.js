import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import App from './App';
import Form from './NameForm'

describe('Render component Tests', () => {
  it('App renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
  it('Form renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Form />, div);
  });
});

describe('User Interaction Tests', () => {
  it('Start with no Resulsts', () => {
    const wrapper = shallow(<Form />);
    const text = wrapper.find('p').text();
    expect(text).toEqual('Result:[]');
  });
});