import React, { useState } from "react";
import Pdata from "./Pdata";

const Category = () => {

    // const [data, setData] = useState(Pdata);
    const [brands, setBrands] = useState(Pdata);

    const filterResult = (catItem) => {
        const result = Pdata.filter((currData) => {
            console.log();
            if(catItem === currData.category) {
                return currData.category === catItem;
            } else if(catItem === currData.brand) {
                return currData.brand === catItem;
            }
        })
        console.log(result);
        setBrands(result);
    }

    const filterBrands = (brandItem) => {
        const result = Pdata.filter((currData) => {
            return currData.brand === brandItem
        })
        setBrands(result);
    }

    

    return(
        <>
            <h1 className="text-center">Let's shop</h1>
            <div className="container-fluid mx-2">
                <div className="row mt-5 mx-2">
                    <div className="col-md-3">
                        <button className="btn btn-danger w-100 mb-4" onClick={() => filterResult('men')}>Men</button>
                        <button className="btn btn-danger w-100 mb-4" onClick={() => filterResult('women')} >Women</button>
                        <button className="btn btn-danger w-100 mb-4" onClick={() => filterResult('children')}>Children</button>
                        <button className="btn btn-danger w-100 mb-4" onClick={() => filterResult('White')}>White</button>
                        <button className="btn btn-danger w-100 mb-4" onClick={() => setBrands(Pdata)}>All</button>
                        
                        {/* BRANDS */}
                        <input type="radio" id="gant" name="brands" value="gant" className="me-3 mb-3" onChange={() => filterResult('gant')}/>
                        <label for="gant">GANT</label><br/>
                        
                        <input type="radio" id="h&m" name="brands" value="h&m" className="me-3 mb-3" onChange={() => filterResult('h&m')}/>
                        <label for="h&m">H&M</label><br/>
                        
                        <input type="radio" id="park-avenue" name="brands" value="Park Avenue" className="me-3 mb-3" onChange={() => filterResult('park-avenue')}/>
                        <label for="park-avenue">Park Avenue</label><br />

                        <input type="radio" id="calvin-klein" name="brands" value="Calvin Klein" className="me-3 mb-3" onChange={() => filterResult('calvin-klein')}/>
                        <label for="calvin-klein">Calvin Klein</label>
                    </div>

                    <div className="col-md-9">
                        <div className="row">
                            {brands.map((values, index)=>{
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

export default Category;