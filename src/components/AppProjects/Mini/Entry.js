import {Link} from "react-router-dom";

const component = function (props) {

    let {title, pid, status} = props.details;
    let path = `/projects/${pid}`;
    let stat = status ? `color-${status}` : "color-unknown";

    return (
        <Link to={path} className="link flex flex-row">
            <div className={"square " + stat}/>
            <div className="title">{title}</div>

        </Link>
    )
}
export default component;