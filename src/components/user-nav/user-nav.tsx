import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

import {AppRoute, AuthStatus} from "../../consts/common";

import {logOut} from "../../store/user/api-actions";

import {selectAuthStatus, selectUserData} from "../../store/user/selectors";

const UserNav = (): JSX.Element => {
  const dispatch = useDispatch();
  const authStatus = useSelector(selectAuthStatus);
  const userData = useSelector(selectUserData);

  const isAuthorized = authStatus === AuthStatus.AUTH;

  return (
    <nav className="header__nav">
      {!isAuthorized
        ? <ul className="header__nav-list">
          <li className="header__nav-item user">
            <Link
              className="header__nav-link header__nav-link--profile"
              to={AppRoute.LOGIN}
            >
              <div className="header__avatar-wrapper user__avatar-wrapper"/>
              <span className="header__user-name user__name">
                Sign in
              </span>
            </Link>
          </li>
        </ul>
        : <ul className="header__nav-list">
          <li className="header__nav-item user">
            <Link
              className="header__nav-link header__nav-link--profile"
              to={AppRoute.FAVORITES}
            >
              <div
                className="header__avatar-wrapper user__avatar-wrapper"
                style={{
                  backgroundImage: `url(${userData.avatarUrl})`,
                  borderRadius: `50%`
                }}
              />
              <span className="header__user-name user__name">
                {userData.email}
              </span>
            </Link>
          </li>
          <li className="header__nav-item user">
            <a
              className="header__nav-link header__nav-link--profile"
              style={{marginLeft: `10px`}}
              onClick={() => dispatch(logOut())}
            >
              <span className="header__user-name user__name">[Exit]</span>
            </a>
          </li>
        </ul>
      }
    </nav>
  );
};

export default UserNav;
