import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

import PageHeader from "../page-header/page-header";
import LoginForm from "../login-form/login-form";

import {AppRoute} from "../../consts/common";
import {HeaderType} from "../../consts/components";

import {setRedirectToRoute} from "../../store/login/actions";

import {selectIsAuthorized} from "../../store/login/selectors";
import {selectCurrentCity} from "../../store/main/selectors";

const LoginPage = (): JSX.Element => {
  const dispatch = useDispatch();
  const currentCity = useSelector(selectCurrentCity);
  const isAuthorized = useSelector(selectIsAuthorized);

  useEffect(() => {
    if (isAuthorized) {
      dispatch(setRedirectToRoute(AppRoute.MAIN));
    }
  }, [dispatch, isAuthorized]);

  return (
    <div className="page page--gray page--login">
      <PageHeader
        type={HeaderType.LOGIN}
      />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <LoginForm/>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link
                className="locations__item-link"
                to={AppRoute.MAIN}
              >
                <span>{currentCity}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
