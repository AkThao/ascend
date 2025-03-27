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
        "Here we have to create our own light, and it's not always abundant",
        "Speaking of which, I should probably have a look around..."
    ];
    // Story-management
    const [currStorylines, setCurrStorylines] = useState([]); // Stores lines currently displayed on screen
    const [isTyping, setIsTyping] = useState(false); // Pauses interaction during typewriter effect
    const [currLineIdx, setCurrLineIdx] = useState(0); // Tracks line currently being typed
    const [currLineText, setCurrLineText] = useState(""); // Holds text being typed on current line

    // Stats
    const [showStats, setShowStats] = useState(false);
    const [lightLevel, setLightLevel] = useState(0);
    const [isPlayerTorchLit, setIsPlayerTorchLit] = useState(false);

    const handleNextLine = () => {
        if (currLineIdx >= allStorylines.length) {
            setShowStats(true);
            return;
        }

        if (isTyping || currLineIdx >= allStorylines.length) {
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
            setIsTyping(true);
            setCurrLineText("");
        }
    };

    const handleSkip = () => {
        if (isTyping) {
            setIsTyping(false);
            setCurrLineText("");
            setCurrLineIdx(allStorylines.length);
            setCurrStorylines([...allStorylines]);
        } else {
            setIsTyping(false);
            setCurrLineText("");
            setCurrLineIdx(allStorylines.length);
            setCurrStorylines([...allStorylines]);
        }

        setShowStats(true);
    };

    const handleLightTorch = () => {
        if (isPlayerTorchLit === false) {
            setLightLevel((lightLevel) => lightLevel + 1);
            setIsPlayerTorchLit(true);
        }
    };

    useEffect(() => {
        // If not typing, don't bother running animation
        if (!isTyping) {
            return;
        }

        if (
            isTyping &&
            currLineText.length < allStorylines[currLineIdx].length
        ) {
            const timeout = setTimeout(() => {
                setCurrLineText(
                    allStorylines[currLineIdx].slice(0, currLineText.length + 1)
                );
            }, 50);

            return () => clearTimeout(timeout);
        } else if (isTyping) {
            // Finished typing
            setIsTyping(false);
            setCurrLineText("");
            setCurrStorylines([...currStorylines, allStorylines[currLineIdx]]);
            setCurrLineIdx(currLineIdx + 1);
        }
    }, [isTyping, currLineText, currLineIdx, allStorylines]);

    return (
        <div
            style={{
                boxSizing: "border-box",
                height: "100vh",
                width: "100vw",
                padding: "20px 20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center"
            }}
        >
            {showStats && (
                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between"
                    }}
                >
                    <div
                        style={{
                            textAlign: "left"
                        }}
                    >
                        Light level: {lightLevel}
                    </div>
                    <button onClick={handleLightTorch}>Light torch</button>
                    {/* Have a timer bar below this */}
                </div>
            )}
            <div
                onClick={handleNextLine}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    fontFamily: "monospace",
                    userSelect: "none",
                    height: "100%"
                }}
            >
                <h1>Chapter 1: Look to the Sky</h1>
                {currStorylines.map((line, idx) => (
                    <p key={idx}>{line}</p>
                ))}
                {isTyping && <p>{currLineText}</p>}
            </div>
            <button
                onClick={handleSkip}
                style={{
                    width: "150px"
                }}
            >
                Skip
            </button>
        </div>
    );
};

export default Chapter1;
