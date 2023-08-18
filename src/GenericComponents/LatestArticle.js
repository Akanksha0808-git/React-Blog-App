import React from 'react'
import "./LatestArticle.css"
import { Link } from 'react-router-dom'

const LatestArticle = (props) => {
  const { Heading, id, image, description , Category } = props;
  return (
    <Link  to={"/detailpage/"+id} state={{ articleID: id , Category : Category}}  style={{ textDecoration: 'none' }}>
    <div className='Article_Contanier'>
      <div className="articleImg">
        <img src={image} alt="not Found" />
      </div>
      <div className="Article_Content">
        <div className="articleheading">
        <h2>{Heading}</h2>
        <p>{description}</p>
        </div>
        <p className='text'>TRAVEL <span> / August 7 2023</span></p>
      </div>
    </div>
    </Link>
    
  )
}

export default LatestArticle