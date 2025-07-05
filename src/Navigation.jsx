import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function Navigation() {
    const [value, setValue] = React.useState("All");

    return (
        <div>
            <Stack spacing={2} direction="row">
                <Button variant="contained" value="All">All</Button>
                <Button value="Done">Done</Button>
                <Button value="Un Done">Un Done</Button>
            </Stack>
        </div>
    );
}
