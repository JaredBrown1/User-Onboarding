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
      </Form>
    </div>
  );
};

const FormikOnBoardForm = withFormik({
  mapPropsToValues(props) {
    return {
      species: props.name || ""
    };
  }
})(Forms);

export default FormikOnBoardForm;
