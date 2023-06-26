import React from 'react';
import {Link} from 'react-router-dom';

export default function Exercise(props) {
  function onDelete(id) {
    props.deleteExercise(id);
  };

  return (
    <tr>
      <td>{props.exercise.username}</td>
      <td>{props.exercise.description}</td>
      <td>{props.exercise.duration}</td>
      <td>{props.exercise.date.substring(0,10)}</td>
      <td>
        <Link to={`/edit/${props.exercise._id}`}>Edit </Link>
        <span> | </span>
        <a 
          href="#" 
          onClick={
            () => {
              onDelete(props.exercise._id)
            }
          }
        >
          Delete
        </a>
      </td>
    </tr>
  )
}