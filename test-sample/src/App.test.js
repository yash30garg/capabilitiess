import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow,mount} from'enzyme';
import Home from './Home';
import About from './About';
import Routes from './Routes'
import NotFoundPage from './NotFoundPage';

describe('<Home/ >',()=>{
  it('renders div',()=>{
    const editor=shallow(<Home/>);
    expect(editor.find('div.Home').length).toEqual(1)
  })

  it('function test',()=>{
    const editor=shallow(<Home/>);
    var op=editor.find('#btnnn');
    op.simulate('click');
    expect(editor.state().age).toEqual(3);
  })
});

describe("<Routes/>", ()=>{
  const wrapper=mount(<Routes/>);
  it("Routes testing",()=>{
    expect(wrapper.contains(NotFoundPage)).toBe(false);
  })


it("Routes testing",()=>{
    expect(wrapper.contains(About)).toBe(true);
  })



})