import React, { useState } from "react";
import Pdata from "./Pdata";

const Categories = () => {

    // const [data, setData] = useState(Pdata);
    const [product, setProduct] = useState(Pdata);

    const filteringData = (e) => {
        e.preventDefault();
        // console.log(e.target.value);
        console.log(document.querySelector('input[name="gender"]:checked').value);
    }    

    return(
        <>
            <h1 className="text-center">Let's shop</h1>
            <div className="container-fluid mx-2">
                <div className="row mt-5 mx-2">
                    <div className="col-md-3">
                        <form>
                            <input type="radio" id="men" name="gender" value="men" className="me-3 mb-3" onChange={filteringData} />
                            <label htmlFor="men">MEN</label><br/>
                            
                            <input type="radio" id="women" name="gender" value="women" className="me-3 mb-3" onChange={filteringData}/>
                            <label htmlFor="women">Women</label><br/>
                        </form>
                        
                        {/* BRANDS
                        <input type="radio" id="gant" name="brands" value="gant" className="me-3 mb-3" />
                        <label htmlFor="gant">GANT</label><br/>
                        
                        <input type="radio" id="h&m" name="brands" value="h&m" className="me-3 mb-3" />
                        <label htmlFor="h&m">H&M</label><br/>
                        
                        <input type="radio" id="park-avenue" name="brands" value="Park Avenue" className="me-3 mb-3" />
                        <label htmlFor="park-avenue">Park Avenue</label><br />

                        <input type="radio" id="calvin-klein" name="brands" value="Calvin Klein" className="me-3 mb-3"/>
                        <label htmlFor="calvin-klein">Calvin Klein</label> */}
                    </div>

                    <div className="col-md-9">
                        <div className="row">
                            {product.map((values, index)=>{
                                    const { id, title, price, image} = values; 
                                    return(
                                        <>
                                            <div className="col-md-4 mb-4" key={id}>
                                                <div className="cards">
                                                    <img src={image} className="card-img-top" />
                                                    <div className="cards-body">
                                                        <h5 class="card-title">{title}</h5>
                                                        <p>Price: {price}</p>
                                                        <span>{values.category}</span>
                                                        <div>{values.brand}</div>
                                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                        <a  class="btn btn-dark">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>

                                        </>
                                    )
                            })}

                        </div>
                    </div>

                </div>
            </div>
            
        </>
    )
}

export default Categories;