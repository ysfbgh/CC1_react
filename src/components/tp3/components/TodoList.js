
import React, { useState } from "react";
import Task from "./task";
import { v4 as uuidv4 } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"
export default function TodoList() {
  const [tache, setTache] = useState("");
  const [tasks, setTasks] = useState([]);
  const [showTask, setShowTask] = useState(false);

  const handleInputChange = (event) => {
    setTache(event.target.value);
  };

  const handleAddTask = () => {
    if (tache.trim() !== "") {
      setTasks([...tasks, { id: uuidv4(), text: tache }]);
      setTache("");
      setShowTask(true);
    }
  };

  const handleDeleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container ">
      <h1 className="text-center mb-4">Todo-List-App</h1>
      <form className="mb-4">
        <div className="input-group">
          <input
            type="text"
            value={tache}
            onChange={handleInputChange}
            className="form-control"
            placeholder="Entrer une tâche"
          />
          <button
            type="button"
            onClick={handleAddTask}
            className="btn btn-primary"
          >
            Ajouter
          </button>
        </div>
      </form>
      {showTask && (
        <>
          <h2>Liste des choses à faire</h2>
          {tasks.map((task) => (
            <Task
              key={task.id}
              txt={task.text}
              onDelete={() => handleDeleteTask(task.id)}
            />
          ))}
        </>
      )}
    </div>
  );
}
