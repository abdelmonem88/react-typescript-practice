import React from "react";

type WrappedComponentProps = {
  count: number;
  handleIncrease: () => void;
};

const WithCounter = (WrappedComponent: React.FC<WrappedComponentProps>) => {
  function NewWIncreaseComponent(props: any) {
    const [count, setCount] = React.useState(0);
    const handleIncrease = () => {
      setCount(count + 1);
    };
    return (
      <WrappedComponent
        {...props}
        count={count}
        handleIncrease={handleIncrease}
      />
    );
  }
  return NewWIncreaseComponent;
};

export default WithCounter;
