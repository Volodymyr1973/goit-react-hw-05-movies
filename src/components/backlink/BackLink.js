import { Link, useLocation } from "react-router-dom";


const BackLink = () => {
const location = useLocation();
console.log(location)
    return (
        <Link to={location.state.from}> Go back</Link>
    )
}

export default BackLink;