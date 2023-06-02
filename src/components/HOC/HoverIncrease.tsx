import WithCounter from "./WithCounter";

type Props = {
  count: number;
  handleIncrease: () => void;
};

const HoverIncrease = ({ count, handleIncrease }: Props) => {
  return (
    <div>
      <h1>{count}</h1>
      <button
        style={{
          padding: "1rem",
          fontSize: "1.5rem",
          cursor: "pointer",
          border: "none",
          background: "Green",
          borderRadius: "0.5rem",
          color: "#fff",
        }}
        onMouseOver={() => handleIncrease()}
      >
        Hover to increase
      </button>
    </div>
  );
};

export default WithCounter(HoverIncrease);
