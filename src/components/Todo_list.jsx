import './Todo_list.css';

import { useState } from 'react';

const Todo_list = () => {
    const initialFormState = {
        task: "",
    };
    const [formData, setFormData] = useState(initialFormState);

    const [taskList, setTaskList] = useState([]);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }))

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setTaskList([...taskList, formData.task]);
        setFormData(initialFormState);
    }

    const handleDelete = (index) => {
        const updatedTaskList = taskList.filter((task, i) => i !== index);
        setTaskList(updatedTaskList);
    }



    const inputBox = document.getElementById("input-box");
    const listContainer = document.getElementById("list-container");
    
    function addTask() {    
        if(inputBox.value === "") 
            alert("Please enter a task");
         else {
            let li = document.createElement("li");
            li.innerHTML = inputBox.value;
            listContainer.appendChild(li);
            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            li.appendChild(span);
            savedata();
           
        }
        inputBox.value = "";
        savedata();
    }
    listContainer.addEventListener("click", function(e) {
        if(e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
            savedata();
        }
         else if(e.target.tagName === "SPAN") {
            e.target.parentElement.remove();
            savedata();
        }
    },false);
    
    function savedata() {
        localStorage.setItem("data",listContainer.innerHTML);
    }
    
    function showtasks() {
        listContainer.innerHTML = localStorage.getItem("data");
    }
    showtasks();




    
    


    return (
        <form className="form" onSubmit={handleSubmit} >
            <div className="container1">
        <div className="todo-app">
            <h2>To Do List </h2>
            <div className="row">
                <input  type="text" id="input-box" placeholder="Add a new task"/>
                <button onclick="addTask()">Add</button>
            </div>
            <ul id="list-container">
           
            </ul>
        </div>
    </div>
        </form>
    )
}
export default Todo_list;