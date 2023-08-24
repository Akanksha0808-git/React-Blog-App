import { Link } from "react-router-dom";
import "./Homeupper.css";

const Homeupper = () => {
  return (
    <>
    <div className="main-Container">
        <div className="contanier">
        <Link to={"/Hollywood"} >  
            <div className="title">
            <h3>Title of Vertical Gallery</h3>
            <p>trvel/August 7 2023</p>
            </div>
            <img className="barbie" src="https://content.api.news/v3/images/bin/3cf9bf4f8184eec397559f00f0a2c572?width=650" alt="not Found" height={"515px"} width={"100%"} />
        </Link>
        </div>
        
        <div className="contanier-right">

            <div className="item">
                <Link to={"/Technology"}>
                <div className="title-2">
                    <h3>Title of Vertical Gallery</h3>
                    <p>trvel/August 7 2023</p>
                </div>
                    <img className="telecom" src="https://ichef.bbci.co.uk/news/820/cpsprodpb/DAC3/production/_130630065_gettyimages-1267327926.jpg" alt="not found" height={"250px"} width={"100%"}/>
                </Link>
            </div>

            <div className="item">
                <Link to={"/Food"}>
                <div className="title-2">
                    <h3>Title of Vertical Gallery</h3>
                    <p>trvel/August 7 2023</p>
                </div>
                    <img src="https://img.delicious.com.au/WAwkyKDt/w759-h506-q80-cfill/del/2023/07/mcdonalds-cheesy-range-source-supplied-193395-2.jpg" 
                    className="burgir" alt="not found" height={"250px"} width={"130%"}
                    />
                </Link>
            </div>

        </div>

    </div>
    </>
  )
}

export default Homeupper
