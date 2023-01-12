const { Link } = require("react-router-dom")

const BackLink = ({value}) => {
    console.log(value)
    return (
        <Link to={value}> Go back</Link>
    )
}

export default BackLink;