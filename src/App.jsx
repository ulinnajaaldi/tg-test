import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomePage";
import LogicTestPage from "./pages/LogicTestPage";
import Layout from "./pages/layout";

export default function App() {
  const routes = [
    { path: "/", component: <HomePage /> },
    { path: "/logic", component: <LogicTestPage /> },
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
