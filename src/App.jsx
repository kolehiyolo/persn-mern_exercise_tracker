import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from "react-router-dom";

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
      <Route path="/" exact component={ExercisesList} />
      <Route path="/edit/:id" exact component={EditExercises} />
      <Route path="/create" exact component={CreateExercise} />
      <Route path="/user" exact component={CreateUser} />
    </Router>
  );
}