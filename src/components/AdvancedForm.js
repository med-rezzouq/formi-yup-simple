import React from "react";

import { Form, Formik } from "formik";
import CustomInput from "./CustomInput";
import { advancedSchema } from "../schemas";
import CustomSelect from "./CustomSelect";
import CustomCheckBox from "./CustomCheckBox";
const onSubmit = (values, actions) => {
  console.log("hello", actions);
};
const AdvancedForm = () => (
  <div>
    <h1>My Form</h1>

    <Formik
      initialValues={{ username: "jared", jobType: "", acceptedTos: false }}
      validationSchema={advancedSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmiting }) => (
        <Form>
          {console.log("hello", isSubmiting)}
          <CustomInput
            label="Username"
            name="username"
            type="text"
            placeholder="Enter your username"
          />
          <CustomSelect
            label="Job Type"
            name="jobType"
            placeholder="Please select a job"
          >
            <option value="">Please select a job type</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="manager">Product Manager</option>
            <option value="other">Other</option>
          </CustomSelect>
          <CustomCheckBox type="checkbox" name="acceptedTos" />
          <button disabled={isSubmiting} type="submit">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default AdvancedForm;
