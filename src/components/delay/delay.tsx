import React from 'react';

type DelayProps = {
  children: JSX.Element;
  waiting: number;
};

const Delay = (props: DelayProps): JSX.Element | null => {
  const {children, waiting} = props;

  const [isShown, setIsShown] = React.useState(false);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setIsShown(true);
    }, waiting);

    return () => {
      clearTimeout(timeout);
    };
  }, [waiting]);

  return isShown ? children : null;
};

export default Delay;
