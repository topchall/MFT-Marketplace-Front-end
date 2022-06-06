import React, { useEffect, useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { Link } from "react-router-dom";
import Title from "../Title/Title";
import "./styles.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Slider from "react-slick";
import Likes from "../Likes/Likes";
import axios from 'axios';

export const NextArrow = ({ onClick }: any) => {
  return (
    <div className="arrow next" onClick={onClick}>
      <FaArrowRight className="right-direction" name="angle right" />
    </div>
  );
};

export const PrevArrow = ({ onClick }: any) => {
  return (
    <div className="arrow prev" onClick={onClick}>
      <FaArrowLeft className="left-direction" name="angle left" />
    </div>
  );
};
const PopularCollection = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipe: true,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
        },
      },
    ],
  };

  const [collections, setCollections] = useState<any[]>([])
  useEffect(() => {
    axios.get(`/collections`)
    .then((res) => {
      setCollections(res.data.collections);
    }).catch((err) => {
      console.log("Err : ", err.message);
      setCollections([]);
    })
  })
  
  return (
    <div className="popular-collection">
      <Title title="Popular Collection" />
      <div className="popular-collection-container">
        <Slider className="slider-container" {...settings}>
          {collections && collections.map((collection, index) => (
            <div key={index} className="pop-collection-card">
              <div className="top-pop-card">
                <img src={collection.featured_uri} alt="" />
              </div>
              <div className="bottom-pop-card">
                <div className="popular">
                  <img style={{width:50, height:50}} src={collection.logo_uri} alt="" />
                  <div>
                    <AiOutlineCheck />
                  </div>
                </div>
                <div className="likes-content">
                  <div className="content">
                    <Link to="/">{collection.name}</Link>
                    <div>
                      <span>Created by</span>
                      <Link to="/">{collection.creatorUser.name}</Link>
                    </div>
                  </div>
                  {/* <Likes popularCollection={true} /> */}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PopularCollection;
