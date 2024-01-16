import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState(localStorage.getItem("wishlist")?JSON.parse(localStorage.getItem("wishlist")):[])
    const [basket, setBasket] = useState(localStorage.getItem("basket")?JSON.parse(localStorage.getItem("basket")):[])

    useEffect(() => {
        localStorage.setItem("wishlist",JSON.stringify(wishlist))
        localStorage.setItem("basket",JSON.stringify(basket))
    }, [wishlist,basket])
    
 

    const addToBasket = (item)=>{
        const Item = basket.findIndex(x => x._id === item._id)
        if (Item === -1) {
            toast.success('Successfully Added To Basket!')
            item.count = 1
            setBasket([...basket,item])
        }
        else{
            toast('Already In Basket, Count Increased!', {
                icon: 'ℹ️',
              });
            basket[Item].count= basket[Item].count + 1
            setBasket([...basket])
        }
    }
    
    const updateCountBasket = (item,count)=>{
        if (count < 1) {
        setBasket(basket.filter(x=> x._id !== item._id))
        return 
        }

        const Item = basket.findIndex(x => x._id === item._id)
            basket[Item].count= count
            setBasket([...basket])
    }
    
    const removeFromBasket = (item)=>{
        setBasket(basket.filter(x=> x._id !== item._id))
        toast('Successfully Removed To Basket!', {
            icon: 'ℹ️',
          });
    }

    const addToWishlist = (item)=>{
        const isItemExist = wishlist.findIndex(x => x._id === item._id)
        if (isItemExist === -1) {
            toast.success('Successfully Added To Wishlist!')
            setWishlist([...wishlist,item])
        }
        else{
            setWishlist(wishlist.filter(x=> x._id !== item._id))
            toast('Successfully Removed To Wishlist!', {
                icon: 'ℹ️',
              });
        }
    }

    const data = {
        wishlist,
        addToWishlist,
        basket,
        addToBasket,
        removeFromBasket,
        updateCountBasket
    }
  return (
    <WishlistContext.Provider value={data}>
        {children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;
