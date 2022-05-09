import { v4 as uuid } from "uuid";
import useLocalStorageState from "./useLocalStorageState";
export default function useTodoState(initialTodos){
    const [todos, setTodos] = useLocalStorageState("todos",initialTodos);
    return{
        todos, 
        addTodo: newTodoText => {
                setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }]);
        },
        removeTodo: (todoId) => {
                const updatedTodos = todos.filter((todo) => todo.id !== todoId);
                setTodos(updatedTodos);
              },
        toggleTodo: (todoId) => {
                const updatedTodos = todos.map((todo) =>
                  todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
                );
                setTodos(updatedTodos);
              },
        editTodo : (todoId, newTask) => {
                    const updatedTodos = todos.map((todo) =>
                      todo.id === todoId ? { ...todo, task: newTask } : todo
                    );
                    setTodos(updatedTodos);
                  }
    }
}
// const addTodo = (newTodoText) => {
//     setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }]);
//   };
//   const removeTodo = (todoId) => {
//     const updatedTodos = todos.filter((todo) => todo.id !== todoId);
//     setTodos(updatedTodos);
//   };
//   const toggleTodo = (todoId) => {
//     const updatedTodos = todos.map((todo) =>
//       todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
//     );
//     setTodos(updatedTodos);
//   };
//   const editTodo = (todoId, newTask) => {
//     const updatedTodos = todos.map((todo) =>
//       todo.id === todoId ? { ...todo, task: newTask } : todo
//     );
//     setTodos(updatedTodos);
//   };
//   return {
//       todos,
//       addTodo: addTodo,
//       removeTodo: removeTodo,
//       toggleTodo: toggleTodo,
//       editTodo: editTodo
//   }