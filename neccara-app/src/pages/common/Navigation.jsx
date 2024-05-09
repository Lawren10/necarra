import cart from "../../assets/common/cart.svg"
import search from "../../assets/common/search.svg"
import user from "../../assets/common/user.svg"
import logo from "../../assets/home-page/necarraLogo.svg"
import flag from "../../assets/home-page/flag.svg"
import { Link } from "react-router-dom"

const Navigation = () => {
  return (
   <nav className="nav-container ">
    <div className="nav-top-box">
     <img src={flag} alt="" />
     <Link to="/">
     <img src={logo} alt="" className="ml-[13rem]" />
     </Link>
     <ul className="top-links-box">
      <li className="top-link-item">
       <img src={search} alt="" />
      </li>
      <li className="top-link-item">
       <img src={user} alt="" />
      </li>
      <li className="top-link-item flex items-center gap-2">
       <img src={cart} alt="" />
       <span>MY CART</span>
      </li>
     </ul>
    </div>

    <div className="nav-middle-box">
     <ul className="nav-links-box">
      <li className="nav-link">
       <Link to="/shop">SHOP</Link>
      </li>
      <li className="nav-link">
       <Link to="/brand">OUR BRAND</Link>
      </li>
      <li className="nav-link">
       <Link to="blog">BLOG</Link>
      </li>
      <li className="nav-link">
       <Link to="contact">CONTACT US </Link>
      </li>
     </ul>
    </div>

    <div className="nav-bottom-box">Unveil Confidence</div>
   </nav>
  );
}

export default Navigation