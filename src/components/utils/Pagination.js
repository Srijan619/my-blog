import React from 'react';

const classes = ({
    subContainer:{
        display:'flex',
        flexDirection:'row',
        textDecoration:'none',
        color:'#ffff'
    },
    list:{
        margin:'2px',
        textDecoration:'none',

    }
});


const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
    
        <nav > 
            <ul style={classes.subContainer}>
                {pageNumbers.map(number => (
                    <li key={number} style={classes.list}>
                        <a onClick={() => paginate(number)} href="#" style={classes.list} >
                      {number} /
                        </a>
                    </li>
                  
                ))}
            </ul>

        </nav>


    );
};

export default Pagination;