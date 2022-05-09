import {
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
  ListItemSecondaryAction,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import React from "react";
import useToggleState from "../Hooks/useToggleState";
import EditTodoForm from "./EditTodoForm";
export default function Todo({ task, id, completed, removeTodo, toggleTodo, editTodo }) {
  const [isEditing, toggle] = useToggleState();
  return (
    <ListItem style={{height: "64px"}}>
      {isEditing ? (
        <EditTodoForm editTodo={editTodo} id={id} task={task} toggleEditForm={toggle}/>
      ) : (
        <>
          <Checkbox checked={completed} onClick={() => toggleTodo(id)} />
          <ListItemText
            style={{ textDecoration: completed ? "Line-through" : "none" }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
              <Delete />
            </IconButton>
            <IconButton aria-label="Edit" onClick={toggle}>
              <Edit />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}
