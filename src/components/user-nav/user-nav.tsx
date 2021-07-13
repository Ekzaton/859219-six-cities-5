import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

import {AppRoute} from "../../consts/common";

import {logOut} from "../../store/login/api-actions";

import {selectIsAuthorized, selectUser} from "../../store/login/selectors";

const UserNav = (): JSX.Element => {
  const dispatch = useDispatch();
  const isAuthorized = useSelector(selectIsAuthorized);
  const user = useSelector(selectUser);

  return (
    <nav className="header__nav">
      {isAuthorized
        ? <ul className="header__nav-list">
          <li className="header__nav-item user">
            <Link
              className="header__nav-link header__nav-link--profile"
              to={AppRoute.FAVORITES}
            >
              <div
                className="header__avatar-wrapper user__avatar-wrapper"
                style={{
                  backgroundImage: `url(${user.avatarUrl})`,
                  borderRadius: `50%`
                }}
              />
              <span className="header__user-name user__name">
                {user.email}
              </span>
            </Link>
          </li>
          <li className="header__nav-item">
            <a
              className="header__nav-link"
              style={{marginLeft: `10px`}}
              onClick={() => dispatch(logOut())}
            >
              <span className="header__login">[Sign out]</span>
            </a>
          </li>
        </ul>
        : <ul className="header__nav-list">
          <li className="header__nav-item user">
            <Link
              className="header__nav-link header__nav-link--profile"
              to={AppRoute.LOGIN}
            >
              <div className="header__avatar-wrapper user__avatar-wrapper"/>
              <span className="header__login">[Sign in]</span>
            </Link>
          </li>
        </ul>
      }
    </nav>
  );
};

export default UserNav;
