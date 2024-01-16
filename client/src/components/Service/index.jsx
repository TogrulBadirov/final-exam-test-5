import { useContext } from "react";
import "./index.scss";
import { FaShoppingBasket } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoIosHeart } from "react-icons/io";
import { WishlistContext } from "../../context/WishlistContext";
import { Link } from "react-router-dom";
const Service = ({ item }) => {
  const { wishlist, addToWishlist } = useContext(WishlistContext);
  const addWish = (item)=>{
    addToWishlist(item)
  }
  return (
    <div className="card col-lg-4 col-md-6 col-12" id="card">
        <Link to={`/detail-page/${item._id}`} className="link">
        <i class={`${item.icon} icon`}></i>
      <h5>{item.title}</h5>
      <p>{item.desc}</p>
      </Link>

      <div className="buttons">
        <button className="basket-btn">
          <FaShoppingBasket />
        </button>
        <button onClick={()=>{addWish(item)}} className="basket-btn">
            {wishlist.findIndex(x=>x._id === item._id) !== -1?<IoIosHeart />:<IoIosHeartEmpty />}
        </button>
      </div>
      
    </div>
  );
};

export default Service;
