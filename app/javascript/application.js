import "@hotwired/turbo-rails";
import React from 'react';
import ReactDOM from 'react-dom';
// import { Route, Routes } from 'react-router-dom';
// import Message from "./message";

function App() {
    return (<h1>Hello World!</h1>);
}

ReactDOM.render(
    // <Routes>
    //     <Route exact path="/" component={App} />
    //     <Route exact path="/greeting" component={Message} />
    // </Routes>,
    <App />,
    document.getElementById('root'),
);