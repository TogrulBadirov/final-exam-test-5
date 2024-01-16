import { useEffect, useState } from "react";
import "./index.scss";

const Header = () => {
    const [scroll, setScroll] = useState(false);
    const nav = () => {
      const wScroll = window.scrollY;
      wScroll > 50 ? setScroll(true) : setScroll(false);
    };
  
    useEffect(() => {
      window.addEventListener("scroll", nav);
    }, []);
  return (
    <header>
      <div className="container">
        <h1>We Rank the Best Courses on the Web</h1>
        <p>In the history of modern astronomy, there is probably no one greater leap forward than the building and launch of the space telescope.</p>
        <div className="input-div">
        <input className="header-input" type="text" />
        <button>Search</button>
        </div>
      </div>
      <div className={`rocket-image ${scroll? "active":""}`}>
            <img src="https://preview.colorlib.com/theme/educature/img/rocket.png.webp" alt="" />
        </div>
    </header>
  );
};

export default Header;
