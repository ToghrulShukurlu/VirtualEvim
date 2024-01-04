import Banner from "../../components/Banner";
import img from "../../assets/img/bg.svg";
import Advertisement from "../../components/Advertisement";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl, fetchApi } from "../../utils/fetchApi";

const Rent = () => {
  const [property, setProperties] = useState([]);

  useEffect(() => {
    axios
      .get(baseUrl, {
        headers: {
          "x-rapidapi-host": "bayut.p.rapidapi.com",
          "x-rapidapi-key":
            "555be8da9fmshd28261c4ec9e424p111c7ajsnbea563346924",
        },
      })
      .then((res) => {
        console.log(res.data.hits);
        setProperties(res.data.hits);
      });
  }, []);

  return (
    <>
      <Banner bg={img} />
      <div className="container">
        <div className="row">
          {property.map((item, index) => {
            return <Advertisement home={item} key={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Rent;
