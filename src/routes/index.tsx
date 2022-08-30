import * as React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../pages/App";

export default class RouteConfig extends React.Component {
  render(){
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<App />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

const Home = () => {
  return <div>hello world</div>
}