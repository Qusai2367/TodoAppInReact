import "./todoCard.css";
import Card from "@mui/material/Card";
import CheckIcon from "@mui/icons-material/Check";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import { useContext, useState } from "react";
import { TodosContext } from "../context/Todocontext";

export default function TodoCard({ todo, handleCheck }) {
    const { todos, setTodos } = useContext(TodosContext);
    const [showDeleteDilog, setShowDeleteDilog] = useState(false);
    const [showUpdateDilog, setShowUpdateDilog] = useState(false);
    const [updatedTodo, setUpdatesTodo] = useState({
        title: todo.title,
        details: todo.details,
    });

    // Evenet Handler
    function handleCheackCkick() {
        const updatedTodos = todos.map((t) => {
            if (t.id == todo.id) {
                t.isComplete = !t.isComplete;
            }
            return t;
        });
        setTodos(updatedTodos);
        localStorage.setItem("todos", JSON.stringify(updatedTodo));
    }

    function handleDelteClick() {
        setShowDeleteDilog(true);
    }

    function handleDelteDilogClose() {
        setShowDeleteDilog(false);
    }

    function deleteTask() {
        const updatedTodos = todos.filter((t) => {
            // if (t.id == todo.id) {
            //     return false;
            // } else {
            //     return true;
            // }
            return t.id !== todo.id;
        });

        setTodos(updatedTodos);
    }

    function handleUpdateClick() {
        setShowUpdateDilog(true);
    }

    function handleUpdateDilogClose() {
        setShowUpdateDilog(false);
    }

    function handleUpdateConfirm() {
        const updatedTodos = todos.map((t) => {
            if (t.id == todo.id) {
                return {
                    ...t,
                    title: updatedTodo.title,
                    details: updatedTodo.details,
                };
            } else {
                return t;
            }
        });

        setTodos(updatedTodos);
        setShowUpdateDilog(false);
    }

    return (
        <>
            {/* Delete Task */}
            <Dialog
                onClose={handleDelteDilogClose}
                open={showDeleteDilog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title"></DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you Sure
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDelteDilogClose}>Disagree</Button>
                    <Button autoFocus onClick={deleteTask}>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Update dilog */}
            <Dialog
                onClose={handleUpdateDilogClose}
                open={showUpdateDilog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title"></DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you Sure
                    </DialogContentText>
                    <form>
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="name"
                            name="title"
                            label="title Task"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={updatedTodo.title}
                            onChange={(e) => {
                                setUpdatesTodo({
                                    ...updatedTodo,
                                    title: e.target.value,
                                });
                            }}
                        />

                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="name"
                            name="Details"
                            label="Task Details"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={updatedTodo.details}
                            onChange={(e) => {
                                setUpdatesTodo({
                                    ...updatedTodo,
                                    details: e.target.value,
                                });
                            }}
                        />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleUpdateDilogClose}>Close</Button>
                    <Button autoFocus onClick={handleUpdateConfirm}>
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>

            <Card
                className="effect"
                sx={{
                    minWidth: 275,
                    marginTop: "30px",
                    background: "#2b5cbd",
                    color: "#FFFFFF",
                    borderRadius: "15px",
                    padding: "20px",
                }}
            >
                <Grid container spacing={2}>
                    <Grid size={8}>
                        <Typography
                            variant="h5"
                            sx={{
                                textAlign: "left",
                                textDecoration: todo.isComplete
                                    ? "line-through"
                                    : "none",
                            }}
                        >
                            {todo.title}
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                textAlign: "left",
                                textDecoration: todo.isComplete
                                    ? "line-through"
                                    : "none",
                            }}
                        >
                            {todo.details}
                        </Typography>
                    </Grid>
                    <Grid
                        size={4}
                        display="flex"
                        justifyContent="space-around"
                        alignItems="center"
                    >
                        <IconButton
                            aria-label="cheack"
                            style={{
                                background: todo.isComplete ? "green" : "#FFF",
                                borderRadius: "50%",
                                color: todo.isComplete ? "white" : "green",
                            }}
                            onClick={() => {
                                handleCheackCkick();
                            }}
                        >
                            <CheckIcon />
                        </IconButton>
                        <IconButton
                            aria-label="edit"
                            onClick={handleUpdateClick}
                            style={{ color: "#FFF" }}
                        >
                            <EditIcon />
                        </IconButton>

                        {/* Delete btn */}
                        <IconButton
                            aria-label="delete"
                            style={{ color: "red" }}
                            onClick={handleDelteClick}
                        >
                            <DeleteIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Card>
        </>
    );
}
