import React from "react";
import Modal from "../components/Modal/Modal";
import ClickIncreas from "../components/HOC/ClickIncreas";
import HoverIncrease from "../components/HOC/HoverIncrease";
import RenderPropsWrapper from "../components/RenderProps/RenderPropsWrapper";
import CounterOne from "../components/RenderProps/CounterOne";
import CounterTwo from "../components/RenderProps/CounterTwo";

type Props = {};

const Home = (props: Props) => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h3>React Portal</h3>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        This is a modal. It is not part of the React Router DOM. It is a sibling
      </Modal>
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
        onClick={() => setShowModal(true)}
      >
        Show Modal
      </button>
      <h3>Higher Order Componet</h3>
      <ClickIncreas />
      <HoverIncrease />
      <h3>Render Props</h3>
      <RenderPropsWrapper
        render={(count, handleIncrease) => (
          <CounterOne count={count} handleIncrease={handleIncrease} />
        )}
      />
      <RenderPropsWrapper
        render={(count, handleIncrease) => (
          <CounterTwo count={count} handleIncrease={handleIncrease} />
        )}
      />
    </div>
  );
};

export default Home;
