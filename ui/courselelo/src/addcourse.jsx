import { Button, Card, TextField } from "@mui/material";
import { useState } from "react";
import { json } from "react-router-dom";


function Addcourse() {

  const [title , setTitle] = useState("")
  const [description,setDescription] = useState("")
  const [price,setPrice] = useState("")
  const [ImageLink,setImageLink] = useState("")
  const token = sessionStorage.getItem("token")

  
    return <div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh" , }}>
        <div style={{textAlign : "center", marginBottom : "50px" , color : "white"}}>
            <h1>Hey Admin welcome back </h1>
        </div>
        <Card sx={{ minWidth: 800 , minHeight : 400 }} style={{ display: "flex", flexDirection: "column", alignItems: "center" , padding : "20px", backgroundColor : "#47B5FF" , paddingTop : "100px"}}>
          <div style={{display : "flex" }}>

         <div style={{marginRight : "120px"}}>   <TextField id="outlined-basic" label="Title" variant="outlined" onChange={(e) => { setTitle(e.target.value)}} /> </div>
         <div>  <TextField id="outlined-basic" label="Price" variant="outlined" onChange={(e) => { setPrice(e.target.value)}} />  </div> 
          </div>
      <br></br>
      <TextField sx={{minWidth : "600px"}} id="outlined-multiline-static"  multiline rows={4}  defaultValue="Default Value" label="Description" variant="outlined" onChange={(e) => { setDescription(e.target.value)}} />
      <br/>
      <br/>
      <TextField id="outlined-basic" label="ImageLink" variant="outlined"  onChange={(e) => { setImageLink(e.target.value)}} />
      <br/>
      <Button variant="contained" onClick={() => {      
        
        fetch("http://localhost:3000/admin/courses", {
        method : 'POST' ,
        body : JSON.stringify({
          title,
          description,
          price,
          ImageLink
        }) ,
        headers : {
          authorization : token ,
          "content-type" : "application/json"
        }
      }).then((response) => { return response.json()}).then((data) => {
        console.log("hi")
        console.log(data)
      }) } } >add course</Button>
      </Card>
    </div>


    </div>
}

export default  Addcourse;