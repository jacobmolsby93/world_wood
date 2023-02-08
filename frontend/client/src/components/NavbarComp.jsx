import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Box, List, ListItem, Typography} from "@mui/material"


import Wood from "../assets/wood.png"

export const NavbarComp = () => {
  return (
    <div className="custom-nav-top">   
        <Box expand="lg">
            <Box className="custom-nav">
                <Box className="container" display="flex" justifyContent="space-between">
                    <img src={Wood} alt="Wood logo" className="nav-brand" />
                    <Box display="flex" alignItems="center">
                        <nav>
                            <List>
                                <ListItem disablePadding>
                                    <Typography variant="h5" color="white">Home</Typography>
                                </ListItem>
                            </List>
                        </nav>
                    </Box>
                </Box>
            </Box>
        </Box>
    </div>
  )
}
