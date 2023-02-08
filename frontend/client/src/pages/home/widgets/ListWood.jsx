import React from 'react'
import { Box, Typography, useMediaQuery } from "@mui/material"
import MapIcon from '@mui/icons-material/Map';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

export const ListWood = ({ woodList }) => {
    const smallScreen = useMediaQuery('(max-width:1000px)');
    

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
                                <Typography variant="h2" color="#0A3F29">
                                    {item.name}
                                </Typography>
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
        </Box>
    </div>
  )
}
