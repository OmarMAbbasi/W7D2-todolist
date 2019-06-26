import React from "react";
import {connect} from "react-redux";
import TodoList from "./todo_list";
import allTodos from "../../reducers/selectors";
import { receiveTodos } from "../../actions/todos_action";

const mapStateToProps = (state) => ({
  todos: allTodos(state)
});

const mapDispatchToProps = (dispatch) => ({
  receiveTodos: (todo) => dispatch(receiveTodos(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
