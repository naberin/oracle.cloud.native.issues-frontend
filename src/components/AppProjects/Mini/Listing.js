import Entry from "./Entry";

const component = function(props) {

    let listing = props.listing.map( entry => {

        return ( <Entry details={entry}/> )
    });

    return (
        <div className="flex flex-col">
            {listing}
        </div>
    )
}

export default component;