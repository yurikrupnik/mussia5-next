import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Form, Formik } from "formik";
import FormField from "../index";

// const { it, afterEach } = global;

afterEach(cleanup);

it(`should  component`, () => {
    // expect(1).toBe(1);
    // render(<Component  />);
    render(
        <Formik onSubmit={jest.fn()} initialValues={{ aris: "" }}>
            <Form>
                <FormField name="aris" fullWidth />
            </Form>
        </Formik>
    );
    // const rightClick = { button: 2 };
    // const button = getByTestId("confirm-button");
    // fireEvent.click(button, rightClick);
});

it(`should render select component`, () => {
    // expect(1).toBe(1);
    // render(<Component  />);
    render(
        <Formik onSubmit={jest.fn()} initialValues={{ aris: "a" }}>
            <Form>
                <FormField name="aris" type="select" options={[{ _id: "a", name: "a" }]} fullWidth />
            </Form>
        </Formik>
    );
    // const rightClick = { button: 2 };
    // const button = getByTestId("confirm-button");
    // fireEvent.click(button, rightClick);
});
