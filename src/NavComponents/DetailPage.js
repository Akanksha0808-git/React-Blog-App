import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { Store } from '../ContextAPI/DataStore'
import Header from "../GenericComponents/Header";
import Footer from "../GenericComponents/Footer";
import { BiShareAlt } from "react-icons/bi";
import { FaHands } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

  faGithub,
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./DetailPage.css";
import DetailDesign from "../GenericComponents/DetailDesign";

import User from "../objects/user.png"

const DetailPage = () => {
  // Take Id From The Link
  const location = useLocation();
  const { articleID, Category } = location.state;
  console.log(articleID);
  console.log(Category);


  const [Detaildata] = useContext(Store);
  console.log(Detaildata);
  return (
    <>
      <Header />
      <div className="Main_Desc">

        {/* Like And Share Button  */}

        <div className="ShareIcon">
          <div className="div1">
            <FaHands className="clap" />
            <p>9.3k Claps</p>
          </div>
          <div className="div2">
            <BiShareAlt style={{ fontSize: '2rem' }} />
            <p>Share This Article</p>
          </div>
        </div>

        {/* Main description Post  */}
        {
          Detaildata && Detaildata.filter((data) => data.id === articleID).map((item, index) => {
            return (
              <div key={index} className="main-head">
                <div className="head">
                  <h1>{item.heading}</h1>
                </div>

                <div className="user">
                  <div className="username">
                    <div className="usericon">

                      <img src={User} alt="" className="icon" />
                      {/* This is Authour name Icon */}
                    </div>
                    <div className="name">
                      <h3>Akanksha Sharma</h3>
                      <p>Aug 8 2023 | 10 min read</p>
                    </div>
                  </div>

                  <div className="userSocial top_Postion">
                    <Link to={"https://www.facebook.com"} target="_blank"><div className="social_child1">  <FontAwesomeIcon icon={faFacebook} /></div></Link>
                    <Link to={"https://www.instagram.com/akanksharma111/"} target="_blank" ><div className="social_child1">  <FontAwesomeIcon icon={faInstagram} /></div></Link>
                    <Link to={"https://github.com/Akanksha0808-git"} target="_blank"><div className="social_child1">  <FontAwesomeIcon icon={faGithub} /></div></Link>
                    <Link to={"https://www.linkedin.com/in/akanksha-sharma-0808ak"} target="_blank"><div className="social_child1">   <FontAwesomeIcon icon={faLinkedin} /></div></Link>
                  </div>
                </div>

                <div className="Main_Image">
                  <img src={item.image} alt="not Found" />
                </div>
                <div className="description">
                  <p>{item.description}</p>
                </div>

                <div className="like">
                  <FaHands className="clap" />
                  <p>9.3k Claps</p>
                </div>

                {/* Auther Section  */}
                <div className="user">
                  <div className="username">
                    <div className="usericon">
                      <img src={User} alt="" className="icon" />
                      {/* This is Authour name Icon */}
                    </div>
                    <div className="name">
                      <h3>Akanksha Sharma</h3>
                      <p>Aug 8 2023 | 10 min read</p>
                    </div>
                  </div>
                  <div className="userSocial">

                    <Link to={"https://www.facebook.com"} target="_blank"><div className="social_child1">  <FontAwesomeIcon icon={faFacebook} /></div></Link>
                    <Link to={"https://www.instagram.com/akanksharma111/"} target="_blank" ><div className="social_child1">  <FontAwesomeIcon icon={faInstagram} /></div></Link>
                    <Link to={"https://github.com/Akanksha0808-git"} target="_blank"><div className="social_child1">  <FontAwesomeIcon icon={faGithub} /></div></Link>
                    <Link to={"https://www.linkedin.com/in/akanksha-sharma-0808ak"} target="_blank"><div className="social_child1">   <FontAwesomeIcon icon={faLinkedin} /></div></Link>
                  </div>
                </div>

                <hr className="border" />

              </div>
            );
          })}
        {/* <hr/> */}
        <div className="TheLatest">
          <h2>
            More From Serian
            <hr
              style={{
                width: "190px",
                height: "3px",
                background: "red",
                border: "none",
                outline: "none",
                borderRadius: "5px",
                position: "absolute"
              }}
            />
          </h2>
          <div className="Latest_contanier">
            {
              Detaildata && Detaildata.filter((data) => data.id % 2 === 0 && (data.id % 4 === 0)).map(
                (item, index) => {
                  if (item.category === Category) {
                    console.log(item.id)
                    return (
                      <DetailDesign
                        key={index}
                        Heading={item.heading}
                        id={item.id}
                        image={item.image}
                        Category={item.category}
                        description={item.description.slice(0, 200)}
                      />
                    );
                  }
                }
              )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetailPage;