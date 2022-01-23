import React from "react";
import {Link} from "react-router-dom";


class Component extends React.Component {
    render() {
        return (
            <header className="app-header">
                <div className="container flex flex-row flex-justify-space-between">

                    <div className="title">IssueTracker</div>

                    <div className="app-navigation flex flex-row flex-justify-end">
                        <Link to="/activity" className="nav"><i className="fas fa-bell"/></Link>
                        <div className="nav"><i className="fas fa-plus"/></div>
                    </div>
                </div>
            </header>
        )
    }
}
export default Component;