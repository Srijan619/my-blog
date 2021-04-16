import React from 'react';
import './Container.css'
import Divider from '@material-ui/core/Divider';
import cv from '../../assets/cv.json'
const work = () => {
    return (
        <div>

            {cv.work.map((data,i) => {
                return (
                    <div className="content" key={i}>
                    
                            <li>{data.company}, {data.location}</li>
                            <li>{data.position}</li>
                            {data.highlights.map((items,i) => {
                                return (
                                    <ul key={i}>
                                        <li className="items">{items}</li></ul>
                                )
                            })}
                            <br></br>
                       <Divider></Divider>
                    </div>
                )
            })}
        </div>
    );
};

export default work;