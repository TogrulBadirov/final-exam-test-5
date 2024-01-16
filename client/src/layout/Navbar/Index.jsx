import { Link } from "react-router-dom";
import "./index.scss";
import { useContext, useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { WishlistContext } from "../../context/WishlistContext";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const { wishlist, addToWishlist, basket } = useContext(WishlistContext);
  const nav = () => {
    const wScroll = window.scrollY;
    wScroll > 50 ? setScroll(true) : setScroll(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", nav);
  }, []);

  return (
    <nav className={`${scroll ? "active" : ""}`}>
      <div id="desktop-nav">
        <div className="container">
          <div className="logo">
            <Link to="/">
              <img
                src="https://preview.colorlib.com/theme/educature/img/logo.png.webp"
                alt=""
              />
            </Link>
          </div>
          <div className="pages">
            <ul>
              <li>
                <Link className="link" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="link" to="/wishlist">
                Wishlist{`(${wishlist.length > 0 ? wishlist.length  :""})`}
                </Link>
              </li>
              <li>
                <Link className="link" to="/basket">
                Basket{`(${basket.length > 0 ? basket.length  :""})`}
                </Link>
              </li>
              <li>
                <Link className="link" to="/addPage">
                  AddPage
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="mobile-nav">
        <div className="container">
          <div className="top-nav">
            <div className="logo">
              <Link to="/">
                <img
                  src="https://preview.colorlib.com/theme/educature/img/logo.png.webp"
                  alt=""
                />
              </Link>
            </div>
            <div className="burger-icon">
              <button onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
                <GiHamburgerMenu />
              </button>
            </div>
          </div>
          <div className={`pages ${isMobileNavOpen ? "active" : ""}`}>
            <hr />
            <ul>
              <li>
                <Link className="link" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="link" to="/wishlist">
                Wishlist{`(${wishlist.length > 0 ? wishlist.length  :""})`}
                </Link>
              </li>
              <li>
                <Link className="link" to="/basket">
                Basket{`(${basket.length > 0 ? basket.reduce((acc,cur)=>acc+cur.count,0)  :""})`}
                </Link>
              </li>
              <li>
                <Link className="link" to="/addPage">
                  AddPage
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
