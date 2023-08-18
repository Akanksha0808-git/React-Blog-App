import React from 'react'
import "./TopPost.css"
import "./LatestArticle.css"
import { Link } from 'react-router-dom'


const TopPost = (props) => {
  const { Heading, id, image, description, Category, index } = props;
  return (
    <Link to={"/detailpage/" + id} state={{ articleID: id, Category: Category }} style={{ textDecoration: 'none' }}>
      <div className='Post_Contanier'>

        <div className="PostImg">

          <img src={image} alt="" />
        </div>
        <div className="Post_Content">
          <div className="Post_heading">
            <h2>{Heading}</h2>
            <p>{description}</p>
          </div>
          <p className='text'>TRAVEL <span> / August 21 2017</span></p>
          <h1 className='num'>{index + 1}</h1>
        </div>
      </div>
    </Link>
  )
}

export default TopPost