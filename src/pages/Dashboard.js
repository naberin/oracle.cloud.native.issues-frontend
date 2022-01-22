import React from "react";
import MinifiedProjectListing from "../components/AppProjects/Mini/Listing";

class Component extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            projectListing: []
        }
    }

    render() {
        return (
            <section className="page flex flex-row">
                <MinifiedProjectListing
                    className="flex-grow-3"
                    listing={this.state.projectListing}
                />

            </section>
        )
    }
}

export default Component;