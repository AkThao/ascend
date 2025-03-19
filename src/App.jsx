import { useState } from "react";
import "./App.css";
import Home from "./screens/Home";
import Chapter1 from "./screens/Chapter_1";

function App() {
    const [screen, setScreen] = useState("home");

    return (
        <>
            {screen == "home" && <Home onContinue={() => setScreen("ch1")} />}
            {screen == "ch1" && <Chapter1 />}
        </>
    );
}

export default App;
