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


const todos = [
    {
        id: 1,
        title: "Stay at Home",
        details: "Stay in your home and be Safety",
        isComplete: false,
    },

    {
        id: 1,
        title: "TabOut",
        details: "Tab out of quotes, brackets, etc for Visual Studio Code.",
        isComplete: false,
    },

    {
        id: 1,
        title: "Toggle Quotes",
        details:
            "cmd ' (ctrl ' on win/linux) will cycle the first quote pair found (from the start/end of the section) through the following sequence",
        isComplete: true,
    },
];
export default function ToDoList() {
    return (
        <>
            <Container maxWidth="sm">
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography variant="h2">My Task</Typography>
                        <Divider />
                        {/* State Task */}
                        <ToggleButtonGroup
                            // value={alignment}
                            exclusive
                            // onChange={handleAlignment}
                            style={{ marginTop: "30px" }}
                        >
                            <ToggleButton value="left">All</ToggleButton>
                            <ToggleButton value="center">Done</ToggleButton>
                            <ToggleButton value="right"> Un Done</ToggleButton>
                        </ToggleButtonGroup>

                        <Grid container spacing={2}>
                            <Grid size={8} style={{ marginTop: "20px" }}>
                                <TextField
                                    style={{ width: "100%" }}
                                    id="standard-password-input"
                                    label="Add Your Task"
                                    type="text"
                                    variant="standard"
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
                                >
                                    <AddIcon /> Add
                                </Button>
                            </Grid>
                        </Grid>

                        <TodoCard />
                    </CardContent>
                </Card>
            </Container>
        </>
    );
}
