import { NavLink, useNavigate } from "react-router-dom";
import './Header.css'


function Header(props) {

  return (
    <>
  <nav className="navbar">
    <div className="header-container">

      <div >
        
        <ul>
          <li>
            <NavLink to="/">About Us</NavLink>
          </li>

          <li>
            <NavLink to="/">Tech</NavLink>
          </li>

        </ul>
      </div>
    </div>
  </nav>
    </> 
  );
}





export default Header;