import React from "react";

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
