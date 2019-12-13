import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Forms = ({ values, errors, touched, status }) => {
  return (
    <div>
      <Form>
        <label>Name</label>
        <Field type="text" name="name" placeholder="Full Name" />
        {touched.name && errors.name && (
          <p className="errors">{errors.name} </p>
        )}
        <label>Email</label>
        <Field type="email" name="email" placeholder="Email" />
        {touched.email && errors.email && (
          <p className="errors">{errors.email}</p>
        )}
        <label>Password</label>
        <Field type="password" name="password" placeholder="Password" />
        {touched.password && errors.password && (
          <p className="errors">{errors.password}</p>
        )}
        <label>Terms Of Service</label>
        <Field type="checkbox" name="terms" />
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};

const FormikOnBoardForm = withFormik({
  mapPropsToValues(props) {
    return {
      name: props.name || "",
      email: props.email || "",
      password: props.password || "",
      termsofservice: props.terms || false
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required")
  })
})(Forms);

export default FormikOnBoardForm;
