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
            <section className="page">
                <div className="app-section container flex flex-row">

                    <MinifiedProjectListing
                        className="flex-grow-3"
                        listing={this.state.projectListing}
                    />

                </div>
            </section>
        )
    }
}

export default Component;