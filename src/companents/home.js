import React, {useEffect, useState} from 'react';
import "./home.css"
import axios from "axios";

const Home = () => {
    const [product, setProduct] = useState([])


    const getProduct = () => {
        axios(`https://api.escuelajs.co/api/v1/products`)
            .then((res) => {
                setProduct(res.data.slice(0,8))
                console.log(res.data)
            })
    }

    // const {title, images} = product

    useEffect(() => {
        getProduct()
    }, [])



    return (
        <div id="home">
            <div className="container">
                <div className="home" style={{display: "flex", flexWrap: "wrap", gap: "80px", width: "500px"}}>
                    {
                        product.map((el) => (
                            <div className="title" >
                                <a href="https://docs.google.com/document/d/e/2PACX-1vSUEAuc0t4hYt1yehw6q2E2E-Zk1sAR6vMdDVIZ0EZhX8ug7RGP7f0wRIs-9OVKVhREDy6URbpSUddM/pub">
                                    <button  style={{cursor: "pointer",display: "flex", alignItems: "center", justifyContent: "space-between", width: "200px", background: "rgba(23, 255, 216, 0.836"}}>
                                        <img src={el.category.image} style={{width: "70px"}} alt=""/>
                                        <h4>{el.category.name}</h4>
                                    </button>
                                </a>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;