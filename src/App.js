import { TodosContext } from "./context/Todocontext";
import ToDoList from "./components/ToDoList";
import "./App.css";
import { useState, useEffect } from "react";
import { createTheme } from "@mui/material/styles";


const theme = createTheme({
    palette:{
        primary: {
            main : "#004d40"
        }
    }
})
function App() {
    const [todos, setTodos] = useState(() => {
        const storageTodos = JSON.parse(localStorage.getItem("todos"));
        return storageTodos ?? [];
    });

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <div className="App">
            <TodosContext.Provider value={{ todos, setTodos }}>
                <ToDoList />
            </TodosContext.Provider>
        </div>
    );
}

export default App;
