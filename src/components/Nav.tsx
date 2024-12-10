  // TODO: Add necessary code to display the navigation bar and link between the pages
  import { Link } from 'react-router-dom';

  const Nav = () => 
      <nav className='nav'>
        <Link className='nav-link' id='homeLink' to="/">Home</Link>
        <Link className='nav-link' id='savedLink' to="/SavedCandidates">Saved Candidates</Link>
      </nav>

export default Nav;
