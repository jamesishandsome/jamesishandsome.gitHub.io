import * as React from 'react';
import { HashRouter, Route, Routes } from "react-router-dom";
import App from "../pages/App";

export default class RouteConfig extends React.Component {
  render(){
    return (
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<App />} />
        </Routes>
      </HashRouter>
    )
  }
}

const Home = () => {
  return <div>hello world</div>
}