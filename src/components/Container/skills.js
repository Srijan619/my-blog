import React from 'react';
import './Container.css'
import cv from '../../assets/cv.json'
const skills = () => {
    return (
        <div>
            {cv.skills.map((data,i) => {
                return (
                    <div className="contentSkills" key={i}>
                    <div className="content">
                        <h2>Softwares and Libraries</h2>
                            {data.software.map((items,i) => {
                                return (
                                    <div key={i} >
                                    <ul className="items"  >
                                        <li className="items" >{items}</li>
                                    </ul>
                                     
                                    <br></br>
                                    </div>
                                        

                                )
                            })}
                     </div>
                     <div className="content">
                        <h2>Back-End Skills</h2>
                        {data.backend.map((items,i) => {
                            return (
                                <div key={i} >
                                <ul className="items" >
                                    <li className="items" >{items}</li>
                                    
                                    </ul>
                                      <br></br>
                                      </div>

                            )
                        })}
                        </div>
                        <div className="content">
                        <h2>Front-End Skills</h2>
                        {data.frontend.map((items,i) => {
                            return (
                                <div key={i}>
                                <ul className="items" >
                                    <li className="items">{items}</li></ul>
                                      <br></br>
                                      </div>
                            )
                        })}
                        </div>
                        <div className="content">
                        <h2>Soft Skills</h2>
                        {data.softskills.map((items,i) => {
                            return (
                                <div  key={i}>
                                <ul className="items"  >
                                    <li className="items" >{items}</li></ul>
                                    <br></br>
                                      </div>
                            )
                        })}
                        </div>
                      </div>
                )
            })}
        </div>
    );
};

export default skills;