import { useContext } from "react";
import { WishlistContext } from "../../context/WishlistContext";
import "./index.scss"
import Service from "../../components/Service";

const Wishlist = () => {
    const { wishlist, addToWishlist } = useContext(WishlistContext);
  return (
    <section id="Wishlist">
        <div className="container">
        <div className="section-header">
                <h2>Wishlist</h2>
            </div>
            <div className="row">
                {wishlist && wishlist.map(item=>(
                    <Service key={item._id} item={item}/>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Wishlist