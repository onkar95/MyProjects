import axios from "axios";
import { useEffect, useState ,useContext} from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import { Context } from "../../context/Context";
import blog from "../../images/download.png"
export default function Sidebar() {
  const [cats, setCats] = useState([]);
  const PF = "http://localhost:5000/images/"
  const { user, dispatch } = useContext(Context);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT The site</span>
        {/* <img  src={PF+user.profilePic} alt="" /> */}
        <img  src={blog} alt="" />
        <p>
          This is the simple blog site created for user to write their blogs ,publish it and user can also upload the images of the blog as well as his/her profile picture and can update his/her profile at any time 
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
