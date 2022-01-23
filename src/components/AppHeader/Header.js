import "./Header.css";
import {Link} from "react-router-dom";

const component = function(props) {
    let title = props.title;

    return (
        <header className="app-header">
            <div className="flex flex-row flex-justify-between container">
                <div className="app-details">
                    <div className="title"><Link to="/">{title}</Link></div>
                </div>

                <div className="flex flex-row flex-justify-end">

                </div>
            </div>
        </header>
    )
}
export default component;