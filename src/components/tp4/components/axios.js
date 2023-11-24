
import React, { useState, useEffect } from "react";
import axios from "axios";

function Api() {
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=10`)
      .then((response) => setTodos(response.data))
      .catch((error) => console.error(error));
  }, [page]);

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  return (
    <div className="card text-center mb-3">
      <div className="card-body">
        <h1 className="card-title">Tp api axios</h1>
        <ul className="list-group">
          {todos.map((todo) => (
            <li key={todo.id} className="list-group-item">
              {todo.title}
            </li>
          ))}
        </ul>
        <div className="mt-3">
          <button
            className="btn btn-primary mr-2"
            onClick={handlePreviousPage}
            disabled={page === 1}
          >
            Précédent
          </button>

          <button className="btn btn-primary" onClick={handleNextPage}>
            Suivant
          </button>
        </div>
      </div>
    </div>
  );
}

export default Api;
