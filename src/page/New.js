import React, { useEffect } from "react";
import "../Login.css";
import styles from "../styles.module.css";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect, useSelector, useDispatch } from "react-redux";
import { Field, reduxForm, getFormValues } from "redux-form";
import { SET_ADD } from "../reducers/actions";

const renderField = (field) => {
  const {
    input,
    label,
    type,
    id,
    meta: { touched, error },
  } = field;

  return (
    <div>
      <label
        className="text-sm text-gray-700 block mb-2 mt-2 font-medium"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        {...input}
        id={id}
        placeholder={label}
        type={type}
        className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-800 w-full mb-3"
      />
      {touched && error && <span className="text-red-500">{error}</span>}
    </div>
  );
};

const New = (props) => {
  const formValue = useSelector((state) => state?.form?.newForm?.values);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const formUser = () => {
    dispatch({ type: SET_ADD, payload: formValue });
  };

  console.log(state);

  return (
    <>
      <div>
        <h1 className="lg:w-1/5 lg:m-auto pt-10 pb-10 smax:w-10/12 smax:m-auto smax:pt-5 ">
          新規登録
        </h1>
        <div className="border w-2/4 m-auto smax:mt-10 smax:w-11/12">
          <Form className="w-2/5 m-auto smax:w-80">
            <Form.Group controlId="formBasicEmail">
              <Field
                label="名前"
                name="name"
                id="name"
                type="text"
                value={formValue?.name}
                component={renderField}
              />
              <Field
                name="email"
                label="メールアドレス"
                id="email"
                type="text"
                placeholder="about@about.com"
                value={formValue?.email}
                component={renderField}
              />
              <Field
                label="パスワード"
                name="password"
                type="text"
                id="password"
                value={formValue?.password}
                component={renderField}
              />
            </Form.Group>

            <Link className="pr-10" to="/">
              <Button className={styles.buttonBack}>戻る</Button>
            </Link>
            <Link to="/new_confrim">
              <Button className={styles.button} onClick={formUser}>
                確認画面へ
              </Button>
            </Link>
          </Form>
        </div>
      </div>
    </>
  );
};

const validate = (values) => {
  const errors = {};
  return errors;
};

export default reduxForm({ validate, form: "newForm" })(New);
