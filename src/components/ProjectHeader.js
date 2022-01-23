import React from "react";
import {Link} from "react-router-dom";

const component = function(props) {
    let {projectTitle, pid} = props;
    let path = `/projects/${pid}`;


    return (
        <div className="info-header">
            <div className="container flex flex-row flex-justify-space-between">

                <div className="project flex flex-row">
                    <i className="fas fa-folder"/>
                    <Link to={path} className="link">
                        <span className="title">{projectTitle}</span>
                    </Link>
                </div>
                <div className="flex flex-row flex-justify-end">
                </div>

            </div>
        </div>
    )
}
export default component;