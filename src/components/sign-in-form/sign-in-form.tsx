import React from "react";
import {useDispatch} from "react-redux";

import {logIn} from "../../store/user/api-actions";

const SignInForm: React.FunctionComponent = () => {
  const emailRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  return (
    <form
      className="login__form form"
      action="#"
      method="post"
      onSubmit={(evt: React.FormEvent) => {
        evt.preventDefault();
        dispatch(logIn({email: emailRef.current?.value, password: passwordRef.current?.value}));
      }}
    >
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">E-mail</label>
        <input
          ref={emailRef}
          className="login__input form__input"
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="false"
          pattern="([\w.%+-]+)@([\w-]+\.)+([\w]{2,})"
          required
        />
      </div>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">Password</label>
        <input
          ref={passwordRef}
          className="login__input form__input"
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="false"
          pattern="(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}"
          required
        />
      </div>
      <button
        className="login__submit form__submit button"
        type="submit"
      >
        Sign in
      </button>
    </form>
  );
};

export default SignInForm;
