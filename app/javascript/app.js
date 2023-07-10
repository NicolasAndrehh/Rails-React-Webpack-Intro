import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Greeting from "./greeting";

function App() {
    return (
        <Routes>
            <Route path="/" element={
                <div>
                    <Link to="/greeting">Greeting</Link>
                    <h1>Home</h1>
                </div>
            }
            />
            <Route path="/greeting" element={<Greeting />} />
        </Routes>
    );
};

export default App;