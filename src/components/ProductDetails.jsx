import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { setSelectedProduct } from '../redux/slices/productSlice'
import '../css/ProductDetails.css'
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";


function ProductDetails() {

    const {id} = useParams()
    const {products, selectedProduct} = useSelector((store) => store.product)
    const { title, description, price, image } = selectedProduct;
    const dispatch = useDispatch()
    const [count,setCount] = useState(0)
    
    const increment = () => {
        setCount(count + 1)
    }
    
    const decrement = () => {
        setCount(count - 1)
    }

    const getProdcutId = () => {
        products && products.map((product) => {
            if (product.id == id ) {
                dispatch(setSelectedProduct(product))
            }
        })
    }
    useEffect(() => {
        getProdcutId()
    },[])
  return (
    <div className="product-details-container">
      {selectedProduct && (
        <>
          <div className="product-image-container">
            <img src={image} alt={title} className="product-image" />
          </div>
          <div className="product-info-container">
            <h2 className="product-title">{title}</h2>
            <p className="product-description">{description}</p>
            <p className="product-price">${price}</p>
            <div>
                <CiCirclePlus onClick={(increment)} className="circle-icon" />
                <span>{count}</span>
                <CiCircleMinus onClick={(decrement)} className="circle-icon" />
            </div>
            <button className="add-to-cart-button">Add to Cart</button>
          </div>
        </>
      )}
    </div>
  )
}

export default ProductDetails