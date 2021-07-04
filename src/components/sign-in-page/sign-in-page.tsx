import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

import PageHeader from "../page-header/page-header";
import SignInForm from "../sign-in-form/sign-in-form";

import {AppRoute, AuthStatus} from "../../consts/common";
import {HeaderType} from "../../consts/components";

import {redirectToRoute} from "../../store/user/actions";

import {selectCurrentCity} from "../../store/all-offers/selectors";
import {selectAuthStatus} from "../../store/user/selectors";

const SignInPage = (): JSX.Element => {
  const dispatch = useDispatch();
  const currentCity = useSelector(selectCurrentCity);
  const authStatus = useSelector(selectAuthStatus);

  const isAuthorized = authStatus === AuthStatus.AUTH;

  React.useEffect(() => {
    if (isAuthorized) {
      dispatch(redirectToRoute(AppRoute.MAIN));
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
            <SignInForm/>
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

export default SignInPage;
