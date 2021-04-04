import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from "@reach/router";

const ProductForm = (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [desc, setDesc] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newProduct = {
            title,
            price,
            desc
        };
        console.log(newProduct);

        axios
        .post("http://localhost:8000/api/products/create", newProduct)
        .then( (res) => {
            console.log("response from axios inside create: ",res);
            navigate('http://localhost:8000/api/products');
        })
        .catch( err => console.log(err));
    }

    return (
        <form onSubmit= { handleSubmit }>
            <h1>Product Manager</h1>
            <div>
                <label>Title</label>
                <input onChange={(e) => setTitle(e.target.value)} type="text" />
            </div>
            <div>
                <label>Price</label>
                <input onChange={(e) => setPrice(e.target.value)} type="number" min = "0" />
            </div>
            <div>
                <label>Description</label>
                <input onChange={(e) => setDesc(e.target.value)} type="text" />
            </div>
            <input type="submit" />
        </form>
    );
}
export default ProductForm;
