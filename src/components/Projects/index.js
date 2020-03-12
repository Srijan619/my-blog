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

const useStyles = makeStyles(theme => ({
    container: {
        padding: theme.spacing(1),
        width: 'fit-content',
        paddingBottom:theme.spacing(2)
    },
    root: {
        width: "300px",
        height: 'fit-content'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
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
    media: {
        height: 0,
        paddingTop: '56.21%',
    },
    expand: {
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    expansion: {
        backgroundColor: '#829439',
        color: "white"
    }
}));
const data = [{
    website:"https://srijan619.github.io/csdewas-project-2-Srijan619/",
    name: "Stock Porfolio",
    image: stock,
    description: "An easy application to save the stocks and compare its value over different period of time."
}, {
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
                                            <Typography variant="body2" component="p" className={classes.paragraph}>
                                                {items.description}<br></br><Button variant="contained" color="primary" onClick={()=>{window.open(items.website)}}>
                                                    Visit</Button>
                                                <br />
                                            </Typography>
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
