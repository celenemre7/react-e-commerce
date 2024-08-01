import React from 'react';
import '../css/Product.css';
import { useNavigate } from 'react-router-dom';

function Product({ product }) {
  const { id, title, description, price, image } = product;

  const kisadescr = description.length > 100 ? description.substring(0, 100) + '...' : description;
  const kisatitle = description.length > 100 ? description.substring(0, 60) + '...' : description;

  const navigate = useNavigate()
  return (

    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      <div className="product-info">
        <h2 className="product-title">{kisatitle  }</h2>
        <p className="product-price">{price} TL</p>

        <button onClick={() => navigate("/product-details/" + id)} className="add-to-cart-button">Detayina Git</button>
      </div>
    </div>
  );
}

export default Product;