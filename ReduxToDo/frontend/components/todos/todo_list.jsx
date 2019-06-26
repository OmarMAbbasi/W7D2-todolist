import React from "react";
import TodoListItem from "./todo_list_item";
// import TodoForm from "./todo_form";  


class ToDoList extends React.Component {
  render() {
    const {todos} = this.props
    const todoList = todos.map((todo) => (
      <TodoListItem
        key={todo.id}
        todo={todo} />
    ));
    return (
      <ul>
        {todoList}
      </ul>
    );
  }
}

export default ToDoList;