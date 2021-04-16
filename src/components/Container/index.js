import React, { useState } from 'react';
import './Container.css'
import Header from '../Header'
import Projects from '../Projects'
import {
    BrowserRouter as Router,
    Switch,
    Route, Link
} from "react-router-dom";
import cv from '../../assets/cv.json'
import Work from './work'
import Skills from './skills'
import Education from './education'
const Index = () => {
    const values = [
        { id: 1, text: "Work", path: "/my-blog/work" },
        { id: 2, text: "Education", path: "/my-blog/education" },
        { id: 3, text: "Skills", path: "/my-blog/skills" },
        { id: 4, text: "Projects", path: "/my-blog/projects" }
    ];
    const [activeId, setActiveId] = useState();

    return (
        <Router>
            <div className="background">
                <div className="container">
                    <div className="leftPanel">
                        <div className="pic"></div>
                        <div className="userDetails">
                            <h3>{cv.basics.name}</h3>
                            <h3>{cv.basics.location.city} , {cv.basics.location.countryCode}</h3>
                            <h3>{cv.basics.phone}</h3>
                            <h3>{cv.basics.email}</h3>
                        </div>
                        <Header></Header>
                    </div>

                    <ul className="navigation">
                        {values.map((val, i) => (
                            <li key={i}><Link onClick={() => { setActiveId(val.id) }} className={activeId === val.id ? "active" : "Inactive"} to={val.path} key={val.id}>{val.text}</Link></li>
                        ))}
                    </ul>
                    <div className="contentContainer">
                        <Switch>
                            <Route path="/my-blog" exact component={Work} />
                            <Route path="/my-blog/projects" component={Projects} />
                            <Route path="/my-blog/work" component={Work} />
                            <Route path="/my-blog/education" component={Education} />
                            <Route path="/my-blog/skills" component={Skills} />
                        </Switch>


                    </div>



                </div>

            </div>
        </Router>
    );
};

export default Index;