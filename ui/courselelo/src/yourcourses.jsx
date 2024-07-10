import { useEffect, useState } from "react"
import BasicCard from "./components/joycard"
import { json, useNavigate } from "react-router-dom"
import { Button } from "@mui/material"



function YourCourses() {
   
     const navigate = useNavigate();
     const  [courses , setCourses] = useState([])
     const token = sessionStorage.getItem('token') 

     useEffect(() => {
        fetch('http://localhost:3000/users/purchasedCourses', {
            method : 'GET' ,
            headers : {
                authorization : token ,
                "content-type" : "application/json"
            }
            
        }).then( (response) => { return response.json() }).then((data) => { setCourses(data.purchasedCourse) })
        console.log("hi")
      
     },[])

     const conditionStyle = courses.length > 4 ? { marginTop : "30px"} : { height : "70vh" , display : "flex" , alignItems : "center" , justifyContent : "center"}

    return <div style={{}} > 
    {courses.length > 0 ? ( <div style={conditionStyle}> <div id="cardgrid"   style={{
      width : "100vw" 
     }}  >  
       {courses.map((course) => (
         <BasicCard
         key={course.id}
         title={course.title}
         description={course.description}
         price={course.price}
         ImageLink={course.ImageLink}
         id={course.id} 
         />
         ))}
         </div> 
         </div> 
         ) : (
           
                    
                        <div style={{display : "flex", flexDirection : "column" , alignItems : "center" , justifyContent : "center"  , color : "white" , height : "70vh" }}> 
      <h2  >You haven't bought any Courses</h2>
      <Button variant="contained" 
style={{marginRight : 10}} 
onClick={() => {
 navigate('/')
}}>EXPLORE</Button>
      </div>
   
         )}
  
    </div>
}

export default YourCourses