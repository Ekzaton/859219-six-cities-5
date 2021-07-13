import React from "react";

const LoadingPage = (): JSX.Element => {
  return (
    <main className="page__main">
      <h1
        className="property__name"
        style={{marginTop: `45vh`}}
      >
        Loading data... Please wait
      </h1>
    </main>
  );
};

export default LoadingPage;
