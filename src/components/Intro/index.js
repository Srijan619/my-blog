import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Intro from './intro.js'

const useStyles = makeStyles(theme => ({
    container: {
        padding: theme.spacing(1),
        width: '45%',
        height: '90%',

    },
    main: {
        position: 'relative',
    },
    root: {
        minWidth: 275,
     
        marginBottom: theme.spacing(1)
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
    circle: {
        position: 'relative',
        padding: theme.spacing(4),
        height: '200px',
        width: '200px',
      
        borderRadius: '50%',
        display: 'inline-block'
    }
}));

function Index() {
    const classes = useStyles();
    const data = [
        {

            title: "Hello there",
            description: [<span style={{ color: "#C70039" }}>'It's never too late to start'.</span>, <p> Welcome to my blog, where we will greet, explore, and stay connected.</p>]

        }
        ,
        {
            title: "Cover Letter",
            description: [<span>
                It's me <span style={{ color: "#C70039" }}>Srijan Chapagain,</span> welcomes you to the website. {Intro}
            </span>]
        }
    ]
  
    return (
        <div className={classes.container}>
            
            {data.map((items) => {
                return (<div>
                    
                    <Card className={classes.root}>
                        <CardContent>
                            <Typography className={classes.title} gutterBottom>
                                {items.title}
                            </Typography>

                            <Typography variant="body2" component="p" className={classes.paragraph}>
                                {items.description}

                            </Typography>
                        </CardContent>

                    </Card>

                </div>)
            })}
        
        </div>
    );
}

export default Index;
