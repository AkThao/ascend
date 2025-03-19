import React from "react";

const Home = ({ onContinue }) => {
    return (
        <>
            <h1>Ascend</h1>
            <p onClick={onContinue} style={{ cursor: "pointer" }}>Click to continue...</p>
        </>
    );
};

export default Home;