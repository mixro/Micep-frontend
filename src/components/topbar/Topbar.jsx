import { topLinks } from "../../static/DummyData"
import { Close, Menu } from "@mui/icons-material"
import "./topbar.css"
import { useState } from "react"
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from "react-router-dom";


const Topbar = () => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
        return;
        }
        setOpen(open);
    };

    const list = () => (
        <Box
            sx={{ width: '100vw' }}  
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
            className="topbar-box"
        >
            {topLinks.map((link) => (
                <Link to={`/${link.location}`} key={link._id} className="link-main">
                    <div className="box-links">
                        <p>{link.title}</p>
                    </div>
                </Link>
            ))}
        </Box>
    );

  return (
    <div className="topbar-container">
        <div className="topbar-left">
            <Link to='/' className="link-main">
                <div className="topbar-logo-container">
                    <div className="topbar-logo">
                        <img src="/micep-logo.png" alt="MICEP LOGO" />
                    </div>
                    <p>MICEP<span>DEV</span></p>
                </div>
            </Link>
        </div>

        <div className="topbar-right">
            <div className="topbar-links">
                {topLinks.map((link) => (
                    <div className="topbar-link" key={link._id}>
                        <Link to={`/${link.location}`} className="link-main">
                            <p>{link.title}</p>
                        </Link>
                    </div>
                ))}
            </div>
            <div className="topbar-button">
                <Link to="/start" className="link-main">
                    <button>Schedule a Call</button>
                </Link>
            </div>
            <div className="menu-icon">
                {open 
                    ? <Close sx={{fontSize: 28}} onClick={toggleDrawer(false)} /> 
                    : <Menu sx={{fontSize: 28}} onClick={toggleDrawer(true)} />
                }
                <Drawer
                    variant="temporary"
                    anchor="right"
                    open={open}
                    onClose={toggleDrawer(false)}
                    PaperProps={{
                        sx: {
                            top: '75px',     
                            height: 'calc(100vh - 80px)', 
                            background: '#F6F7F8',
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between"
                        },
                    }}
                    ModalProps={{
                        hideBackdrop: true, 
                    }}
                >
                    {list()}
                    <div className="drawer-footer">
                        <p>© 2025. <span>MICEP TECH</span></p>
                    </div>
                </Drawer>
            </div>
        </div>
    </div>
  )
}

export default Topbar