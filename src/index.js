import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { render } from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./compon/menu";

import App from "./Routes/app";
import InmuNew from "./Routes/inmueble-new";
import Inmu1 from "./Routes/inmueble";
import Somos from "./Routes/somos";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<App />} />
          <Route path="/inmueble">
            <Route path=":inmuebleId" element={<Inmu1 />} />
            <Route index element={<h1>Hola</h1>} />
          </Route>
        </Route>
        <Route path="/new" element={<InmuNew />} />
        <Route path="/somos">
          <Route index element={<Somos />} />
        </Route>
        <Route path="/contact">
          <Route
            index
            element={
              <div>
                <Menu /> <h1>Vicio 6 somos todos</h1>{" "}
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
