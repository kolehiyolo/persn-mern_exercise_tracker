import React, {Component, useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function CreateExercise() {
  const [newExercise, setNewExercise] = useState(
    {
      username: 'test user',
      description: '',
      duration: 0,
      date: new Date(),
    }
  );

  const [users, setUsers] = useState(
    ['test user']
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

    window.location = '/';
  };

  return (
    <div>
      <h3>Create New Exercise Log</h3>
      <form>
        <div className="mb-3">
          <label className="form-label">Username: </label>
          <select 
            className="form-control"
            value={newExercise.username}
            onChange={onInputChange}
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
