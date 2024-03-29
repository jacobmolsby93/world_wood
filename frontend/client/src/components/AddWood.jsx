import React, { useState } from 'react'
import { Box, TextField, Button, Modal} from "@mui/material"

import axios from "axios"


export const AddWood = ({ openAdd, handleCloseAdd}) => {



    const [data, setData] = useState({
        name: '',
        type: '',
        description: '',
        location: '',
        price: '',
        image: '',
      });

      const handleChange = (e) => {
        setData({
          ...data,
          [e.target.name]: e.target.value
        });
      };
    
      const handleFileChange = (e) => {
        setData({
          ...data,
          image: e.target.files[0],
        });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        const form_data = new FormData();
        form_data.append('name', data.name);
        form_data.append('type', data.type);
        form_data.append('description', data.description);
        form_data.append('location', data.location);
        form_data.append('price', data.price);
        form_data.append('image', data.image, data.image.name);
    
        try {
          const response = await axios.post('http://127.0.0.1:8000/api/wood/create/', form_data, {
            headers: {
                'Content-Type': 'multipart/form-data'
              }
          })
          console.log(response.data);
          setData({
            name: '',
            type: '',
            description: '',
            location: '',
            price: '',
            image: ''
          });
        } catch (error) {
          console.error(error);
        }
      };
    
  return (
    <div>
        <Modal
        open={openAdd}
        onClose={handleCloseAdd}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <form onSubmit={handleSubmit} method="POST">
            <div>
                <TextField type="text" label="Name" fullWidth={true} name="name" value={data.name} onChange={handleChange} />
            </div>
            <div>
                <TextField sx={{ marginTop: "1rem"}} type="text" label="Type" fullWidth={true} name="type" value={data.type} onChange={handleChange} />
            </div>
            <div>
                <TextField sx={{ marginTop: "1rem"}} name="description" label="Description" rows={4} multiline fullWidth={true} value={data.description} onChange={handleChange} />
            </div>
            <div>
                <TextField sx={{ marginTop: "1rem"}} type="text" label="Location" fullWidth={true} name="location" value={data.location} onChange={handleChange} />
            </div>
            <div>
                <TextField sx={{ marginTop: "1rem"}} type="number" label="price" fullWidth={true} name="price" value={data.price} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="image">Image:</label>
                <input type="file" name="image" accept="image/png, image/jpeg" onChange={handleFileChange} />
            </div>
            <Box display="flex" justifyContent="flex-end">
                <Button variant="contained" color="success" type="submit">Submit</Button>
            </Box>
            </form>
        </Box>
      </Modal>

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
  