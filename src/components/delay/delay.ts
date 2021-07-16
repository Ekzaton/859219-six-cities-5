import {useEffect, useState} from 'react';

type DelayProps = {
  children: JSX.Element;
  duration: number;
};

const Delay = (props: DelayProps): JSX.Element | null => {
  const {children, duration} = props;

  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsShown(true);
    }, duration);

    return () => {
      clearTimeout(timeout);
    };
  }, [duration]);

  return isShown ? children : null;
};

export default Delay;
