import React, {Component, useState} from "react";

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
