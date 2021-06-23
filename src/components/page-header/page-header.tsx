import React from "react";
import {Link} from "react-router-dom";

import UserNav from "../user-nav/user-nav";

import {AppRoute} from "../../consts/common";
import {HeaderType} from "../../consts/components";

type PageHeaderProps = {
  type?: HeaderType;
}

const PageHeader = (props: PageHeaderProps): JSX.Element => {
  const {type} = props;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            {type === HeaderType.MAIN
              ? <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width="81"
                height="41"
              />
              : <Link className="header__logo-link"
                to={AppRoute.MAIN}
              >
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width="81"
                  height="41"
                />
              </Link>
            }
          </div>
          {type === HeaderType.LOGIN || <UserNav/>}
        </div>
      </div>
    </header>
  );
};

export default React.memo(PageHeader);
