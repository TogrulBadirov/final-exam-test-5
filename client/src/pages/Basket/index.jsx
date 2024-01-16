import { useContext } from "react";
import { WishlistContext } from "../../context/WishlistContext";
import "./index.scss"
import Service from "../../components/Service";
import { Toaster } from "react-hot-toast";

const Basket = () => {
    const { wishlist, addToWishlist, basket, addToBasket,updateCountBasket, removeFromBasket } =
    useContext(WishlistContext);
  return (
    <section id="Wishlist">
        <div><Toaster/></div>
        <div className="container">
        <div className="section-header">
                <h2>Basket</h2>
            </div>
            <div className="row">
                {basket.length === 0 ? "Basket is empty!":""}
                {basket && basket.map(item=>(
                    <>
                    <Service key={item._id} item={item}/>
                    <button onClick={()=>updateCountBasket(item,item.count-1)}>-</button>
                    <span>Count: {item.count}</span>
                    <button onClick={()=>updateCountBasket(item,item.count+1)}>+</button>

                    <span>Price: ${item.price}</span>
                    <span>Total: ${item.price * item.count}</span>
                    <button onClick={()=>removeFromBasket(item)}>Remove from basket</button>
                    </>
                ))}
                <p>Basket Total: ${basket.reduce((acc,elem)=>acc+(elem.count * elem.price),0)}</p>
            </div>
        </div>
    </section>
  )
}

export default Basket