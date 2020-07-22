import React from "react";
import CheckBox from "../components/Atoms/CheckBox/CheckBox";
import Adapter from "enzyme-adapter-react-16"; 
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

test("This Checkbox has the correct render", () => {
  const holder = shallow(<CheckBox name="Hi" />).contains(<input type={"checkbox"} name={"Hi"}/>);
  expect(holder).toBeTruthy();
});