import Entry from "./Entry";

const component = function(props) {

    let listing = props.listing.map( entry => {

        return ( <Entry details={entry}/> )
    });

    return (
        <div className="app-listing projects flex flex-col">
            <div className={"title"}>Projects</div>
            <div className="listing flex flex-col">
                {listing}
            </div>
        </div>
    )
}

export default component;