import React from 'react';
import '../css/Product.css';

function Product({ product }) {
  const { id, title, description, price, image } = product;

  const kisadescr = description.length > 100 ? description.substring(0, 100) + '...' : description;
  const kisatitle = description.length > 100 ? description.substring(0, 50) + '...' : description;

  return (

    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      <div className="product-info">
        <h2 className="product-title">{kisatitle  }</h2>
        <p className="product-description">{kisadescr}</p>
        <p className="product-price">{price} TL</p>
        <button className="add-to-cart-button">Sepete Ekle</button>
      </div>
    </div>
  );
}

export default Product;