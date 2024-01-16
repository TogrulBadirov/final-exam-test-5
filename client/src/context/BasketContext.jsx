import { createContext, useEffect, useState } from "react";

export const BasketContext = createContext();

const BasketProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState(localStorage.getItem("wishlist")?JSON.parse(localStorage.getItem("wishlist")):[])

    useEffect(() => {
        localStorage.setItem("wishlist",JSON.stringify(wishlist))
    }, [wishlist])
    
    const addToWishlist = (item)=>{
        const isItemExist = wishlist.findIndex(x => x._id === item._id)
        if (isItemExist === -1) {
            setWishlist([...wishlist,item])
        }
        else{
            setWishlist(wishlist.filter(x=> x._id !== item._id))
        }
    }

    const data = {
        wishlist,
        addToWishlist,
    }
  return (
    <WishlistContext.Provider value={data}>
        {children}
    </WishlistContext.Provider>
  );
};

export default BasketProvider;
