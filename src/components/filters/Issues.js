import React from "react";

class Component extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchValue: ""
        }
    }

    render() {
        return (
            <div className="filter-bar">
                <div className="container flex flex-row">
                </div>
            </div>
        )
    }
}
export default Component;