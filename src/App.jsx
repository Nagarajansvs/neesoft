import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./component/Header";
import Footer from "./component/Footer";

import Login from "./component/Pages/Login";
import ProjectLabel from "./component/Pages/ProjectLabel";
import Project from "./component/Pages/Project";
import AddProject from "./component/Pages/AddProject";
import ViewProject from "./component/Pages/ViewProject";

function App() {
  return (
    // <BrowserRouter basename="/uatmioot/uidesign/React/Itsllegal">
    <BrowserRouter>
      <Header />
      <main className="flex-shrink-0">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/project" element={<Project />} />
          <Route path="/addproject" element={<AddProject />} />
          <Route path="/view" element={<ViewProject />} />
          <Route path="/projectlabel" element={<ProjectLabel />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
