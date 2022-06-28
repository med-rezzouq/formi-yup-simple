import React from "react";

import { Field, Form, Formik } from "formik";
import CustomInput from "./CustomInput";
import { advancedSchema } from "../schemas";
import CustomSelect from "./CustomSelect";

const AdvancedForm = () => (
  <div>
    <h1>My Form</h1>

    <Formik
      initialValues={{ username: "jared", jobType: "", acceptedTo: "" }}
      validationSchema={advancedSchema}
    >
      {(props) => (
        <Form onSubmit={props.handleSubmit}>
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

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default AdvancedForm;
