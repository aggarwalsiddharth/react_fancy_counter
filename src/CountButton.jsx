import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

const CountButton = ({ type, setCount, setLocked }) => {
  const handleClick = (event) => {
    setCount((prev) => {
      if (type === "minus") {
        setLocked(false);
        if (prev > 0) return prev - 1;
        else return 0;
      } else {
        if (prev >= 10) {
          setLocked(true);
          return 10;
        } else return prev + 1;
      }
    });
  };
  return (
    <button className="count-btn" onClick={handleClick}>
      {type === "minus" ? (
        <MinusIcon className="count-btn-icon" />
      ) : (
        <PlusIcon className="count-btn-icon" />
      )}
    </button>
  );
};

export default CountButton;
