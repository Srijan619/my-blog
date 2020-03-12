import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DevIcon from 'devicon-react-svg';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
const useStyles = makeStyles(theme => ({
    container: {
        padding: theme.spacing(1),
        width: '100%',

    },
    root: {
        marginBottom: theme.spacing(1)
    },
  
    title: {
        fontFamily: "'Bebas Neuef', cursive",
        fontSize: 25,
        fontWeight: 'bold',
        
    },
    paragraph: {
        fontFamily: "'Gamza Flower', cursive",
        fontSize: 17,
    },
    skills: {
        width: "50px",
    }
}));

function Index() {
    const classes = useStyles();
  
    const skills = ["django", "react", "html5", "npm", "android", "python", "javascript", "nodejs", "java", "netmagazine"];
    const softwares=["windows","visualstudio","android","ubuntu","chrome","unity_small","atom","github_full"]
    return (
        <div  className={classes.container}>
            <Card style={{marginBottom:'8px'}}><CardContent>
            <Typography className={classes.title} >Assets</Typography>
            <Divider></Divider>
            {skills.map((items) => { return (<Tooltip title={items} ><IconButton aria-label={items}><DevIcon icon={items} className={classes.skills}></DevIcon></IconButton></Tooltip>) })}
            <Tooltip title="C++"><IconButton aria-label="c++"><i  style={{fontSize:'50px'}} className="devicon-cplusplus-line-wordmark colored"></i></IconButton></Tooltip>
            <Tooltip title="C#"><IconButton aria-label="c#"><i  style={{fontSize:'50px'}} className="devicon-csharp-line-wordmark colored"></i></IconButton></Tooltip>
        </CardContent></Card>
            
           
        <Card>
            <CardContent>
            <Typography className={classes.title}>Softwares Used</Typography>
            <Divider></Divider>
               {softwares.map((items) => { return (<Tooltip title={items} ><IconButton aria-label={items}><DevIcon icon={items} className={classes.skills}></DevIcon></IconButton></Tooltip>) })}
          
            
               </CardContent></Card>
        </div>
    );
}

export default Index;
