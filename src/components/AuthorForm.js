import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AuthorForm = ({ onAddAuthor }) => {
  const initialValues = {
    name: '',
    birthDate: '',
    biography: ''
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    birthDate: Yup.date().required('Required'),
    biography: Yup.string().required('Required')
  });

  const onSubmit = (values, { resetForm }) => {
    onAddAuthor(values);
    resetForm();
  };

  return (
    <div>
      <h2>Add Author</h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form>
          <div>
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component="div" />
          </div>
          <div>
            <label htmlFor="birthDate">Birth Date</label>
            <Field type="date" id="birthDate" name="birthDate" />
            <ErrorMessage name="birthDate" component="div" />
          </div>
          <div>
            <label htmlFor="biography">Biography</label>
            <Field type="text" id="biography" name="biography" />
            <ErrorMessage name="biography" component="div" />
          </div>
          <button type="submit">Add Author</button>
        </Form>
      </Formik>
    </div>
  );
};

export default AuthorForm;
