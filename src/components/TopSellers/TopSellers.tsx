import { useEffect, useState } from "react";
import Title from "../Title/Title";
import "./styles.css";
import { Link } from "react-router-dom";
import axios from "axios";
import avt from "../../assets/images/avt-15.jpg";
const TopSellers = () => {
  const [sellers, setSellers] = useState<any[]>([]);
  useEffect(() => {
    axios
      .get(`/users`)
      .then((res) => {
        setSellers(res.data.users);
      })
      .catch((err) => {
        console.log("Err : ", err.message);
        setSellers([]);
      });
  });

  return (
    <div className="top-sellers">
      <Title title="Top Seller" />
      <div className="sellers">
        {sellers &&
          sellers.map((user: any, index: any) => (
            <div key={index} className="each-seller">
              <div className="seller-left">
                <img src={user.logo_url || avt} alt=""></img>
              </div>
              <div className="seller-right">
                <Link to="/">
                  <h6>{user.name}</h6>
                </Link>
                <span>{"0"} ETH</span>
              </div>
              <div></div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TopSellers;