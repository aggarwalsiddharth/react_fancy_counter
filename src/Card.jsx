import Title from "./Title";
import Count from "./Count";
import ResetButton from "./ResetButton";
import ButtonContainer from "./ButtonContainer";
import CountButton from "./CountButton";
import { useState } from "react";

const Card = () => {
  const [count, setCount] = useState(0);
  const [locked, setLocked] = useState(false);
  return (
    <div className="card">
      <Title locked={locked} />
      <Count count={count} />
      <ResetButton setCount={setCount} setLocked={setLocked} />
      <ButtonContainer>
        <CountButton type="minus" setCount={setCount} setLocked={setLocked} />
        <CountButton type="plus" setCount={setCount} setLocked={setLocked} />
      </ButtonContainer>
    </div>
  );
};

export default Card;
