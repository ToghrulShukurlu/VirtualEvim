import { useState, useEffect } from "react";
import "./style.scss";
import { baseUrl } from "../../utils/fetchApi";
import { useParams } from "react-router-dom";
import axios from "axios";
const Detail = () => {
  const { id } = useParams();

  const [detailProperty, setDetailProperty] = useState({});

  useEffect(() => {
    const a = (param) => {
      axios
        .get(`https://bayut.p.rapidapi.com/properties/detail`, {
          headers: {
            "x-rapidapi-host": "bayut.p.rapidapi.com",
            "x-rapidapi-key":
              "555be8da9fmshd28261c4ec9e424p111c7ajsnbea563346924",
          },
          params: {
            externalID: `${param}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          setDetailProperty(res.data);
          console.log(detailProperty);
        });
    };

    a(id);
  }, []);
  return (
    <>
      <div className="detail">
        <div className="container">
          <div className="row">
            <div className="card mb-3" style={{ maxWidth: 540 }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={detailProperty?.coverPhoto?.url}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p className="card-text">
                      <small className="text-body-secondary">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
