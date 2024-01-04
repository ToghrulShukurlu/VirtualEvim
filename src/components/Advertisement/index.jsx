import { Link, NavLink } from "react-router-dom";
import "./style.scss";
const Advertisement = ({ home }) => {
  return (
    <>
      <div className="col-lg-3 p-3">
        <div className="box">
          <div className="box-img">
            <img src={home.coverPhoto.url} alt="" />
          </div>
          <div className="box-content">
            <h1>{home.price}$</h1>
            <p>{home.location[0].name}</p>
            <span>{home.phoneNumber.phone}</span>
            <h6></h6>
            <NavLink
              to={`/home/${home.externalID}`}
              className="btn btn-primary m-0"
            >
              Suretli kecid
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Advertisement;
