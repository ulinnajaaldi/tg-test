import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomePage";
import LogicTest from "./pages/LogicTest";
import LogicTest2 from "./pages/LogicTest2";
import Layout from "./pages/layout";

export default function App() {
  const routes = [
    { path: "/", component: <HomePage /> },
    { path: "/logic-1", component: <LogicTest /> },
    { path: "/logic-2", component: <LogicTest2 /> },
  ];
  return (
    <>
      <Layout>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.component} />
          ))}
        </Routes>
      </Layout>
    </>
  );
}
