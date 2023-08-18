import React, { useContext } from 'react'
import { Store } from '../ContextAPI/DataStore'
import './Home.css'

import Homeupper from '../GenericComponents/Homeupper';
import Latest from '../GenericComponents/Latest';
import LatestArticle from '../GenericComponents/LatestArticle';
import TopPost from "../GenericComponents/TopPost"
import Advert from "../GenericComponents/Advert"
import Footer from '../GenericComponents/Footer'
import News from "../GenericComponents/News"
function Home() {
    const [HomeData] = useContext(Store);

    return (
        <>
            <Homeupper />
            <div className="TheLatest">
                <h2>The Latest
                    <hr style={{ width: "100px", height: "3px", background: "red", border: "none", outline: "none", borderRadius: "5px", position: "absolute" }} />
                </h2>
                <div className="Latest_contanier">
                    {
                        HomeData.filter((data) => data.category === "mixer").map((item, index) => {
                            // console.log(item)
                            return (

                                <Latest key={index}
                                    Heading={item.heading.slice(0, 40)}
                                    id={item.id}
                                    image={item.image}
                                    Category={item.category}
                                    description={item.description.slice(0, 300)} />
                            )
                        })
                    }
                </div>
            </div>
            {/* This is Parent Contanier  */}
            <div className="TheLatest Section_Contanier">

                {/* This is Latest Articles Contanier  */}

                <div className="left_contanier" >
                    <h2>
                        Latest Articles
                        <hr style={{ width: "100px", height: "3px", background: "red", border: "none", outline: "none", borderRadius: "5px", position: "absolute" }} />
                    </h2>
                    {
                        HomeData.filter((data) => data.id % 5 === 0 && data.id % 3 === 0).map((item, index) => {
                            return (
                                <LatestArticle key={index}
                                    Heading={item.heading.slice(0, 100)}
                                    id={item.id} image={item.image} Category={item.category} description={item.description.slice(0, 100)} />
                            )
                        })
                    }
                </div>


                {/* This is Top Post Container  */}
                <div className="rightContanier" >
                    <Advert embedId="rokGy0huYEA" />
                    <h2>
                        Top Posts
                        <hr style={{ width: "100px", height: "3px", background: "red", border: "none", outline: "none", borderRadius: "5px", position: "absolute" }} />
                    </h2>

                    {
                        HomeData.filter((data) => data.id % 7 === 0 && data.id % 2 === 0).map((item, index) => {
                            return (
                                <TopPost key={index}
                                    Heading={item.heading.slice(0, 78)}
                                    id={item.id}
                                    image={item.image}
                                    Category={item.category}
                                    description={item.description.slice(0, 80)}
                                    index={index} />
                            )
                        })
                    }
                </div>
            </div>
            {/* Text News Only  */}
            <div className="TheLatest">
                <h2>The Latest
                    <hr style={{ width: "100px", height: "3px", background: "red", border: "none", outline: "none", borderRadius: "5px", position: "absolute" }} />
                </h2>
                <div className="Latest_contanier">
                    {
                        HomeData.filter((data) => data.id % 5 === 0 && (data.category === "Hollywood")).map((item, index) => {
                            // console.log(item)
                            return (

                                <News key={index}
                                    Heading={item.heading.slice(0, 40)}
                                    id={item.id}
                                    Category={item.category}
                                    description={item.description.slice(0, 300)} />
                            )
                        })
                    }
                </div>
            </div>


            <Footer />
        </>


    )
};
export default Home;