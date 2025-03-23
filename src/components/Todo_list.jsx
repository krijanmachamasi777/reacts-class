import React, { useState, useEffect } from "react";
import '../components/Todo_list.css';

const TodoList = () => {
    // Load the todo list from localStorage if available, otherwise initialize with an empty array
    const [todoList, setTodoList] = useState(() => {
        const savedTodos = localStorage.getItem('todoList');
        return savedTodos ? JSON.parse(savedTodos) : [];
    });
    const [newTodo, setNewTodo] = useState("");

    // Save the todo list to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('todoList', JSON.stringify(todoList));
    }, [todoList]);

    function Add() {
        // Check if the newTodo is not empty
        if (newTodo.trim() !== "") {
            setTodoList([...todoList, { text: newTodo, completed: false }]);
            setNewTodo("");
        } else {
            alert("Please enter a todo item.");
        }
    }

    function Remove(index) {
        setTodoList(todoList.filter((todo, i) => i !== index));
    }

    function ToggleComplete(index) {
        const updatedList = [...todoList];
        updatedList[index].completed = !updatedList[index].completed;
        setTodoList(updatedList);
    }

    return (
        <>
        
            <h1>Todo List</h1>
            <div className="todo">
            <input 
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
            />
            </div>
            <br />
            <button onClick={Add}>Add</button>

            <div>
                <h2>List:</h2>
                <ul>
                    {todoList.map((todo, index) => (
                        <li key={index} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                            {todo.text}
                            <button onClick={() => ToggleComplete(index)}>
                                {todo.completed ? "Undo" : "Complete"}
                            </button>
                            <button onClick={() => Remove(index)}>X</button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default TodoList;