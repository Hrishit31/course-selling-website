import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import { useNavigate } from 'react-router-dom';
import '../App.css'

export default function BasicCard({title,description,price,ImageLink,id}) {

    const navigate =useNavigate()


  return (
    
    <Card variant="outlined" sx={{ width: 320 , backgroundColor : "#001C30"}}>
      <div>
        <Typography level="title-lg" sx={{color : "white"}}>{title}</Typography>
        <Typography level="body-sm" sx={{color : "white"}}>April 24 to May 02, 2021</Typography>
        <IconButton
          aria-label="bookmark Bahamas Islands"
          variant="plain"
          color="neutral"
          size="sm"
          sx={{  '&:hover' : { backgroundColor : "black" , color : "blue"}   , position: 'absolute', top: '0.875rem', right: '0.5rem' , color : "white" }}
        >
          <BookmarkAdd />
        </IconButton>
      </div>
      <AspectRatio minHeight="120px" maxHeight="200px">
        <img
          src={ImageLink}
         
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <CardContent orientation="horizontal">
        <div>
          <Typography level="body-xs" sx={{color : "white"}}>Total price:</Typography>
          <Typography fontSize="lg" fontWeight="lg" sx={{color : "white"}}>
            {price} Rs
          </Typography>
        </div>
        <Button
        id='explorebutton'
          variant="solid"
          size="md"
          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}

          onClick={() => navigate('/card/' + id)  } 
        >
          Explore
        </Button>
      </CardContent>
    </Card>
  );
}