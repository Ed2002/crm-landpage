import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"

export const Menu = () => {
    return (
        <AppBar position="static" style={{
            backgroundColor: 'var(--green)'
        }}>
            <Toolbar>
            <h2>CRM</h2>
            </Toolbar>
        </AppBar>
    );
}