import { useField } from "formik";

export default function CustomCheckBox({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <>
      <div className="checkbox">
        <input
          {...field}
          {...props}
          className={meta.touched && meta.error ? "input-error" : ""}
        />
        <span>I accept terms of service</span>
      </div>
      {meta.touched && meta.error && <p className="error">{meta.error}</p>}
    </>
  );
}
