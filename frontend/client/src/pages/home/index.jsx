import React from 'react'
import { Box, Typography} from "@mui/material"


import Spacer from '../../components/Spacer'

import forest from "../../assets/forest.jpg"
import { ListWood } from './widgets/ListWood'

export const Home = () => {
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

        <ListWood />
    </div>
  )
}
