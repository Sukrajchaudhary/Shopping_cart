import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAsync ,deleteAsync,updateAsync} from "./cartSlices";
import "./Cart.css";

export function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  useEffect(() => {
    dispatch(fetchAsync());
  }, []);
  const handleChange=(e,id)=>{
   console.log( e.target.value)
   dispatch(updateAsync({id,change:{quantity:+e.target.value}}))
  }
  return (
    <div>
      <div>
        {items.map((item) => (
          <div className="cart-item">
            <img src={item.thumbnail} alt="" className="img-fluid" />
            <div className="descriptions">
              <p>{item.title}</p>
              <span>{item.brand}</span>
              <strong>${item.price}</strong>
            </div>
            <div className="quantity">
              Quantitty
              <select value={item.quantity} onChange={(e)=>handleChange(e,item.id)}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
              </select>
            </div>
            <div className="close">
              <button onClick={()=>dispatch(deleteAsync(item.id))}>X</button>
            </div>
          </div>
        ))}
      </div>
      <p style={{color:'red'}}>Total Amount:${items.reduce((acc,item)=>item.price*item.quantity+acc,0)}</p>
    </div>
  );
}
