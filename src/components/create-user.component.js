import React, {useState} from "react";
import axios from 'axios';

export default function CreateUser() {
  const [newUser, setNewUser] = useState(
    {
      username: ''
    }
  );

  function onInputChange(event) {
    const {value} = event.target;

    setNewUser(
      {
        username: value
      }
    );
  };

  function onSubmit(event) {
    event.preventDefault();

    console.log(newUser); 

    axios.post('http://localhost:5000/users/add', newUser)
      .then(
        res => console.log(res.data)
      )
      .catch(
        err => res.status(400).json(`Error: ${err}`)
      );

    setNewUser(
      {
        username: ''
      }
    );
  };

  return (
    <div>
      <h3>Create New User</h3>
      <form>
        <div className="mb-3">
          <label className="form-label">Username: </label>
          <input
            className="form-control"
            required
            onChange={onInputChange}
            type="text"
            name="username"
            value={newUser.username}
          />
        </div>
        <div className="mb-3">
          <button className="btn btn-primary" onClick={onSubmit}>Submit</button>
        </div>
      </form>
    </div>
  );
};
