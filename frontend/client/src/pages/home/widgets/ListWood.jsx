import React, { useState } from 'react'
import { Box, Modal, Button, Typography, useMediaQuery } from "@mui/material"
import MapIcon from '@mui/icons-material/Map';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export const ListWood = ({ woodList }) => {
    const smallScreen = useMediaQuery('(max-width:1000px)');
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


  return (
    <div>
        <Box className="container">
            {woodList ? 
                woodList.map((item, index) => (
                    <Box className="row" key={item.id} mb="2rem">
                        <Box className={`col-12 col-lg-6 ${!smallScreen && index % 2 === 0 ? "order-last" : "order-first"}`}>
                            <img src={item.image} style={{ width: "100%", height: "auto"}} alt="" />
                        </Box>
                        <Box className="col-12 col-lg-6" display="flex" alignItems="center" justifyContent="center">
                           <Box>
                                <Box display="flex" alignItems="center" justifyContent="space-between">
                                <Typography variant="h2" color="#0A3F29">
                                    {item.name}
                                </Typography>
                                <Box>
                                    <EditIcon sx={{ cursor: "pointer"}} onClick={() => console.log(item.id)}/>
                                    <DeleteIcon sx={{ cursor: "pointer"}} onClick={() => console.log(item.id)}/>
                                </Box>
                                </Box>
                                <Typography variant="body1" fontSize="1rem">
                                    {item.description}
                                </Typography>
                                <Box display="flex" alignItems="center" mt="1rem">
                                    <MapIcon />
                                    <Typography variant="body1" sx={{ marginLeft: "1rem"}}>{item.location}</Typography>
                                </Box>
                                <Box display="flex" alignItems="center" mt="1rem">
                                    <MonetizationOnIcon />
                                    <Typography variant="body1" sx={{ marginLeft: "1rem"}}>{item.price}</Typography>
                                </Box>
                            </Box> 
                        </Box>
                    </Box>
                )) :(
                <p>Loading</p>
            )}

            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>
            </Box>
            </Modal>
        </Box>
    </div>
  )
}


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  