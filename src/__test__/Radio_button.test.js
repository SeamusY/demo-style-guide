import React from "react";
import Radio_Button from '../components/Atoms/RadioButton/Radio_button';
import Adapter from "enzyme-adapter-react-16"; 
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

test('basic', () => {
  const button = shallow(<Radio_Button name="test"/>).contains(<input type="radio" name="test"/>)
  expect(button).toBeTruthy();
});