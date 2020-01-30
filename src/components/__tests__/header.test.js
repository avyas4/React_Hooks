import * as React from "react";
import { shallow, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import HeaderComponent from "../header/Header";

configure({ adapter: new Adapter() });

describe("Show Header", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<HeaderComponent />);
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it("should render header component successfully", () => {
        wrapper = shallow(<HeaderComponent />);
        expect(wrapper.find("header.headerComponent")).toHaveLength(1);
        expect(wrapper.find("li")).toHaveLength(3);
    });
});
