import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const BookForm = ({ onAddBook }) => {
  const initialValues = {
    title: '',
    author: '',
    isbn: '',
    publicationDate: ''
  };

  const validationSchema = Yup.object({
    title: Yup.string().required('Required'),
    author: Yup.string().required('Required'),
    isbn: Yup.string().required('Required'),
    publicationDate: Yup.date().required('Required')
  });

  const onSubmit = (values, { resetForm }) => {
    onAddBook(values);
    resetForm();
  };

  return (
    <div>
      <h2>Add Book</h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form>
          <div>
            <label htmlFor="title">Title</label>
            <Field type="text" id="title" name="title" />
            <ErrorMessage name="title" component="div" />
          </div>
          <div>
            <label htmlFor="author">Author</label>
            <Field type="text" id="author" name="author" />
            <ErrorMessage name="author" component="div" />
          </div>
          <div>
            <label htmlFor="isbn">ISBN</label>
            <Field type="text" id="isbn" name="isbn" />
            <ErrorMessage name="isbn" component="div" />
          </div>
          <div>
            <label htmlFor="publicationDate">Publication Date</label>
            <Field type="date" id="publicationDate" name="publicationDate" />
            <ErrorMessage name="publicationDate" component="div" />
          </div>
          <button type="submit">Add Book</button>
        </Form>
      </Formik>
    </div>
  );
};

export default BookForm;
