import React from "react";
import todoListItem from "../todo_list/todo_list_item";
import todos from "./todo_list_container";


const toDoList = () => (
  <ul>
   {todos.todos.map((todo) => {
     <li>{todo}</li>
   })}
 </ul>
)

export default toDoList;