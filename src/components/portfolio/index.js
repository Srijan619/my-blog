import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Software from '../Softwares';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
    container: {
        padding: theme.spacing(1),

    },
    root: {
        width:'100%',
        height:'fit-content',
 
        margin: theme.spacing(1),
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
    expand:{
        display:'flex',
        justifyContent:'space-between',
        flexDirection:'row',
        width:'100%'
    },
    expansion:{
        backgroundColor:'#3D9439',
        color:"white"
    }
}));

function Index() {
    const classes = useStyles();
    const data = [
     
        {
            title: "Personal Infromation",
            description:[
                <span style={{color:"blue"}}>Name: </span>,<p style={{ color: "#C70039" }}>Srijan Chapagain</p>,
                <span style={{color:"blue"}}>Address: </span>,<p>Yo-Kylä 6 d 12, 20540 Turku, Finland</p>,
           <span style={{color:"blue"}}>Phone-Number: </span>,<p>+358-4578770641</p>,
            <span style={{color:"blue"}}>Email: </span>,<p>chapssrijan@gmail.com</p>,
            <span style={{color:"blue"}}>Sex: </span>,<p>Male</p>,
            <span style={{color:"blue"}}>Date Of Birth:</span>,<p>10 April 1996</p>,
            <span style={{color:"blue"}}>Nationality:</span>,<p>Nepalese</p>]
      }
      ,
      {
          title: "Work Experience",
          description:[
              <span style={{color:"blue"}}>1 Feb 2016 - 1 Sep 2018 || Deliverer</span>,<p>KP Jakelu Oy, Kokkola (Finland)</p>,<p>-Newspaper Delivery</p>,
         
              <span style={{color:"blue"}}>1 May 2015 - 15 Aug 2015 || Game Development Internship </span>,<p>Centria UAS, Kokkola (Finland)</p>,<p>-Game project workshop</p>,<p>-Familiarizing with Unity3D platform</p>,<p>-Developing a commercial game</p>,
         <span style={{color:"blue"}}>19 Nov 2018 - 31 Aug 2019 || Building Construction Worker </span>,<p>Vikstrom Plåtslageri, Pietarsaari (Finland)</p>,<p>-Plates installation</p>]
    },
    {
        title: "Education",
        description:[
            <span style={{color:"blue"}}>1 Sep 2014 - 1 May 2018 || Bachelors of Science in Information Technology</span>,<p>Centria UAS, Kokkola (Finland)</p>,  
       <span style={{color:"blue"}}>1 Sep 2019 - Present || Masters in Computer Engineering </span>,<p>Åbo Akademi, Turku (Finland)</p>]
  },
  ,
    {
        title: "Languages",
        description:[
            <span style={{color:"blue"}}>Mother Tongue</span>,<p>Nepali</p>,  
       <span style={{color:"blue"}}>Foreign Languages</span>,<p>English (Proficient) </p>,<p>Finnish (Basic),</p>,<p>Swedish (Begineer)</p>]
  },
    ]
      

    return (
        <div className={classes.container}>
            <ExpansionPanel className={classes.expansion}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.title} >Portfolio</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                <div className={classes.expand}>
                {data.map((items) => {
                return (

                    <Card className={classes.root}>
                        <CardContent>
                            <Typography className={classes.title}>
                                {items.title}
                            </Typography>
                          <Divider></Divider>
                          <br></br>
                            <Typography variant="body2" component="p" className={classes.paragraph}>
                                {items.description}

                            </Typography>
                        </CardContent>

                    </Card>

              )
            })}
             <Software/>
              </div>
              
                </ExpansionPanelDetails>
            </ExpansionPanel>
           

        </div>
    );
}

export default Index;
