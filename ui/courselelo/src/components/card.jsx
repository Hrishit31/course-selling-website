import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardActions from "@mui/joy/CardActions";
import Typography from "@mui/joy/Typography";
import Stack from "@mui/joy/Stack";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Switch from "@mui/joy/Switch";
import { Alert, CardMedia, Snackbar } from "@mui/material";
import { useParams } from 'react-router-dom';
import { useState } from "react";

export default function ExploreCard({title,description,price,ImageLink,id,courseId}) {
   
  const token = sessionStorage.getItem("token")
  const [open,setOpen] = useState(false)

  const {courseid} = useParams() ;
 
  const handleClose = () => {
    setOpen(false)
  }
  
  const purchaseAlert = (message) => {
    setOpen(true)
     
  }

  const BuyCourse = (courseId) => {
    console.log(courseId)
    console.log(token)
   fetch('http://localhost:3000/users/courses/' + courseId , {
     method : 'POST' ,
     headers : {
       "content-type" : "application/json",
       authorization : token
     }
   }).then((response) => { return response.json()}).then((data) => { purchaseAlert(data.message)
   })

 }

  return (
    
   
      <Card 
        orientation="horizontal"
        sx={{  width : "100vw"  , backgroundColor : "#001C30" , borderRadius : "none" }}
      >
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Course purchased successfully!
        </Alert>
      </Snackbar>
               
        <CardMedia sx={{maxWidth : "50%"}} className="box2image box1"
          style={{'&:hover' : {boxShadow : "5px 5px 100px 20px rgba(0, 0, 255, .2)"}}}
          component="img"
          alt="green iguana"
          height="240"
          image={ImageLink}
        /> 
        <CardContent className="box2" style={{display : "flex" , justifyContent : "center", alignItems : "center"}}>
          <div style={{margin : "0"}}>
          <Typography  style={{fontSize : "300%"}} fontSize="lg" fontWeight="lg" sx={{color : "white"}}  component="div">
          {title}
          </Typography>
          </div>
            
          <Typography level="body-lg" sx={{color : "#e7c6ff"}}>
            {description}
          </Typography>
          <CardActions style={{marginTop : "auto"}} buttonFlex="none">
            <Button  onClick={ () => {BuyCourse(courseid)}} sx={{'&:hover' : {boxShadow : "5px 5px 100px 1px #00b4d8"} , borderRadius : "10px" ,  backgroundColor : "#00b4d8" }}  size="sm">
              BUY
            </Button>
            <Button  sx={{ '&:hover' : {boxShadow : "5px 5px 100px 1px #00b4d8"} ,borderRadius : "10px" , backgroundColor : "#00b4d8"}}   size="sm">
              ADD TO CART
            </Button>
          </CardActions>
        </CardContent>
      </Card>
  
  );
}
