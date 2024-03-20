import dataDishes from "../../data/dataDishes";
import { useDispatch } from "react-redux";
import {  removeItemFromCart } from "../../Ridux/cartSlice";

function CartItem({cartItem}){

const dishes = dataDishes.find(item =>item.id === cartItem.dishId)

const dispatch =useDispatch();


    return(
       <div>
      <p> {cartItem.quantity}portions </p>
      <p>{dishes.name}</p>
      <p>{dishes.price * cartItem.quantity}</p>
      <p>Price $</p>
      <span onClick = {() =>dispatch(
        removeItemFromCart({cartItemId:cartItem.id}))}>
        <img className="busket"src="https://img.icons8.com/?size=50&id=11201&format=png" /></span>
       </div>
       )
   
   }
   
   export default CartItem;