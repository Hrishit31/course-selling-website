import { IconButton, Typography } from "@mui/material";
import {Button} from "@mui/material"
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BasicAvatars from "./components/avatar";


function Appbar() {
    
   
    const token = sessionStorage.getItem("token")
    const [Token , setToken] = useState(null)
    const username = sessionStorage.getItem("username")
    const navigate = useNavigate();


  useEffect(() => {
    setToken(token)
  }, [token])


    return <div style={{
        backgroundColor : "#001C30",
        display : "flex",
        justifyContent : "space-between",
        paddingTop : "10px"
    }}>
   <div>
    <Typography variant="h4" style={{ fontFamily : "cursive" , marginLeft : "30px" , color : "#83c5be"}}>Courseguru</Typography>
   </div>
  




{ Token ? ( <div className="logedinbar">
   

   <div>
   <Button variant="text" sx={ { color : "#83c5be" , '&:hover' : { backgroundColor : "black" , color : "white"} }}  onClick={() => { navigate('/yourcourses') }}>Your Courses</Button>
   </div>

  <div style={{ color : "#83c5be" , marginTop : "7px"}}>
  {username}
  </div>
   
  <div>
    <BasicAvatars  image={username}   ></BasicAvatars>
  </div>

<div>
  <Button variant="contained" 
style={{marginRight : 10}} 
onClick={() => {
  sessionStorage.removeItem('token')
  sessionStorage.removeItem('username')
 window.location = '/'
}}>Logout</Button>
</div>
</div>) : ( 

<div >
<Button variant="contained" 
style={{marginRight : 10}} 
onClick={() => {
 navigate('/signup')
}}>Signup</Button>
<Button variant="contained" 
style={{marginRight : 10}}
onClick={() => {
 navigate('/login')
}} >Signin</Button>
</div>
) }
 

    </div>
}

export default Appbar ;