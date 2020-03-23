import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import stock from '../../assets/images/stock.png';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import auction from '../../assets/images/auction.PNG';
import DevIcon from 'devicon-react-svg';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
    container: {
        padding: theme.spacing(1),
        width: 'fit-content',
        paddingBottom:theme.spacing(2),
        positon:'relative'
    },
    root: {
        width: "300px",
        height: '400px'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
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
    media: {
        paddingTop: '56.21%',
    },
    expand: {
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    expansion: {
        backgroundColor: '#f5f5f5',
        color: "Black"
    },
    skills: {
        width: "50px",
    },
    buttons:{
        position:'sticky',
        bottom:'15px',
    }
}));
const data = [{
    repo:"https://github.com/Srijan619/csdewas-project-2-Srijan619",
    website:"https://srijan619.github.io/csdewas-project-2-Srijan619/",
    name: "Stock Porfolio",
    image: stock,
    description: "An easy application to save the stocks and compare its value over different period of time."
}, {
    repo:"https://github.com/Srijan619/auction-website-PythonDjango",
    website:"http://chapssrijan.pythonanywhere.com/auction/",
    name: "Auction Website",
    image: auction,
    description: "An easy application to list an auction, bid on an auction"
}
]
function Index(props) {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <ExpansionPanel className={classes.expansion}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.title} >Projects</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <div className={classes.expand}>
                        {data.map((items) => {
                            return (
                                <div className={classes.container}>
                                    <Card className={classes.root}>
                                        <CardContent>
                                            <Typography className={classes.title} gutterBottom>
                                                {items.name}
                                            </Typography>
                                            <Divider></Divider>
                                            <br></br>
                                            <CardMedia
                                                className={classes.media}
                                                image={items.image}
                                                title={items.name}
                                            />
                                            <Divider></Divider>
                                            <br></br>
                                        
                                            <Typography className={classes.paragraph}>
                                                {items.description} </Typography><br></br>
                                                <div className={classes.buttons}>
                                                <Button variant="contained" color="primary" onClick={()=>{window.open(items.website)}}>
                                                    Visit</Button>
                                                    <IconButton>
                                                    <DevIcon icon="github_badge" className={classes.skills} onClick={()=>{window.open(items.repo)}}></DevIcon></IconButton>
                                                <br />
                                                </div>
                                           
                                        </CardContent>

                                    </Card>
                                </div>
                            )
                        })}
                    </div>

                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}

export default Index;
