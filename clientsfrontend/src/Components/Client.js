//import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Container,Button} from "@mui/material";

import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';




export default function Client() {

    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[clients,setClients]=useState([])

    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}


    const handleClick=(e)=>{
        e.preventDefault()
        const client={name,email}
        console.log(client)
        fetch("http://localhost:8080/client/add",{

            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(client)

        }).then(()=>{
            console.log("New Client added")
        })
    }

    useEffect(()=>{
        fetch("http://localhost:8080/client/getAll")
            .then(res=>res.json())
            .then((result)=>{
                    setClients(result);
                }
            )
    },[])


    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': {m: 2, width: '225ch'},
            }}
            noValidate
            autoComplete="off"
        >
            <Container>
                <h1>Add Client</h1>
                <TextField id="outlined-basic" label="Cleint Name" variant="outlined" fullWidth value={name}
                           onChange={(e) => setName(e.target.value)}/>
                <TextField id="outlined-basic" label="Client Email" variant="outlined" fullWidth value={email}
                           onChange={(e) => setEmail(e.target.value)}/>

            <Button variant="contained" onClick={handleClick}>Submit</Button>



            <h1>Clients</h1>

            <Paper elevation={3} style={paperStyle}>

                {clients.map(client=>(
                    <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={client.id}>
                        Id:{client.id}<br/>
                        Name:{client.name}<br/>
                        Email:{client.email}

                    </Paper>
                ))
                }


            </Paper>

            </Container>




        </Box>


    );


}
