import Card from "@mui/material/Card";
import CheckIcon from "@mui/icons-material/Check";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import "./todoCard.css";
export default function TodoCard() {
    return (
        <>
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
                        <Typography variant="h5" sx={{ textAlign: "left" }}>
                            First Task
                        </Typography>
                        <Typography variant="h6" sx={{ textAlign: "left" }}>
                            Details Of First Task
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
                                background: "#FFF",
                                borderRadius: "50%",
                                color: "green",
                            }}
                        >
                            <CheckIcon />
                        </IconButton>
                        <IconButton aria-label="edit" style={{ color: "#FFF" }}>
                            <EditIcon />
                        </IconButton>
                        <IconButton
                            aria-label="delete"
                            style={{ color: "red" }}
                        >
                            <DeleteIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Card>
        </>
    );
}
