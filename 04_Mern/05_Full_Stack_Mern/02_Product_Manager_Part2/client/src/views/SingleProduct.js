import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@reach/router";


const SingleProduct = (props) => {
  // console.log(props);

  // before we get a response from our DB, our data is null
  const [product, setProduct] = useState(null);
  
  // arguments passed to useEffect
  // arg1: call back function
  // arg2: empty array which means run this only once
  useEffect(() => {
    axios
    .get("http://localhost:8000/api/products/"+ props.id)
    .then((res) => {
      console.log(res);
      setProduct(res.data);
    })
    .catch((err) => {
      console.error(err);
    });
  }, []);
  console.log("product: ", product);

  if (product === null) {
    return "Loading...";
  }
  
  return (
    <div className="p-3 mb-3" key={product._id}>
      <Link to={`/products`}>All products {" | "}</Link> 
      <Link to={`/products/create`}>Create new product</Link>
      <h3 className ="mt-4" >{product.title}</h3>
      <p>Price: {product.price}</p>
      <p>Description: {product.desc}</p>
    </div>
  );

  
  
};

export default SingleProduct;
