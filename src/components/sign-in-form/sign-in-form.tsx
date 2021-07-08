import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {REG_EXP_EMAIL, REG_EXP_PASSWORD} from "../../consts/components";

import {logIn} from "../../store/user/api-actions";

import {selectIsDataSending, selectIsSendingError} from "../../store/user/selectors";

const SignInForm = (): JSX.Element => {
  const dispatch = useDispatch();
  const isDataSending = useSelector(selectIsDataSending);
  const isSendingError = useSelector(selectIsSendingError);

  const initialLogin = {
    isValidEmail: false,
    isValidPassword: false,
    hideInvalidEmailMsg: true,
    hideInvalidPasswordMsg: true
  };

  const [login, setLogin] = React.useState(initialLogin);
  const isValidEmail = login.isValidEmail;
  const isValidPassword = login.isValidPassword;
  const isValidForm = isValidEmail && isValidPassword;
  const hideInvalidEmailMsg = login.hideInvalidEmailMsg;
  const hideInvalidPasswordMsg = login.hideInvalidPasswordMsg;
  const hideInvalidMsgs = hideInvalidEmailMsg && hideInvalidPasswordMsg;
  const emailRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const passwordRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  return (
    <form
      className="login__form form"
      onSubmit={(evt: React.FormEvent) => {
        evt.preventDefault();
        dispatch(logIn({
          email: emailRef.current.value,
          password: passwordRef.current.value
        }));
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
          required
          onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
            const isValid = REG_EXP_EMAIL.test(evt.target.value);
            setLogin((currentLogin) => ({
              ...currentLogin,
              isValidEmail: isValid,
              hideInvalidEmailMsg: isValid
            }));
          }}
          disabled={isDataSending}
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
          required
          onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
            const isValid = REG_EXP_PASSWORD.test(evt.target.value);
            setLogin((currentLogin) => ({
              ...currentLogin,
              isValidPassword: isValid,
              hideInvalidPasswordMsg: isValid
            }));
          }}
          disabled={isDataSending}
        />
      </div>
      <button
        className="login__submit form__submit button"
        type="submit"
        disabled={!isValidForm || isDataSending}
      >
        Sign in
      </button>
      <div style={{marginTop: `30px`}}>
        {
          hideInvalidMsgs && isValidForm && ``
          || hideInvalidMsgs && !isValidEmail && !isValidPassword && `Please enter your email and password`
          || hideInvalidMsgs && !isValidEmail && isValidPassword && `Please enter your email`
          || !hideInvalidEmailMsg && `Invalid email! Please enter a valid email`
          || isDataSending && `Signing in... Please wait`
          || isSendingError && `Sign in error! Please try again later`
        }
      </div>
      <div style={{marginTop: `30px`}}>
        {
          hideInvalidMsgs && isValidEmail && !isValidPassword && `Please enter your password`
          || !hideInvalidPasswordMsg && `Invalid password! Password must contains at least 8 characters with letters and digits only`
        }
      </div>
    </form>
  );
};

export default SignInForm;
