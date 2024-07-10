import { Alert, Box, Button, Card, CardContent, CardMedia, CircularProgress, Snackbar, ThemeProvider, Typography, createTheme } from "@mui/material";
import { useParams } from "react-router-dom";
import Coursecard from "./components/card";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { FillData } from "./atoms/atoms";
import useScrollToTopOnMount from "./components/scroll";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import BasicCard from "./components/joycard";
import ExploreCard from "./components/card";
import './App.css'





function Explorecard() {
  
 
  
  const {courseId} = useParams()  
  console.log(courseId)

  useScrollToTopOnMount() 



  const token = sessionStorage.getItem("token")


  const  data = useRecoilValue(FillData)
  
  const newData = data.filter((data) => {
    return data.id !== courseId
  })

  console.log(newData)

    const [Course,setCourse] = useState(null);
    let { courseid } = useParams()
  
    useEffect(() => {
      let token = sessionStorage.getItem("token")
      fetch( "http://localhost:3000/card/" + courseid,{
          method : "GET",
          headers : {
              "content-type" : "application/json",
              authorization : token
          }
      }).then((response) => {
          return response.json()
      }).then((data) => {
          setTimeout(() => {
            setCourse(data.course)
          },300)
       
      })
    },[])

    if (Course === null ) {
        return (
            <Box sx={{ display: 'flex' , justifyContent : "center" , alignItems : "center" , height : "100vh"}}>
              <CircularProgress />
            </Box>
          );
    }



return <>
<div >
   <div id="explorecard">
       <div>
       <Card key={Course.id}   >
        <ExploreCard 
        title={Course.title}
        description={Course.description}
        ImageLink={Course.ImageLink}
        courseId={courseId}
        />
       </Card>
       </div>
        
       
   </div>
   <h3 id="headline2">You may also like</h3>
   <hr style={{ margin : "5% 10%"}}></hr>

   <div className="cardSlider">
   <div className="cardslider-content"   style={{
      width : "100vw" , 
      maxHeight : "400px"
     }}  >
       { data.slice(0,3).map((course) => ( 
       
         <BasicCard
         key={course.id}
         title={course.title}
         description={course.description}
         price={course.price}
         ImageLink={course.ImageLink}
         id={course.id}
         className="Coursecard"
         />
         ))}
         </div>  
   </div>
   </div>


</>
}

export default Explorecard ;


