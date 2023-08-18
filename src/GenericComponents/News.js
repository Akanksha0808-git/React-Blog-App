import React from "react";
import { Link } from "react-router-dom";
import "./Latest.css"

const News = (props) => {
  const {Heading , id, description , Category } = props;
  return (
    <Link  to={"/detailpage/"+id} state={{ articleID: id , Category : Category}}
    style={{ textDecoration: 'none' }}>
      <div className="card">
        <h3 className="heading">{Heading}</h3>
        <div className="content">
          <p>{description}</p>
        </div>
        <div className="text">
          <p>
            Travel <span>/ August 21 2017</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default News;