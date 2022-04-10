import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./REvioItem.css"

const RevioItem = (props) => {
    const {product,deleteBtn}=props;
    const {name,img, price,shipping,quantity} =product;
    return (
        <div className="revio-item">
          <div>
              <img src={img} alt="" />
          </div>
          <div className="revio-item-dettis-container">
              <div className="item-dettails">
                    <p className="product-name" title={name}>
                        {name.length > 20? name.slice(0,20)+'...' : name}
                    </p>
                  <p>price: $<span className="price">{price}</span> </p>
                    <p>shipping :<small>{shipping}</small></p>
                    <p>quantity: {quantity}</p>
              </div>
              <div className="delete-btn">
                <button onClick={()=>deleteBtn(product)}>
                    <FontAwesomeIcon className="delete-icon" icon={faTrash}>

                    </FontAwesomeIcon>
                    </button>
              </div>
             

          </div>
        </div>
    );
};

export default RevioItem;