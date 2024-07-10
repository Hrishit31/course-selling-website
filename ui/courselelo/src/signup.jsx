import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { useState } from 'react';
import { Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select } from '@mui/material';
import { Box } from '@mui/system';

function Signup() {
        const [email , setEmail] = useState("")
        const [username , setUsername] = useState("")
        const [password , setPassword] = useState("")
        const [checked ,setChecked] = useState(false)
        const [form , setForm] = useState("")
        const [user,setUser] = useState("users")
        

        const isEmailValid = (email) => {
            // Email validation regex pattern
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailPattern.test(email);
          };

    return <div >
      
        <div style={{ 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        justifyContent: "center", 
        minHeight: "100vh" ,
          }}>
        <div style={{textAlign : "center", marginBottom : "50px" , color : "white"}}>
            <h1>Welcome to courseguru. Sign up here</h1>
        </div>
        <Card sx={{ minWidth: 275  }} style={{ display: "flex", flexDirection: "column", alignItems: "center" , padding : "20px", backgroundColor : "#47B5FF" ,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }}> <br></br>
          <TextField id="email" label="Email" variant="outlined" onChange={(e) => {setEmail(e.target.value)}} />
      <br></br>
      <TextField id="username" label="Username" variant="outlined"  onChange={(e) => {setUsername(e.target.value)}}  />
      <br/>
      <TextField id="password" label="Password" variant="outlined"   onChange={(e) => {setPassword(e.target.value)}} />
      <br />
      <Box sx={{ minWidth: 120 }}>
      <FormControl  style={{ minWidth : "240px"}}>
        <InputLabel >User</InputLabel>
        <Select
          label="User"
          value={user}
          onChange={(event) => {
           setUser(event.target.value)

          }}
        >
          <MenuItem value={"users"}>user</MenuItem>
          <MenuItem value={"admin"}>admin</MenuItem>
        </Select>
      </FormControl>
    </Box>
      <div>
       

      <FormControlLabel
        control={<Checkbox checked={checked} onChange={(e) => {
            setChecked(e.target.checked)
        }} />}
        label={"By signing up you agreed to our terms and conditions"}
      /> 
       
    </div>
      <Button variant="contained" 
      onClick={() => {
          
      if(!username && !password && !email){
        setForm("please fill the username , password and email")
      }else if(!username && password){
           setForm("Please fill the username password ")
      }else if(!username){
        setForm("Please fill the username")
      }else if(!password){
        setForm("Please fill the password")
      }else if(!isEmailValid(email)){
        setForm("Please fill the email correctly")
      }else if(!checked){
         setForm("Please agree with the term and conditions")
      }
      else{

        fetch(`http://localhost:3000/${user}/signup`,{
            method : 'POST',
            body : JSON.stringify({
                email,
                username,
                password
            }),
            headers : {
                "content-type" : "application/json"
            }
        }).then((response) => {
            return  response.json() 
        }).then((data) => {
          sessionStorage.setItem("token", "bearer "+data.token)
          sessionStorage.setItem("user" , )
          sessionStorage.setItem("username" , data.username)
          window.location = '/'
        })
    }
      }}
      >Signup</Button>
        <div style={{color : "red", fontWeight : 'bold'}}>{form}</div>
      </Card>
    </div>
    </div>
}

export default Signup ;