import {AxiosResponse} from "axios";
import React from "react";
import {Link} from "react-router-dom";

import {AppRoute} from "../../consts/common";

type ErrorPageProps = {
  loadingError?: AxiosResponse
}

const ErrorPage = (props: ErrorPageProps): JSX.Element => {
  const {loadingError} = props;

  return (
    <main className="page__main">
      <h1
        className="property__name"
        style={{marginTop: `35vh`}}
      >
        {loadingError
          ? <>{loadingError.data.error ? loadingError.data.error : `Sorry cant find that!`}</>
          : `Sorry cant find that!`
        }
      </h1>
      <p
        className="property__inside-title"
        style={{margin: `5vh 0 20vh`}}
      >
        {loadingError
          ? <>Error {loadingError.status}: {loadingError.statusText}</>
          : `Error 404: Not Found`
        }
      </p>
      <Link to={AppRoute.MAIN}>
        <p
          className="property__text"
          style={{
            textAlign: `center`,
            textDecoration: `underline`
          }}
        >
          Back to main page
        </p>
      </Link>
    </main>
  );
};

export default ErrorPage;
