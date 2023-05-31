import React from "react";
import Modal from "../components/Modal";

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
      <h1>Home</h1>
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
    </div>
  );
};

export default Home;
