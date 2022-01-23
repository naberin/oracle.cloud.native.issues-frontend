import React from "react";
import ProjectHeader from "../../components/ProjectHeader";
import IssueFilter from "../../components/filters/Issues";
import IssueListing from "../../components/issues/listing";


class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pid: 12,
            projectTitle: "root/sycamore-db",
            issueListing: []
        }
    }

    render() {
        return (
            <section className="page issues">

                <ProjectHeader pid={this.state.pid} projectTitle={this.state.projectTitle}/>
                <IssueFilter />
                <IssueListing listing={this.state.issueListing} />

            </section>
        )
    }
}
export default Page;