import React from "react";
import Button from "../components/Atoms/Button/Button";
import Adapter from "enzyme-adapter-react-16"; 
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

test("This button has the correct render", () => {
  const holder = shallow(<Button color="white" children="Hi" />).contains(<button style={{ backgroundColor: "white" }}>Hi</button>);
  expect(holder).toBeTruthy();
});
