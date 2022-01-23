import React from "react";
class Page extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            projectListing: [
                {title: "root/north.face", pid: 1, status: "active"},
                {title: "root/cupid.made", pid: 2},
                {title: "root/cooler.spy", pid: 3, status: "active"}
            ]
        }
    }

    render() {
        return (
            <section id="all-projects" className="page flex-grow-9">

            </section>
        )
    }
}

export default Page;