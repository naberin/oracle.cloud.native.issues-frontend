import {Link} from "react-router-dom";

const component = function (props) {

    let {title, pid} = props.details;
    let path = `/projects/${pid}`

    return (
        <Link to={path} className="link">{title}</Link>
    )
}
export default component;