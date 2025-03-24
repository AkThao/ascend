import React, { useState, useEffect } from "react";

const Chapter1 = () => {
    const allStorylines = [
        "I’ve been here as long as I can remember",
        "In fact, this is all I’ve ever known, all any of us have ever known"
    ];
    const [currStorylines, setCurrStorylines] = useState([]); // Stores lines currently displayed on screen
    const [typing, setTyping] = useState(false); // Pauses interaction during typewriter effect
    const [currLineIdx, setCurrLineIdx] = useState(0); // Tracks line currently being typed
    const [currLineText, setCurrLineText] = useState(""); // Holds text being typed on current line

    const handleNextLine = () => {
        if (typing || currLineIdx >= allStorylines.length) {
            // Don't do anything if line is being typed out or end of text is reached
            return;
        }

        if (currLineText === allStorylines[currLineIdx]) {
            // If current line is fully typed, reset controls for next line
            setCurrStorylines([...currStorylines, currLineText]);
            setCurrLineText("");
            setCurrLineIdx(currLineIdx + 1);
        } else {
            // Start typing next line
            setTyping(true);
            setCurrLineText("");
        }
    };

    useEffect(() => {
        if (typing && currLineText.length < allStorylines[currLineIdx].length) {
            const timeout = setTimeout(() => {
                setCurrLineText(allStorylines[currLineIdx].slice(0, currLineText.length + 1));
            }, 50);

            return () => clearTimeout(timeout);
        } else if (typing) {
            // Finished typing
            setTyping(false);
            setCurrLineText("");
            setCurrStorylines([...currStorylines, allStorylines[currLineIdx]]);
            setCurrLineIdx(currLineIdx + 1);
        }
    }, [typing, currLineText, currLineIdx, allStorylines]);

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
                    fontFamily: "monospace",
                    userSelect: "none"
                }}
            >
                <h1>Chapter 1: Look to the Sky</h1>
                {currStorylines.map((line, idx) => (
                    <p key={idx}>{line}</p>
                ))}
                {typing && <p>{currLineText}</p>}
            </div>
        </>
    );
};

export default Chapter1;
