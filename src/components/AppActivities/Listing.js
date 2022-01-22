import Entry from "./Entry";

const component = function(props) {
    let listing = props.listing.map( entry => {
        return ( <Entry /> )
    });
    return (
        <div className="app-listing activities flex flex-col">
            <div className={"title"}>All Activity</div>
            <div className="listing flex flex-col">
                {listing}
            </div>
        </div>
    )
}

export default component;