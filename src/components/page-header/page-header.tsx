import React from "react";
import {Link} from "react-router-dom";

import PageHeaderUser from "../page-header-user/page-header-user";

const PageHeader: React.FunctionComponent = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link
              className="header__logo-link"
              to={`/`}
            >
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <PageHeaderUser/>
        </div>
      </div>
    </header>
  );
};

export default React.memo(PageHeader);
