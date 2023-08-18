import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

  faGithub,
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="FooterContainer">
        <div className="brand Footer_Brand">
          <Link to={"/"}>
            <div id='heading'><span id="Head3">The</span>
              <h1 id="Head4">Siren</h1>
            </div>
          </Link>
          <div>
            <img id='footimg' src="https://img.freepik.com/free-vector/portrait-programmer-working-with-pc_23-2148212818.jpg?w=740&t=st=1692263024~exp=1692263624~hmac=6d382a6c87ffe54d234fae1805ca62d0bd56f1615520419d9c7081bcbf51aa3c" alt="img here" height={200} width={200}></img>
          </div>


        </div>
        <div className="Footer_text">
          <div className="Footer_Pages">
            <h3 className="QuickLink">Quick Link </h3>
            <hr className="hr1" style={{ width: "125px", height: "3px", background: "white", border: "none", outline: "none", borderRadius: "5px", position: "absolute", top: "50px" }} />
            <ul className="menu1">
              <li><Link to={"/"} >Home</Link></li>
              <li><Link to={"/Bollywood"} >Bollywood</Link></li>
              <li><Link to={"/HollyWood"} >HollyWood</Link></li>
              <li><Link to={"/Technology"} >Technology</Link></li>
              <li><Link to={"/Fitness"} >Fitness</Link></li>
              <li><Link to={"/Food"} >Food</Link></li>
            </ul>
            {/* ,right:"420px" */}
          </div>
          <div className="FooterContact">
            <h3 className="Contact"> Contact </h3>
            <hr className="hr1" style={{ width: "90px", height: "3px", background: "white", border: "none", outline: "none", borderRadius: "5px", position: "absolute", top: "210px" }} />
            <Link to={"https://www.facebook.com"} target="_blank"><div className="social_child">  <FontAwesomeIcon icon={faFacebook} /></div></Link>
            <Link to={"https://www.instagram.com/akanksharma111/"} target="_blank" ><div className="social_child">  <FontAwesomeIcon icon={faInstagram} /></div></Link>
            <Link to={"https://github.com/Akanksha0808-git"} target="_blank"><div className="social_child">  <FontAwesomeIcon icon={faGithub} /></div></Link>
            <Link to={"https://www.linkedin.com/in/akanksha-sharma-0808ak"} target="_blank"><div className="social_child">   <FontAwesomeIcon icon={faLinkedin} /></div></Link>
          </div>
        </div>

      </div>
      <div className="CopyRightContainer">
        <h3>All CopyRight @ 2023 reserved Akanksha With ❤️ </h3>
      </div>
    </footer>
  );
};

export default Footer;
