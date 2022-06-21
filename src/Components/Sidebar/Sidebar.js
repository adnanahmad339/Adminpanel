import "./Sidebar.css";
import {
    LineStyle,
    PermIdentity, Storefront

} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (<>
        <div className="sidebar">

            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>

                    <ul>
                        <a href="/dashboard" style={{ textDecoration: "none" }} className="link">
                            <li className="sidebarListItem active">
                                <LineStyle className="sidebarIcon" /> Home
                            </li>
                        </a>
                    </ul>

                </div>


                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul>
                        <Link to="/users" >
                            <PermIdentity /> Users

                        </Link>
                    </ul>

                    <ul>
                        <a href="/products" style={{ textDecoration: "none" }} className="link">
                            <li className="sidebarListItem">
                                <Storefront ntity className="sidebarIcon" /> Products
                            </li>
                        </a>
                    </ul>












                </div>

            </div>






        </div>


    </>);
}

export default Sidebar;