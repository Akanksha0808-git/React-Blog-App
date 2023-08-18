import React from "react";
import './Advert.css'
import PropTypes from "prop-types";

const Advert = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);
 Advert.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default Advert;