import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Pagination from '../utils/Pagination'
import ShowMore from '../utils/showMore'

const useStyles = theme => ({
    container: {
        padding: theme.spacing(1),
        width: '45%',
        height: '90%',
    },
    blogContainer: {
        display: 'flex',
        width: '80%',
        padding: theme.spacing(1),
        flexDirection: 'column'
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
        wordSpacing: 3,
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
            isLoading: false,
            error: null,
            showMoreData: false,
            currentPage: 1,
            postsPerPage: 3,
            currentPosts: []
        }
        this.paginate = this.paginate.bind(this);

    }

    async componentDidMount() {
        this.setState({ isLoading: true })
        await fetch((blog_url))
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    throw Error("The blogs will be updated soon....")
                }
            })
            .then(posts => {
                this.setState({
                    blogData: posts, isLoading: false
                })
            })
            .catch(error => this.setState({
                error: error
            }))
        this.navigate();
    }
    navigate() {
        const { blogData, postsPerPage, currentPage } = this.state
        const indexOfLastPost = currentPage * postsPerPage;
        const indexOfFirstPost = indexOfLastPost - postsPerPage;
        const currentPosts = blogData.slice(indexOfFirstPost, indexOfLastPost)
        this.setState({ currentPosts: currentPosts })
    }
    paginate(pageNumber){
        this.setState({currentPage:pageNumber},()=>  this.navigate()) // Forcing the update and navigation
        console.log(pageNumber)
      
    }
    render() {
        const { classes } = this.props;
        const { currentPosts, isLoading, blogData, postsPerPage } = this.state;
        if (isLoading) {
            return (<Typography>Loading Data.....</Typography>)
        }
        return (
            <div className={classes.blogContainer}>
                {currentPosts.map(items => {
                    return (

                        <Card className={classes.root} key={items.id}>
                            <CardContent >
                                <Typography className={classes.title} style={{ fontSize: 18 }} gutterBottom>
                                    {items.title}</Typography>
                                <Divider />

                                <br></br>
                                <ShowMore>
                                    {items.description}
                                </ShowMore>
                                <br></br>
                                <Divider />
                                <br></br>
                                <Typography className={classes.footNote}>
                                    {items.note}</Typography>

                                <Typography className={classes.footNote}>
                                    {items.date}</Typography>
                            </CardContent>

                        </Card>

                    )

                })
                }
                <Pagination postsPerPage={postsPerPage} totalPosts={blogData.length} paginate={this.paginate} />
            </div >
        );
    }
}

export default withStyles(useStyles)(index);