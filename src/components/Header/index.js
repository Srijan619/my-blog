import { makeStyles } from '@material-ui/core/styles';
import React, { useContext } from 'react';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import WorkIcon from '@material-ui/icons/Work';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';



const useStyles = makeStyles(theme => ({
  root: {
      margin: theme.spacing(1),
      position: 'relative',
    padding: '10px',
    float: 'right',
    width: '300px',
    height: '150px',
    transform: 'rotate(50deg)',
    border: 'solid 5px #000',
    borderColor: 'transparent transparent #000 transparent',
    borderRadius: '0 0 240px 50%/60px',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between'
   
  },
  containerNav: {
    position:"absolute",
    bottom:'5%',
    left:'10%',
    transform: 'rotate(1deg)',
    
  },
  hoverItem:{
    fontSize:30,
    cursor:"pointer",
    paddingRight:20,
    '&:hover': {
      color: "#f00",

    }
  },
  button: {
    margin: '10px',
    color: 'white',
    borderColor: 'white',
    background: '#00000054',
    '&:hover': {
      color: 'black',
      background: theme.palette.primary.contrastText
    }
  }
 ,
  box2:{
    border: 'solid 5px #000',
    borderColor: 'transparent transparent #000 transparent',
    borderRadius: '0 0 240px 50%/30px',
  }

}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div >
        <div className={classes.containerNav}>
          <FacebookIcon className={classes.hoverItem} onClick={()=>{window.open("https://www.facebook.com/shreezan.anisopter")}}  />
          <GitHubIcon className={classes.hoverItem} onClick={()=>{window.open("https://github.com/Srijan619")}}/>
          <TwitterIcon className={classes.hoverItem} onClick={()=>{window.open("https://twitter.com/chaps_srijan")}}  />
          <EmailIcon className={classes.hoverItem}   onClick={()=>{window.open("mailto:chapssrijan@gmail.com")}} />
          <LinkedInIcon className={classes.hoverItem}  onClick={()=>{window.open("https://www.linkedin.com/in/srijan-chapagain-b18b5ab7/")}} />
        </div>
      </div>
      {/**
      <div >
        
        <div className={classes.box2}>
          <HomeIcon className={classes.hoverItem}  />
          <InfoIcon className={classes.hoverItem}  />
          <WorkIcon className={classes.hoverItem}  />
        </div>
      </div> */}
    </div>
  );
};

export default Header;
