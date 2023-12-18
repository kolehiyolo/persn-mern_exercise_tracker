import React, {useState, useEffect} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {useParams} from 'react-router-dom';
import axios from 'axios';

export default function EditExercise() {
  const [newExercise, setNewExercise] = useState(
    {
      username: '',
      description: '',
      duration: 0,
      date: new Date(),
    }
  );

  const [users, setUsers] = useState(
    ['']
  );

  const {id: urlID} = useParams();

  useEffect(
    () => {
      axios.get('http://localhost:2000/users')
        .then(
          res => setUsers(res.data.map(item => item.username))
        )
        .catch(
          err => res.status(400).json(`Error: ${err}`)
        );

      axios.get(`http://localhost:2000/exercises/${urlID}`)
        .then(
          res => setNewExercise(
            {
              ...res.data,
              date: new Date(res.data.date)
            }
          )
        )
        .catch(
          err => res.status(400).json(`Error: ${err}`)
        );
    },
    []
  );  
  
  function onInputChange(event) {
    const {name, value} = event.target;

    console.log(`${name} = ${value}`); 

    setNewExercise(
      prevValue => {
        return {...prevValue, [name]: value};
      }
    );
  };

  function onChangeDate(date) {
    setNewExercise(
      prevValue => {
        return {...prevValue, 'date': date};
      }
    );
  };

  function onSubmit(event) {
    event.preventDefault();

    console.log(newExercise); 

    axios.post(`http://localhost:2000/exercises/update/${urlID}`, newExercise)
      .then(
        res => console.log(res.data)
      )
      .catch(
        err => res.status(400).json(`Error: ${err}`)
      );

    setNewExercise(
      {
        username: '',
        description: '',
        duration: 0,
        date: new Date(),
      }
    );
  };

  return (
    <div>
      <h3>Edit Exercise Log</h3>
      <form>
        <div className="mb-3">
          <label className="form-label">Username: </label>
          <select 
            className="form-control"
            value={newExercise.username}
            onChange={onInputChange}
            name="username"
            required
          >
            {
              users.map(
                (user, index) => {
                  return (
                    <option
                      key={index}
                      value={user}
                    >
                      {user}
                    </option>
                  )
                }
              )
            }
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Description: </label>
          <textarea
            className="form-control"
            required
            onChange={onInputChange}
            type="text"
            name="description"
            value={newExercise.description}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Duration: </label>
          <input
            className="form-control"
            required
            onChange={onInputChange}
            type="number"
            name="duration"
            value={newExercise.duration}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Date: </label>
          <br />
          <DatePicker
            selected={newExercise.date} 
            onChange={onChangeDate}
          />
        </div>
        <div className="mb-3">
          <button className="btn btn-primary" onClick={onSubmit}>Submit</button>
        </div>
      </form>
    </div>
  );
};
