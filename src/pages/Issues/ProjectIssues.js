import React from "react";
import {Link} from "react-router-dom";
import ProjectHeader from "../../components/ProjectHeader";
import IssueFilter from "../../components/filters/Issues";


class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pid: 12,
            projectTitle: "root/sycamore-db"
        }
    }

    render() {
        return (
            <section className="page issues">
                <ProjectHeader
                    pid={this.state.pid}
                    projectTitle={this.state.projectTitle}
                />
                <IssueFilter />

            </section>
        )
    }
}
export default Page;