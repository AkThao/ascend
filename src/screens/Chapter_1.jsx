import React, { useState, useEffect } from "react";

const Chapter1 = () => {
    const allStorylines = [
        "I’ve been here as long as I can remember",
        "In fact, this is all I’ve ever known, all any of us have ever known",
        "I live in a dark, yet serene kingdom called the Underworld",
        "I like it here, but growing up I heard many a tale of a sought-after land far above ours",
        "They call it the Skyworld",
        "Why they call it that I have no idea",
        "What I do know is that it is a magical land where light is everywhere, all the time",
        "I can't imagine what that's like",
        "Here we have to create our own light, and it's not always abundant"
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

    const handleSkip = () => {
        if (typing) {
            setTyping(false);
            setCurrLineText("");
            setCurrLineIdx(allStorylines.length);
            setCurrStorylines([...allStorylines]);
        } else {
            setTyping(false);
            setCurrLineText("");
            setCurrLineIdx(allStorylines.length);
            setCurrStorylines([...allStorylines]);
        }
    };

    useEffect(() => {
        // If not typing, don't bother running animation
        if (!typing) {
            return
        };

        if (typing && currLineText.length < allStorylines[currLineIdx].length) {
            const timeout = setTimeout(() => {
                setCurrLineText(
                    allStorylines[currLineIdx].slice(0, currLineText.length + 1)
                );
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
                    height: "calc(100vh - 40px)",
                    width: "100vw",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
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
            <button
                onClick={handleSkip}
                style={{
                    width: "150px",
                    position: "absolute",
                    bottom: "20px"
                }}
            >
                Skip
            </button>
        </>
    );
};

export default Chapter1;
