import React from "react";

 const todoListItem = ({todo}) => (
  <li>
    {todo.title}
    {todo.body}
    {todo.done}
  </li>
 );

export default todoListItem;