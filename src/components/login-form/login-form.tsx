import React, {useRef, useState, ChangeEvent, FormEvent, MutableRefObject} from "react";
import {useDispatch, useSelector} from "react-redux";

import {REG_EXP_EMAIL, REG_EXP_PASSWORD} from "../../consts/components";
import {logIn} from "../../store/login/api-actions";
import {selectIsSending, selectSendingError} from "../../store/login/selectors";

const LoginForm = (): JSX.Element => {
  const dispatch = useDispatch();
  const isSending = useSelector(selectIsSending);
  const sendingError = useSelector(selectSendingError);

  const initialLogin = {
    isValidEmail: false,
    isValidPassword: false,
    hideInvalidEmailMsg: true,
    hideInvalidPasswordMsg: true
  };

  const [login, setLogin] = useState(initialLogin);
  const {isValidEmail, isValidPassword, hideInvalidEmailMsg, hideInvalidPasswordMsg} = login;
  const isValidForm = isValidEmail && isValidPassword;
  const hideInvalidMsgs = hideInvalidEmailMsg && hideInvalidPasswordMsg;
  const emailRef = useRef() as MutableRefObject<HTMLInputElement>;
  const passwordRef = useRef() as MutableRefObject<HTMLInputElement>;

  return (
    <form
      className="login__form form"
      onSubmit={(evt: FormEvent) => {
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
          onChange={(evt: ChangeEvent<HTMLInputElement>) => {
            const isValidValue = REG_EXP_EMAIL.test(evt.target.value);
            setLogin((currentLogin) => ({
              ...currentLogin,
              isValidEmail: isValidValue,
              hideInvalidEmailMsg: isValidValue
            }));
          }}
          disabled={isSending}
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
          onChange={(evt: ChangeEvent<HTMLInputElement>) => {
            const isValidValue = REG_EXP_PASSWORD.test(evt.target.value);
            setLogin((currentLogin) => ({
              ...currentLogin,
              isValidPassword: isValidValue,
              hideInvalidPasswordMsg: isValidValue
            }));
          }}
          disabled={isSending}
        />
      </div>
      <button
        className="login__submit form__submit button"
        type="submit"
        disabled={!isValidForm || isSending}
      >
        Sign in
      </button>
      <div style={{marginTop: `30px`}}>
        {
          hideInvalidMsgs && isValidForm && ``
          || hideInvalidMsgs && !isValidEmail && !isValidPassword && `Please enter your email and password`
          || hideInvalidMsgs && !isValidEmail && isValidPassword && `Please enter your email`
          || !hideInvalidEmailMsg && `Invalid email! Please enter a valid email`
          || isSending && `Signing in... Please wait`
          || sendingError && `Error ${sendingError.status}: ${sendingError.statusText}. Please try agaian later`
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

export default LoginForm;
