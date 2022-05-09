import React from "react";
import { Typography, Paper, AppBar, Toolbar, Grid } from "@mui/material";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import useTodoState from "../Hooks/useTodosState";
// import useLocalStorageState from "../Hooks/useLocalStorageState";
export default function TodoApp() {
  const initialTodos = JSON.parse(window.localStorage.getItem('todos') || "[]")
  const {todos, addTodo, removeTodo, toggleTodo, editTodo} = useTodoState(initialTodos);
  // const [mood,setMood] = useLocalStorageState("mood","happy");
  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "aqua",
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit"> TODOS WITH HOOKS </Typography>
        </Toolbar>
      </AppBar>
      <Grid container justifyContent="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          />
          {/* <button onClick={() => setMood("Angry")}></button> */}
        </Grid>
      </Grid>
    </Paper>
  );
}