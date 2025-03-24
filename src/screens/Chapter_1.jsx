import React, { useState } from "react";

const Chapter1 = () => {
    const allStorylines = [
        "I’ve been here as long as I can remember",
        "In fact, this is all I’ve ever known, all any of us have ever known"
    ];
    const [currStorylines, setCurrStorylines] = useState([]);

    const handleNextLine = () => {
        if (currStorylines.length < allStorylines.length) {
            setCurrStorylines([...currStorylines, allStorylines[currStorylines.length]]);
        }
    };

    return (
        <>
            <div
                onClick={handleNextLine}
                style={{
                    height: "100vh",
                    width: "100vw",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    fontFamily: "monospace"
                }}
            >
                <h1>Chapter 1: Look to the Sky</h1>
                {currStorylines.map((line, idx) => (
                    <p key={idx}>{line}</p>
                ))}
            </div>
        </>
    );
};

export default Chapter1;
