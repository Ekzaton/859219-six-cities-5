import * as React from "react";

import Main from "../main/main";

interface Props {
  offersCount: number;
  ratingValue: number;
}

const App: React.FunctionComponent<Props> = (props: Props) => {
  const {offersCount, ratingValue} = props;

  return (
    <Main
      offersCount={offersCount}
      ratingValue={ratingValue}
    />
  );
};

export default App;
