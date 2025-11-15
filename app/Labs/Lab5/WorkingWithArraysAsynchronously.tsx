"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useEffect, useState } from "react";
import { ListGroup, ListGroupItem, FormControl } from "react-bootstrap";
import { FaPlusCircle, FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { TiDelete } from "react-icons/ti";
import * as client from "./client";

export default function WorkingWithArraysAsynchronously() {
  const [todos, setTodos] = useState<any[]>([]);

  const fetchTodos = async () => {
    const data = await client.fetchTodos();
    setTodos(data);
  };

  const createNewTodo = async () => {
    const data = await client.createNewTodo();
    setTodos(data);
  };

  const removeTodo = async (todo: any) => {
    const data = await client.removeTodo(todo);
    setTodos(data);
  };

  const deleteTodo = async (todo: any) => {
    await client.deleteTodo(todo);
    const newTodos = todos.filter((t) => t.id !== todo.id);
    setTodos(newTodos);
  };

  const editTodo = (todo: any) => {
    const updated = todos.map((t) => (t.id === todo.id ? { ...todo, editing: true } : t));
    setTodos(updated);
  };

  const updateTodo = async (todo: any) => {
    const updatedItem = await client.updateTodo(todo);
    const updated = todos.map((t) => (t.id === todo.id ? updatedItem : t));
    setTodos(updated);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div id="wd-asynchronous-arrays">
      <h3>Working with Arrays Asynchronously</h3>
      <h4>
        Todos{" "}
        <FaPlusCircle
          onClick={createNewTodo}
          className="text-success float-end fs-3"
          id="wd-create-new-todo"
          role="button"
          title="Add todo"
        />
      </h4>

      <ListGroup>
        {todos.map((todo: any) => (
          <ListGroupItem key={todo.id}>
            <FaPencil
              onClick={() => editTodo(todo)}
              className="text-primary float-end me-2 mt-1"
              id="wd-edit-todo"
              role="button"
              title="Edit title"
            />
            <FaTrash
              onClick={() => removeTodo(todo)}
              className="text-danger float-end mt-1"
              id="wd-remove-todo"
              role="button"
              title="Remove todo (server returns list)"
            />
            <TiDelete
              onClick={() => deleteTodo(todo)}
              className="text-danger float-end me-2 fs-3"
              id="wd-delete-todo"
              role="button"
              title="Delete todo (client filters)"
            />

            <input
              type="checkbox"
              className="form-check-input me-2 float-start"
              checked={!!todo.completed}
              onChange={(e) => updateTodo({ ...todo, completed: e.target.checked })}
            />

            {!todo.editing ? (
              <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
                {todo.title}
              </span>
            ) : (
              <FormControl
                className="w-50 float-start"
                defaultValue={todo.title}
                onKeyDown={(e) => {
                  if (e.key === "Enter") updateTodo({ ...todo, editing: false });
                }}
                onChange={(e) => updateTodo({ ...todo, title: e.target.value })}
              />
            )}
          </ListGroupItem>
        ))}
      </ListGroup>
      <hr />
    </div>
  );
}