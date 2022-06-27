import { useFormik } from "formik";
import { basicScema } from "../schemas";

const BasicForm = () => {
  const onSubmit = () => {
    console.log("submited");
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        age: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: basicScema,
      onSubmit,
    });

  console.log(errors);
  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        type="email"
        placeholder="Enter your email"
        className={errors.email && touched.email ? "input-error" : ""}
      />

      <label htmlFor="age">Age</label>
      <input
        id="age"
        value={values.age}
        onChange={handleChange}
        onBlur={handleBlur}
        type="number"
        placeholder="Enter your age"
        className={errors.email && touched.age ? "input-error" : ""}
      />

      <label htmlFor="password">Password</label>
      <input
        id="password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        type="password"
        placeholder="Enter your password"
        className={errors.email && touched.password ? "input-error" : ""}
      />

      <label htmlFor="confirmpassword">Confirm Password</label>
      <input
        id="confirmpassword"
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        type="password"
        placeholder="Confirm password"
        className={errors.email && touched.confirmPassword ? "input-error" : ""}
      />

      <input id="Submit" type="submit" placeholder="Submit" />
    </form>
  );
};
export default BasicForm;
