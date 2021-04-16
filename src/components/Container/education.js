import React from 'react';
import './Container.css'
import Divider from '@material-ui/core/Divider';
import cv from '../../assets/cv.json'
const education = () => {
    return (
        <div>
            {cv.education.map((data,i) => {
                return (
                    <div className="content" key={i}>
                        <li>{data.area}</li>
                        <li className="items">{data.institution}, {data.location}</li>
                        {data.courses.map(items => {
                            return (
                                <ul className="items" key={i}>
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

export default education;