import { Typography } from '@mui/material'
import './footer.css'
import { Navigate } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
    return <>
    <div  id="footer">
    <div id='info'>
    <Typography variant="button" color={'white'} display="block" gutterBottom>
        Contact 
      </Typography>
      <Typography variant="button" color={'white'} display="block" gutterBottom>
        Terms & Conditions
      </Typography>
      <Typography variant="button" color={'white'} display="block" gutterBottom>
        Privacy Policy
      </Typography>
      <Typography variant="button" color={'white'} display="block" gutterBottom>
        Refunds & Cancellation Policy
      </Typography>
    </div>
    <div id='realcontact'>
        <a  href='https://github.com/HarshVsingh1' target='_blank' rel='noopener noreferrer'>
            <GitHubIcon  className='icon' fontSize='large' ></GitHubIcon>
        </a>
        <a href='https://www.linkedin.com/in/harsh-vardhan-singh-2ab454257/'  target='_blank' rel='noopener noreferrrer'>

     <LinkedInIcon  sx={{color : "inherit"}} fontSize='large'></LinkedInIcon>
        </a>
    </div>
    </div>
    </>
}

 export default  Footer