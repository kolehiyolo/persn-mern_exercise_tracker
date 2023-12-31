import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Navbar from "./components/navbar.component.js";
import ExercisesList from "./components/exercises-list.component.js";
import EditExercises from "./components/edit-exercise.component.js";
import CreateExercise from "./components/create-exercise.component.js";
import CreateUser from "./components/create-user.component.js";

export default function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <div className="container">
      <Routes>
        <Route path="/" exact element={<ExercisesList />} />
        <Route path="/edit/:id" exact element={<EditExercises />} />
        <Route path="/create" exact element={<CreateExercise />} />
        <Route path="/user" exact element={<CreateUser />} />
      </Routes>
      </div>
    </Router>
  );
};