import { topLinks } from "../../static/DummyData"
import { Close, Menu } from "@mui/icons-material"
import "./topbar.css"
import { useState } from "react"
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';


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
                <div className="box-links" key={link._id}>
                    <p>{link.title}</p>
                </div>
            ))}
        </Box>
    );

  return (
    <div className="topbar-container">
        <div className="topbar-left">
            <p>Micep<span>DEV</span></p>
            <p className="registered">®</p>
        </div>

        <div className="topbar-right">
            <div className="topbar-links">
                {topLinks.map((link) => (
                    <div className="topbar-link" key={link._id}>
                        <p>{link.title}</p>
                    </div>
                ))}
            </div>
            <div className="topbar-button">
                <button>Schedule a Call</button>
            </div>
            <div className="menu-icon">
                {open ? <Close sx={{fontSize: 28}} onClick={toggleDrawer(false)} /> : <Menu sx={{fontSize: 28}} onClick={toggleDrawer(true)} />}
                <Drawer
                    variant="persistent"
                    anchor="right"
                    open={open}
                    onClose={toggleDrawer(false)}
                    PaperProps={{
                        sx: {
                            top: '80px',     
                            height: 'calc(100vh - 80px)', 
                            background: '#F6F7F8',
                        },
                    }}
                    ModalProps={{
                        hideBackdrop: true, 
                    }}
                >
                    {list()}
                </Drawer>
            </div>
        </div>
    </div>
  )
}

export default Topbar