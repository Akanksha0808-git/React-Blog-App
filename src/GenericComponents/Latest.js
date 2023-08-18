import React from "react";
import { Link } from "react-router-dom";
import "./Latest.css"

const Latest = (props) => {
  const { Heading, id, image, description, Category } = props;
  return (
    <Link to={"/detailpage/" + id} state={{ articleID: id, Category: Category }} style={{ textDecoration: 'none' }}>
      <div className="card">
        <div className="img_card">
          <img src={image} alt="not Found" />
        </div>
        <h3 className="heading">{Heading}</h3>
        <div className="content">
          <p>{description}</p>
        </div>
        <div className="text">
          <p>
            Travel <span>/ August 7 2023</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Latest;