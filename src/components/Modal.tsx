import React from "react";
import ReactDOM from "react-dom";

type Props = {
  children: React.ReactNode;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal = (props: Props) => {
  return (
    <div>
      {props.showModal &&
        ReactDOM.createPortal(
          <div
            style={{
              position: "fixed",
              top: "0",
              left: "0",
              width: "100vw",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          >
            <div
              style={{
                position: "relative",
                backgroundColor: "#fff",
                padding: "2rem",
                borderRadius: "0.5rem",
              }}
            >
              <button
                style={{
                  position: "absolute",
                  top: "1rem",
                  right: "1rem",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                  border: "none",
                  background: "transparent",
                }}
                onClick={() => props.setShowModal(false)}
              >
                <span role="img" aria-label="close">
                  ❌
                </span>
              </button>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "1rem",
                  paddingTop: "1rem",
                }}
              >
                {props.children}
              </div>
            </div>
          </div>,
          document.getElementById("portal-root") as HTMLElement
        )}
    </div>
  );
};

export default Modal;
