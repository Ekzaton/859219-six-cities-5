import React from "react";

const PageLoadingError = (): JSX.Element => {
  return (
    <div className="property__container container">
      <div className="property__wrapper">
        <div className="property__name-wrapper">
          <h1 className="property__name" style={{marginTop: `40vh`}}>
            Loading error! Please try again later
          </h1>
        </div>
      </div>
    </div>
  );
};

export default PageLoadingError;
