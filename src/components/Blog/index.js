import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton'
import MoreIcon from '@material-ui/icons/More';
import { Link } from 'react-router-dom'
import ShowMore from '../utils/showMore'

const useStyles = theme => ({
    container: {
        padding: theme.spacing(1),
        width: '45%',
        height: '90%',
    },
    blogContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    root: {
        width: '100%',
        marginBottom: theme.spacing(1)
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
    footNote: {
        fontSize: 14,
        fontStyle: 'italic',
        color: 'grey'
    },
    expansion: {
        backgroundColor: '#f5f5f5',
        color: "Black"
    }
});

const blog_url = "https://fplappapi.herokuapp.com/blog/api/"
class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogData: [],
            error: null,

        }
    }

    async componentDidMount() {

        const customData = []
        await fetch((blog_url))
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    throw Error("The game is updating")
                }
            })
            .then(posts => {
                customData.push(posts[0])
            })
            .catch(error => this.setState({
                error: error
            }))

        this.setState({
            blogData: customData
        })

    }
 
    render() {
        const { classes } = this.props;
        const { blogData } = this.state;
        console.log(blogData)
        return (
            <div className={classes.container}>
                <ExpansionPanel className={classes.expansion} >
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.title} >Latest Blog Post</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>

                        <div className={classes.blogContainer}>
                            {blogData.map(items => {

                                return (
                                    <Card className={classes.root} key={items.id}>
                                        <CardContent >
                                            <Typography className={classes.title} style={{ fontSize: 18 }} gutterBottom>
                                                {items.title}</Typography>
                                            <Divider />
                                            <ShowMore lines={2}>{items.description}</ShowMore>
                                            <Divider />
                                            <br></br>
                                            <Typography className={classes.footNote}>
                                                {items.note}</Typography>

                                            <Typography className={classes.footNote}>
                                                {items.date}</Typography>

                                        </CardContent>

                                        <IconButton >

                                            <MoreIcon />
                                            <Link to='/my-blog/Blogs' target="_blank" style={{ textDecoration: 'none' }}>
                                                <Typography className={classes.footNote} style={{ paddingLeft: 5 }} >See all posts</Typography>
                                            </Link>
                                        </IconButton>

                                    </Card>
                                )

                            })}
                        </div>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        );
    }
}

export default withStyles(useStyles)(index);