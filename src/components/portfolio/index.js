import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
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
        fontFamily: "'PT Serif', serif",
        fontSize: 20,
        fontWeight: 'bold',

    },
    paragraph: {
        fontFamily:"'PT Serif', serif",
        wordSpacing:5,
        fontSize: 16,
    },
    expand:{
        display:'flex',
        justifyContent:'space-between',
        flexDirection:'row',
        width:'100%'
    },
    expansion:{
        backgroundColor:'#f5f5f5',
        color:"Black"
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
         <span style={{color:"blue"}}>19 Nov 2018 - 31 Aug 2019 || Building Construction Worker </span>,<p>Vikstrom Plåtslageri, Pietarsaari (Finland)</p>,<p>-Plates installation</p>,
        <span style={{color:"blue"}}>Sep 2020 - Feb 2021 || Teaching Assistant</span>, <p>Åbo Akademi, Turku (Finland)</p>, <p>- Teaching Assistant for Project Course and Web Apps</p>, 
            <p>- Helping students find groups and a suitable project.</p>,<p>- Helping with the assignments and documenations.</p>,<p>- Help evaluate the students' task to ease the teacher's work.</p>,
            <span style={{color:"blue"}}>Nov 2020 - Present || Master Thesis Student</span>, <p>VeriDevOps Project, Åbo Akademi, Turku (Finland)</p>, <p>- Exploiting REST API with SBST</p>, 
              
        ]
    },
    {
        title: "Education",
        description:[
            <span style={{color:"blue"}}>1 Sep 2014 - 1 May 2018 || Bachelors of Science in Information Technology</span>,<p>Centria UAS, Kokkola (Finland)</p>,  
       <span style={{color:"blue"}}>1 Sep 2019 - Present || Masters in Computer Engineering </span>,<p>Åbo Akademi, Turku (Finland)</p>]
  },
  
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
                            <Typography className={classes.paragraph}>
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
