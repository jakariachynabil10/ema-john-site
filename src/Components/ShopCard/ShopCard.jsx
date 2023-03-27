import React from "react";
import "./shopCard.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const ShopCard = (props) => {
    // console.log(props.product)
    const {name , price, img, seller, ratings} = props.product
    const handleAddToCart = props.handleAddToCart
  return (
    <>
      <div className="card w-[95%] bg-base-100 shadow-2xl">
        <figure>
          <img
            src={img}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Price :{price}</p>
          <p>Manufacturer :{seller}</p>
          <p>Rating : {ratings}</p>
          <div className="card-actions justify-end">
            <button onClick={() => handleAddToCart(props.product)} className="btn text-black hover:bg-amber-500 color-css">
              Add to Cart
              <FontAwesomeIcon icon={faShoppingCart} />
              </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopCard;
