import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div>
             <nav className="navbar  navbar-expand-lg ms-5 navbar-light bg-light" style={{backgroundcolor: "#e3f2fd"}}>
  
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
      { <ul className="nav  me-auto mb-2 mb-lg-0 ms-lg-4 "> 
      <li className="nav-item active ">
            <Link to='/' className="nav-link " aria-current="page" href="index.html">
            <span>ALL</span>
            </Link>
          </li>
          <li className="nav-item active">
            <Link to='/FullStack' className="nav-link " aria-current="page" href="index.html">
            <span>FULLSTACK DEVELOPMENT</span>
            </Link>
          </li>
          <li className="nav-item active">
            <Link to='/DataScience' className="nav-link" href="index.html">
                <span>DATA SCIENCE</span>
                </Link>
           </li>
          <li className="nav-item active">
            <Link to='/CyberSecurity' className="nav-link" href="index.html">
               <span>CYBER SECURITY</span>
            </Link>
          </li>
          <li className="nav-item active">
            <Link to='/Career' className="nav-link" href="index.html">
                <span>CAREER</span>
            </Link>
          </li>
      </ul>
      } 
  </div>

</nav>
            {/* <Link to="/">All</Link>
            <Link to="/FullStack">FullStack</Link>
            <Link to="/DataScience">DataScience</Link>
            <Link to="/CyberSecurity">CyberSecurity</Link>
            <Link to="/Career">Career</Link> */}
        </div>
    );
};

export default Navbar;