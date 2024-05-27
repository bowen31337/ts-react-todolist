import React, { useState, useRef, useEffect } from "react";
import "./TodoList.css";

interface Todo {
  id: number;
  text: string;
  isEditing: boolean;
  originalText: string;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: newTodo,
          isEditing: false,
          originalText: newTodo,
        },
      ]);
      setNewTodo("");
    }
  };

  const handleKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement>,
    id?: number
  ) => {
    if (event.key === "Enter") {
      if (id) {
        saveTodo(id);
      } else {
        addTodo();
      }
    } else if (event.key === "Escape" && id) {
      cancelEdit(id);
    }
  };

  const editTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isEditing: true, originalText: todo.text }
          : todo
      )
    );
  };

  const handleInputChange = (id: number, newText: string) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  const saveTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: false } : todo
      )
    );
  };

  const cancelEdit = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isEditing: false, text: todo.originalText }
          : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    if (inputRef.current && todos.some((todo) => todo.isEditing)) {
      inputRef.current.focus();
      inputRef.current.setSelectionRange(
        inputRef.current.value.length,
        inputRef.current.value.length
      );
    }
  }, [todos]);

  return (
    <div className="todo-list-container">
      <h1>Todo List</h1>
      <div className="input-container">
        <label htmlFor="new-todo" className="sr-only">
          Add a new todo
        </label>
        <input
          type="text"
          id="new-todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyPress={(e) => handleKeyPress(e)}
          placeholder="Add a new todo"
          aria-label="Add a new todo"
        />
        <button className="add-button" onClick={addTodo} aria-label="Add Todo">
          Add Todo
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item" role="listitem">
            {todo.isEditing ? (
              <>
                <label htmlFor={`edit-todo-${todo.id}`} className="sr-only">
                  Edit todo
                </label>
                <input
                  ref={inputRef}
                  type="text"
                  id={`edit-todo-${todo.id}`}
                  value={todo.text}
                  onChange={(e) => handleInputChange(todo.id, e.target.value)}
                  onKeyDown={(e) => handleKeyPress(e, todo.id)}
                  className="edit-input"
                  aria-label="Edit todo"
                />
                <div className="button-group">
                  <button
                    className="save-button"
                    onClick={() => saveTodo(todo.id)}
                    aria-label="Save Todo"
                  >
                    Save
                  </button>
                  <button
                    className="cancel-button"
                    onClick={() => cancelEdit(todo.id)}
                    aria-label="Cancel Edit"
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <span className="todo-text">{todo.text}</span>
                <div className="button-group">
                  <button
                    className="edit-button"
                    onClick={() => editTodo(todo.id)}
                    aria-label="Edit Todo"
                  >
                    Edit
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => deleteTodo(todo.id)}
                    aria-label="Delete Todo"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
