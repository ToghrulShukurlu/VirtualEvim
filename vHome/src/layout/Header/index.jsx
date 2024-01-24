import { NavLink } from "react-router-dom";
import "./style.scss"
const Header = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="logo">
                <h1>virtualevim</h1>
              </div>
            </div>
            <div className="col-lg-6">
              <ul className="links">
                <li>
                  <NavLink to="/">BÜTÜN ELANLAR</NavLink>
                </li>
                <li>
                  <NavLink to="/home360">360 ELANLAR</NavLink>
                </li>
                <li>
                  <NavLink to="/rent">KİRAYƏ</NavLink>
                </li>
                <li>
                  <NavLink to="/about">HAQQIMIZDA</NavLink>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 d-flex justify-content-center align-items-center">
              <button>Elan yerləşdir</button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
