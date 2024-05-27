import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect, beforeEach } from "vitest";
import TodoList from "./App";

describe("TodoList", () => {
  beforeEach(() => {
    render(<TodoList />);
  });

  it("should add a new todo item", () => {
    const input = screen.getByPlaceholderText("Add a new todo");
    const addButton = screen.getByText("Add Todo");

    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.click(addButton);

    expect(screen.getByText("New Todo")).toBeInTheDocument();
  });

  it("should edit a todo item", () => {
    const input = screen.getByPlaceholderText("Add a new todo");
    const addButton = screen.getByText("Add Todo");

    fireEvent.change(input, { target: { value: "Edit Todo" } });
    fireEvent.click(addButton);

    const editButton = screen.getByText("Edit");
    fireEvent.click(editButton);

    const editInput = screen.getByDisplayValue("Edit Todo");
    fireEvent.change(editInput, { target: { value: "Edited Todo" } });

    const saveButton = screen.getByText("Save");
    fireEvent.click(saveButton);

    expect(screen.getByText("Edited Todo")).toBeInTheDocument();
  });

  it("should cancel editing a todo item", () => {
    const input = screen.getByPlaceholderText("Add a new todo");
    const addButton = screen.getByText("Add Todo");

    fireEvent.change(input, { target: { value: "Cancel Edit Todo" } });
    fireEvent.click(addButton);

    const editButton = screen.getByText("Edit");
    fireEvent.click(editButton);

    const editInput = screen.getByDisplayValue("Cancel Edit Todo");
    fireEvent.change(editInput, { target: { value: "Edited Todo" } });

    const cancelButton = screen.getByText("Cancel");
    fireEvent.click(cancelButton);

    expect(screen.getByText("Cancel Edit Todo")).toBeInTheDocument();
  });

  it("should delete a todo item", () => {
    const input = screen.getByPlaceholderText("Add a new todo");
    const addButton = screen.getByText("Add Todo");

    fireEvent.change(input, { target: { value: "Delete Todo" } });
    fireEvent.click(addButton);

    const deleteButton = screen.getByText("Delete");
    fireEvent.click(deleteButton);

    expect(screen.queryByText("Delete Todo")).not.toBeInTheDocument();
  });

  it("should add a new todo item by pressing Enter", () => {
    const input = screen.getByPlaceholderText("Add a new todo");

    fireEvent.change(input, { target: { value: "Enter Todo" } });
    fireEvent.keyPress(input, { key: "Enter", code: "Enter", charCode: 13 });

    expect(screen.getByText("Enter Todo")).toBeInTheDocument();
  });

  it("should save editing a todo item by pressing Enter", () => {
    const input = screen.getByPlaceholderText("Add a new todo");
    const addButton = screen.getByText("Add Todo");

    fireEvent.change(input, { target: { value: "Enter Save Todo" } });
    fireEvent.click(addButton);

    const editButton = screen.getByText("Edit");
    fireEvent.click(editButton);

    const editInput = screen.getByDisplayValue("Enter Save Todo");
    fireEvent.change(editInput, { target: { value: "Enter Saved Todo" } });
    fireEvent.keyDown(editInput, { key: "Enter", code: "Enter", charCode: 13 });

    expect(screen.getByText("Enter Saved Todo")).toBeInTheDocument();
  });

  it("should cancel editing a todo item by pressing Escape", () => {
    const input = screen.getByPlaceholderText("Add a new todo");
    const addButton = screen.getByText("Add Todo");

    fireEvent.change(input, { target: { value: "Escape Cancel Todo" } });
    fireEvent.click(addButton);

    const editButton = screen.getByText("Edit");
    fireEvent.click(editButton);

    const editInput = screen.getByDisplayValue("Escape Cancel Todo");
    fireEvent.change(editInput, { target: { value: "Edited Todo" } });
    fireEvent.keyDown(editInput, {
      key: "Escape",
      code: "Escape",
      charCode: 27,
    });

    expect(screen.getByText("Escape Cancel Todo")).toBeInTheDocument();
  });
});
