import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { useState } from 'react';
import {  FormControl,  InputLabel, MenuItem, Select } from '@mui/material';


function Signin() {
        const [username , setUsername] = useState("")
        const [password , setPassword] = useState("")
        const [form , setForm] = useState("")
        const [user,setUser] = useState("users")


    return <div >
      
        <div style={{ 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        justifyContent: "center", 
        minHeight: "100vh" ,
          }}>
        <div style={{textAlign : "center", marginBottom : "50px" , color : "white"}}>
            <h1>Welcome back to courseguru. Sign up here</h1>
        </div>
        <Card sx={{ minWidth: 275 }} style={{  padding : "20px", backgroundColor : "#47B5FF" , height : "350px" ,width : "400px" 
    }}>
      <div style={{display: "flex", flexDirection: "column", alignItems: "center" , paddingTop : "50px"}}>
      <TextField id="username" label="Username" variant="outlined"  onChange={(e) => {setUsername(e.target.value)}}  />
      <br/>
      <TextField id="password" label="Password" variant="outlined"   onChange={(e) => {setPassword(e.target.value)}} />
      <br />
      <FormControl  style={{ minWidth : "240px"}}>
        <InputLabel >User</InputLabel>
        <Select
          label="User"
          value={user}
          onChange={(event) => {
            console.log(event)
           setUser(event.target.value)

          }}
        >
          <MenuItem value={"users"}>user</MenuItem>
          <MenuItem value={"admin"}>admin</MenuItem>
        </Select>
      </FormControl>
      <br></br>
      <Button variant="contained" 
      onClick={() => {

       if(!username && password){
        setForm("Please fill the username password ")
   }else if(!username){
     setForm("Please fill the username")
   }else if(!password){
     setForm("please fill the password")
   }else{

          
        fetch(`http://localhost:3000/${user}/login`,{
            method : 'POST',
            body : JSON.stringify({
                username,
                password
            }),
            headers : {
                username ,
                password ,
                "content-type" : "application/json"
            }
        }).then((response) => {
            return  response.json() 
        }).then((data) => {
          sessionStorage.setItem("token", "bearer "+data.token)
          sessionStorage.setItem("username" , username)
          window.location = '/'
        })
    }
      }}
      >Signin</Button>
        <div  style={{color : "red", fontWeight : 'bold'}}>{form}</div>
        </div>
      </Card>
    </div>
    </div>
}

export default Signin ;