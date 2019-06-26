import React from "react";

const todoListItem = ({ todo }) => {
  return (
    <li>
      {todo.title}
      <br></br>
      {todo.body}
      <br></br>
      {todo.done}
    </li>
  )
};

export default todoListItem;