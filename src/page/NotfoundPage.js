import { Link } from 'react-router-dom';

const NotfoundPage = () => {
  return (
    <p>
      Page is not found. Go <Link to="/">Home</Link>
    </p>
  );
};

export default NotfoundPage;