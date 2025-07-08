import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
//Compoenets
import TodoCard from "./TodoCard";

//Other
import { TodosContext } from "../context/Todocontext";
import { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";

export default function ToDoList() {
    const { todos, setTodos } = useContext(TodosContext);

    const [titleInput, setTitleInput] = useState("");
    const [displayTodosType, setDisplayTodoType] = useState("all");

    const computedTodos = todos.filter((t) => {
        return t.isComplete;
    });

    const notComputedTodos = todos.filter((t) => {
        return !t.isComplete;
    });

    let todosToBeRender = todos;

    if (displayTodosType === "Completed") {
        todosToBeRender = computedTodos;
    } else if (displayTodosType === "noneCompleted") {
        todosToBeRender = notComputedTodos;
    }

    const todsJsx = (todosToBeRender || []).map((task) => (
        <TodoCard key={task.id} todo={task} />
    ));

    function handleAddTask() {
        const newTodo = {
            id: uuidv4(),
            title: titleInput,
            details: "",
            isComplete: true,
        };

        const updatedTodo = [...todos, newTodo];
        setTodos(updatedTodo);
        setTitleInput("");
    }

    function displayedType(e) {
        setDisplayTodoType(e.target.value);
    }

    return (
        <>
            <Container maxWidth="sm">
                <Card sx={{ minWidth: 275, maxHeight:"80vh", overflow:"scroll" }}>
                    <CardContent>
                        <Typography variant="h2">My Task</Typography>
                        <Divider />

                        {/* State Task */}
                        <ToggleButtonGroup
                            value={displayTodosType}
                            exclusive
                            onChange={displayedType}
                            style={{ marginTop: "30px" }}
                        >
                            <ToggleButton value="all">All</ToggleButton>
                            <ToggleButton value="Completed">Done</ToggleButton>
                            <ToggleButton value="noneCompleted">
                                {" "}
                                Un Done
                            </ToggleButton>
                        </ToggleButtonGroup>

                        {/* Add New Task Section */}
                        <Grid container spacing={2}>
                            <Grid size={8} style={{ marginTop: "20px" }}>
                                <TextField
                                    style={{ width: "100%" }}
                                    id="standard-password-input"
                                    label="Add Your Task"
                                    type="text"
                                    variant="standard"
                                    value={titleInput}
                                    onChange={(e) => {
                                        setTitleInput(e.target.value);
                                    }}
                                />
                            </Grid>

                            <Grid
                                size={4}
                                display="flex"
                                justifyContent="space-around"
                                alignItems="center"
                            >
                                <Button
                                    variant="contained"
                                    color="success"
                                    style={{ padding: "10px" }}
                                    onClick={() => {
                                        handleAddTask();
                                    }}
                                >
                                    <AddIcon /> Add
                                </Button>
                            </Grid>
                        </Grid>

                        {todsJsx}
                    </CardContent>
                </Card>
            </Container>
        </>
    );
}
