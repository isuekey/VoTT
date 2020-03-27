import React from "react";
import { IVottInputFieldProps, VottInputField } from "./vottInputField";
import { ReactWrapper, mount } from "enzyme";

describe("Security Token Picker", () => {
    const onChangeHandler = jest.fn();
    const defaultProps: IVottInputFieldProps = {
        id: "security-token-picker",
        value: "",
        onChange: onChangeHandler,
    };

    function createComponent(props: IVottInputFieldProps): ReactWrapper<ISecurityTokenPickerProps> {
        return mount(<VottInputField {...props} />);
    }

    it("renders correctly", () => {
        const wrapper = createComponent(defaultProps);
        expect(wrapper.find("input").exists()).toBe(true);
        expect(wrapper.find("input").prop("value")).toEqual("");
    });

    it("calls the onChange event handler when value changes", () => {
        const props: IVottInputFieldProps = {
            ...defaultProps,
        };
        const expectedValue:IVottInputFieldProps = {
          value:'yyy',
          onChange: onChangeHandler
        };
        const wrapper = createComponent(props);
        wrapper.find("select").simulate("change", { target: { value: expectedValue.value } });
        expect(onChangeHandler).toBeCalledWith(expectedValue.value);
    });
});
