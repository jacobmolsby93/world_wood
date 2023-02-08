import React, { useState, useEffect } from 'react'
import { Box, Typography} from "@mui/material"
import Spacer from '../../components/Spacer'
import forest from "../../assets/forest.jpg"
import { ListWood } from './widgets/ListWood'
import axios from "axios"
import { AddWood } from '../../components/AddWood'
import AddIcon from '@mui/icons-material/Add';

export const Home = () => {
    const [woodList, setWoodList] = useState(null)
    const [responseStatus, setResponseStatus] = useState(null)
    const [openAdd, setOpenAdd] = useState(false);
    const [open, setOpen] = useState(false);
    const handleOpenAdd = () => setOpenAdd(true);
    const handleCloseAdd = () => setOpenAdd(false);

    /* Delete entry */
    const deleteData = async (id) => {
        const response = await axios.delete(`http://127.0.0.1:8000/api/wood/${id}/delete/`, {
          headers: {
            'Content-Type': 'application/json'
          }

        })
        setResponseStatus(response.status)
      }
      
      const editData = async (id, data) => {
        const response = await axios.patch(`http://127.0.0.1:8000/api/wood/${id}/update/`, data, {
            headers: {
                'Content-Type': 'multiform/form-data'
            }
        })
    }

    /* List Entries */
    useEffect(() => {
        const response = axios.get('http://127.0.0.1:8000/api/wood/')
        .then(response => {
            setWoodList(response.data)
            setResponseStatus(response.status)
        })
        .catch(error => {
            console.log(error)
        })
    }, [responseStatus, openAdd, open])



  return (
    <div>
        <Box sx={{
            display: "flex",
            width: "100%",
            height: "100vh",
            backgroundImage: `url(${forest})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Box display="flex" flexDirection="column" alignItems="center">
                <Typography variant="h1" color="white">
                    Wood Around The World
                </Typography>
                <Typography variant="body1" textAlign="center" color="white" fontSize="1.3rem" width="80%">
                    Learn more about the different kinds of wood around the world, see their prices. As well as where in the world they are located !
                </Typography>
            </Box>
        </Box>
        <Spacer />

        <Box position="relative">
            <Box sx={absoluteBox}>
                <AddIcon onClick={() => setOpenAdd(!openAdd)} sx={{fontSize: "2rem", color: "white"}}/>
                <AddWood openAdd={openAdd} handleOpenAdd={handleOpenAdd} handleCloseAdd={handleCloseAdd}/>
            </Box>
            <ListWood woodList={woodList} deleteData={deleteData} editData={editData} setOpen={setOpen} open={open}/>
        </Box>
    </div>
  )
}


const absoluteBox = {
    position: "absolute",
    right: "0",
    top: "100px",
    height: "50px",
    width: "100px",
    backgroundColor: "#0A3F29",
    display: "flex",
    alignItems: "center",
    cursor: "pointer"
}
