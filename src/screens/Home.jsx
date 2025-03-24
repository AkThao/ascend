import React from "react";
import "../styles/Home.css";

const Home = ({ onContinue }) => {
    return (
        <>
            <h1
                style={{
                    fontFamily: "monospace",
                    fontSize: "60px",
                    userSelect: "none"
                }}
            >
                Ascend
            </h1>
            <p
                className="continue-button"
                onClick={onContinue}
                style={{
                    cursor: "pointer",
                    fontFamily: "monospace",
                    userSelect: "none"
                }}
            >
                Click to continue...
            </p>
        </>
    );
};

export default Home;
