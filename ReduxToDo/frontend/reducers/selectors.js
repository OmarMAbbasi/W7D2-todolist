const allTodos = (state) =>  {
  let result = [];
  Object.keys(state.todos).forEach(todoKey=> {
    result.push(state.todos[todoKey]);
  });
  return result;
}





export default allTodos;