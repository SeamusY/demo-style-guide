import React from "react";
import Textinput from '../components/Atoms/TextInput/InputsText';
import Adapter from "enzyme-adapter-react-16"; 
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

test('basic', () => {
  const button = shallow(<Textinput name="text" placeholdertext="Click ME"/>).contains(<input type={"input"} name={"text"} placeholder={"Click ME"}/>)
  expect(button).toBeTruthy();

});