import React from "react";
import { useFormik, FormikProps } from "formik";
import * as Yup from "yup";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const formik: FormikProps<FormValues> = useFormik<FormValues>({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      message: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="bg-white shadow-lg rounded-lg p-8"
    >
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          className={`w-full p-2 border ${
            formik.touched.name && formik.errors.name
              ? "border-red-500"
              : "border-gray-300"
          } rounded transition-colors duration-300`}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="text-red-500 text-sm">{formik.errors.name}</div>
        ) : null}
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className={`w-full p-2 border ${
            formik.touched.email && formik.errors.email
              ? "border-red-500"
              : "border-gray-300"
          } rounded transition-colors duration-300`}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-red-500 text-sm">{formik.errors.email}</div>
        ) : null}
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
          className={`w-full p-2 border ${
            formik.touched.message && formik.errors.message
              ? "border-red-500"
              : "border-gray-300"
          } rounded transition-colors duration-300`}
        />
        {formik.touched.message && formik.errors.message ? (
          <div className="text-red-500 text-sm">{formik.errors.message}</div>
        ) : null}
      </div>
      <button
        type="submit"
        className="w-full bg-accent text-white p-2 rounded transition-transform duration-300 transform hover:scale-105"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
