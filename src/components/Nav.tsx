  // TODO: Add necessary code to display the navigation bar and link between the pages
  import { Link } from 'react-router-dom';

  const Nav = () => 
      <div>
        <Link to="/">Home</Link>
        <Link to="/SavedCandidates">Saved Candidates</Link>
      </div>

export default Nav;
