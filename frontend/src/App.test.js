import React from 'react';
import ReactDOM from 'react-dom';
import { shallow,mount } from 'enzyme';

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

  it('Input'),()=>{
    const wrapper = shallow(<Form />);
    const input = wrapper.find('input').text();
    input.simulate('change', { target: { value: '10' } })
    expect(input).toEqual('10');
    
  };
  it('Submit Value', () => {
    const wrapper = mount(<Form>submit</Form>);
    const button = wrapper.find('button');
    expect(button).toHaveLength(1);
    expect(button.prop('type')).toEqual('submit');
    expect(button.text()).toEqual('submit');
});

});