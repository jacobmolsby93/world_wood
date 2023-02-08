import React, { useState } from 'react'
import { Box, Modal, Button, Typography, TextField, useMediaQuery } from "@mui/material"
import MapIcon from '@mui/icons-material/Map';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Spacer from '../../../components/Spacer';
import axios from "axios"

export const ListWood = ({ woodList, deleteData, editData, open, setOpen }) => {
    const smallScreen = useMediaQuery('(max-width:1000px)');
    const handleOpen = (item) => {
        setSelectedItem(item);
        setOpen(true);
        
      };
      const handleClose = () => {
        setOpen(false);
        setSelectedItem(null);
      };

        /* Edit Entries */
    const [selectedFile, setSelectedFile] = useState(null)
    const [selectedItem, setSelectedItem] = useState(null);

    const handleFileSelect = (event) => {
        setSelectedFile(event.target.files[0]);
    }


  return (
    <div>
        <Box className="container">
            {woodList ? 
                woodList.map((item, index) => (
                    <div key={item.id}>
                        <Box className="row" mb="2rem">
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
                                        <EditIcon sx={{ cursor: "pointer"}} onClick={() => handleOpen(item)}/>
                                        <DeleteIcon sx={{ cursor: "pointer"}} onClick={() => deleteData(item.id)}/>
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
                        <Spacer />
                    </div>
                )) :(
                <p>Loading</p>
            )}

            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <form onSubmit={(e) => {
                   e.preventDefault();
                   const form_data = new FormData();
                   form_data.append('name', e.target.name.value)
                   form_data.append('type', e.target.type.value)
                   form_data.append('description', e.target.description.value)
                   form_data.append('location', e.target.location.value)
                   form_data.append('price', e.target.price.value)
                   if (selectedFile) {
                    form_data.append('image', selectedFile, selectedFile.name)
                   }
                   editData(selectedItem.id, form_data)
                   handleClose()
                }}>
                <img src={selectedItem ? selectedItem.image : ''} height="300px" width="auto" alt="" />
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Edit {selectedItem ? selectedItem.name : ""}
                </Typography>
                <Box mt="2rem">
                    <TextField id="name" fullWidth={true} label="Name" defaultValue={selectedItem ? selectedItem.name : ""} />
                    <br />
                    <TextField id="type" sx={{ marginTop: "1rem"}} fullWidth={true} label="Type" defaultValue={selectedItem ? selectedItem.type : ""} />
                    <br />
                    <TextField id="description" sx={{ marginTop: "1rem"}} fullWidth={true} rows={4} multiline label="Description" defaultValue={selectedItem ? selectedItem.description : ""} />
                    <br />
                    <TextField id="location" sx={{ marginTop: "1rem"}} fullWidth={true} label="Location" defaultValue={selectedItem ? selectedItem.location : ""} />
                    <br />
                    <TextField id="price" sx={{ marginTop: "1rem"}} fullWidth={true} type="number" label="Price" defaultValue={selectedItem ? selectedItem.price : ""} />
                    <br />
                    <input style={{ marginTop: "1rem"}} type="file" id="image" label="Image" onChange={handleFileSelect} />
                    <br />
                    <Box display="flex" justifyContent="flex-end">
                        <Button type="submit" variant="contained" color="success">Submit Change</Button>
                    </Box>
                </Box>
                </form>
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
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    display: "flex",
    flexDirection: "column",
    p: 4,
  };
  