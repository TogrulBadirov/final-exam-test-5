import { useContext } from "react";
import { WishlistContext } from "../../context/WishlistContext";
import "./index.scss"
import Service from "../../components/Service";
import { Toaster } from "react-hot-toast";

const Wishlist = () => {
    const { wishlist, addToWishlist } = useContext(WishlistContext);
  return (
    <section id="Wishlist">
        <div><Toaster/></div>
        <div className="container">
        <div className="section-header">
                <h2>Wishlist</h2>
            </div>
            <div className="row">
                {wishlist.length === 0 ? "Wishlist is empty!":""}
                {wishlist && wishlist.map(item=>(
                    <Service key={item._id} item={item}/>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Wishlist