import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import stock from '../../assets/images/stock.png';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import auction from '../../assets/images/auction.PNG';
import sauna from '../../assets/images/sauna.png';
import webshop from '../../assets/images/webshop.png';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';

const useStyles = makeStyles(theme => ({
   
    root: {
        width: "400px",
        height: '500px',
        position: 'absolute',
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
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
        fontFamily: "'PT Serif', serif",
        wordSpacing: 5,
        fontSize: 16,
    },
    media: {
        paddingTop: '56.21%',
    },
    expand: {
        width: "400px",
        height: '490px',
    
    },
    expansion: {
        backgroundColor: '#f5f5f5',
        color: "Black"
    },
    skills: {
        width: "50px",
    },
    buttons: {
        position: 'sticky',
        bottom: '15px',
    }
}));
const data = [{
    repo: "https://github.com/Srijan619/csdewas-project-2-Srijan619",
    website: "https://srijan619.github.io/csdewas-project-2-Srijan619/",
    name: "Stock Porfolio",
    image: stock,
    description: "An easy application to save the stocks and compare its value over different period of time."
}, {
    repo: "https://github.com/Srijan619/auction-website-PythonDjango",
    website: "http://chapssrijan.pythonanywhere.com/auction/",
    name: "Auction Website",
    image: auction,
    description: "An easy application to list an auction, bid on an auction"
}, {
    repo: "https://github.com/Srijan619/Sauna",
    website: "https://sauna-app.firebaseapp.com/",
    name: "Saunan App",
    image: sauna,
    description: "Non-native web app to view and book the sauna. "
}
    , {
    repo: "https://github.com/Srijan619/webshop2020",
    website: "https://webshop-1-1.herokuapp.com/",
    name: "WebShop",
    image: webshop,
    description: "A shopify website based on React(Frontend) and Django(Backend) "
}
]
function Index(props) {
    const classes = useStyles();
    return (
        <div>
            <AwesomeSlider className={classes.expand} organicArrows={false} cssModule={AwesomeSliderStyles}>
                {data.map((items,i) => {
                    return (
                        <div className={classes.root} key={i}>
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
                                        <Button variant="contained" color="primary" onClick={() => { window.open(items.website) }}>
                                            Visit</Button>
                                        <IconButton onClick={() => { window.open(items.repo) }}>
                                            <GitHubIcon className={classes.skills}></GitHubIcon>
                                            </IconButton>
                                        <br />
                                    </div>

                                </CardContent>

                            </Card>
                        </div>
                    )
                })}
            </AwesomeSlider>

        </div>
    );
}

export default Index;
