import React, {useState, useEffect} from "react";
import axios from 'axios';
import Exercise from './exercise.component.js';

export default function ExercisesList() {
  const [exercises, setExercises] = useState([]);

  useEffect(
    () => {
      fetchExercises();
    },
    []
  );

  function fetchExercises() {
    console.log(`fetchExercises()`); 
    axios.get('http://localhost:2000/exercises')
      .then(
        res => setExercises(res.data)
      )
      .catch(
        err => res.status(400).json(`Error: ${err}`)
      );
  };

  function deleteExercise(id) {
    axios.delete(`http://localhost:2000/exercises/${id}`)
      .then(
        res => {
          console.log(res.data);
          fetchExercises();
        }
      )
      .catch(
        err => res.status(400).json(`Error: ${err}`)
      );
  }

  function generateExerciseItem(item) {
    return (
      <Exercise
        exercise={item}
        deleteExercise={deleteExercise}
        key={item._id}
      />
    )
  }

  return (
    <div>
      <h3>Logged Exercises</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Username</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            exercises.map(generateExerciseItem)
          }
        </tbody>
      </table>
    </div>
  );
};
