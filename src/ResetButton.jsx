import { ResetIcon } from "@radix-ui/react-icons";

const ResetButton = ({ setCount, setLocked }) => {
  const handleClick = (event) => {
    setCount(0);
    setLocked(false);
  };
  return (
    <button className="reset-btn" onClick={handleClick}>
      <ResetIcon className="reset-btn-icon" />
    </button>
  );
};

export default ResetButton;
