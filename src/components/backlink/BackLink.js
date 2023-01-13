import { Link, useLocation } from "react-router-dom";
import css from './BackLink.module.css'


const BackLink = () => {
const location = useLocation();
    return (
        <Link className={css.link} to={location.state.from}> <span className={css.arrow}>&#10229;</span> Go back</Link>
    )
}

export default BackLink;