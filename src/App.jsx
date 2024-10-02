import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from './ProTip';
import Copyright from './Copyright';
import {Card, CardContent, Paper} from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import {useEffect, useState} from "react";

const columns = [
    { field: 'week', headerName: 'Week', width: 70 },
    { field: 'event', headerName: 'Event', width: 130 },
    { field: 'description', headerName: 'Description', width: 130 },
    { field: 'date', headerName: 'Date', width: 100 },
];


const paginationModel = { page: 0, pageSize: 5 };

export default function App() {
    const [rows,setRow] = useState([])
    useEffect(()=>{
        setRow( [
            { id: 1, week: 1, event: 'Jon', description:"Axonas sunt calceuss de noster buxum.", date: "2024-10-02" },
            { id: 2, week: 2, event: 'Cersei', description:"Ubi est superbus coordinatae?", date: "2024-10-03" },
            { id: 3, week: 3, event: 'Jaime', description:"Heu, usus!", date: "2024-10-04" },
            { id: 4, week: 4, event: 'Arya', description:"Experiment without metamorphosis, and we won’t accelerate a vogon.", date: "2024-10-05" },
            { id: 5, week: 5, event: 'Daenerys', description:"Packaged quinoa can be made springy by seasoning with soy sauce.", date: "2024-10-06" },
            { id: 6, week: 6, event: 'blah', description:"Itineris tramitems credere, tanquam raptus nomen.", date: "2024-10-07" },
            { id: 7, week: 7, event: 'Ferrara', description:"Per guest prepare one cup of buttermilk with pressed chicory for dessert.", date: "2024-10-08" },
            { id: 8, week: 8, event: 'Rossini', description:"Large apple can be made bitter by whisking with red wine.", date: "2024-10-09" },
            { id: 9, week: 9, event: 'Harvey', description:"Strawberries combines greatly with bloody broccoli.", date: "2024-10-10" },
        ])
    },[])

  return (
    <Container maxWidth="m">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
          Syllabus Activity
        </Typography>
          <Container maxWidth={"sm"} ><Card sx={{minWidth: 275}}>
              <CardContent>
                  <Typography variant="h5" component="h5" sx={{mb: 2}}>
                      Current Event: Title
                  </Typography>
                  <Typography variant="p" component="p" sx={{mb: 2}}>
                      Replace me with description of current event!
                  </Typography>
              </CardContent>
          </Card></Container>
          <Typography variant="h4" component="h4" sx={{ mb: 2 }}>
          Course Events
        </Typography>
          <Paper sx={{ height: 400, width: '100%' }}>
              <DataGrid
                  rows={rows}
                  columns={columns}
                  initialState={{ pagination: { paginationModel } }}
                  pageSizeOptions={[5, 10]}
                  sx={{ border: 0 }}
              />
          </Paper>
      </Box>
    </Container>
  );
}
