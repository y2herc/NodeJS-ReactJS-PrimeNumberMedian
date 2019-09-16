import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import App from './App';
import Form from './NameForm'
const sinon = require('sinon');


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

  it('Submit Value', () => {
    const onSubmit = sinon.spy();
    const wrapper = mount(
      <form onSubmit={onSubmit} />
    );
    const button = wrapper.find('button');
    
//    const wrapper = shallow(<Form />);
//    const form=wrapper.find('form');
    const inputField=wrapper.find('input');
    inputField.simulate('change', {target: {value: 101}})
    button.simulate('submit');
    const text = wrapper.find('p').text();
    expect(text).toEqual('Result:[ 41, 43 ]');
  });
});