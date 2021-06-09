import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

import {selectCurrentFiltering} from "../../store/app/selectors";

import {AppRoute} from "../../const";

import PageHeader from "../page-header/page-header";
import SignInForm from "../sign-in-form/sign-in-form";

const SignInPage: React.FunctionComponent = () => {
  const currentCity = useSelector(selectCurrentFiltering);

  return (
    <div className="page page--gray page--login">
      <PageHeader/>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <SignInForm/>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoute.MAIN}>
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
