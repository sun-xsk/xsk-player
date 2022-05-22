import React from "react";
import {useRoutes} from "react-router-dom";
import  routes from "./routes";
import "./index.css";

export default function Content() {
  let route = useRoutes(routes);
  return (
    <div className="content">
      {route}
    </div>
  );
}
