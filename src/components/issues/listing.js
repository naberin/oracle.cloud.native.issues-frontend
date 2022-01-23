import React from "react";

const component = function(props) {

    let listing = props.listing.map( (entry, index) => {
        return <div key={index}> {entry} </div>
    })

    return (
        <div className="issues app-listing">
            <div className="flex flex-col container">
                {listing}
            </div>
        </div>
    )
}
export default component;