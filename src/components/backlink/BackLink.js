import { useNavigate } from "react-router-dom";
import css from './BackLink.module.css'


const BackLink = () => {
// const location = useLocation();
const navigate = useNavigate()
const goBack = () => navigate(-1)
    return (
        <>
        <button type="button" className={css.link} onClick={goBack}>&#10229; Go back</button>
         {/* <Link className={css.link} to={location.state.from}> <span className={css.arrow}>&#10229;</span> Go back</Link> */}
        </>
       
    )
}

export default BackLink;