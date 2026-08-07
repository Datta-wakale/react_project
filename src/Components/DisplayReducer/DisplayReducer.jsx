import "../DisplayReducer/DisplayReducer.css";
import { Link, Outlet } from "react-router-dom";

const DisplayReducer = () => {
    return (
        <div className="reducer-btn-container">
            <h1 className="reducer-heading">useReducer Demo</h1>
            <nav>
                <Link to="players"> 
                    <button className="player-nav-btn">players List</button>
                 </Link> {" | "}
                
                <Link to="selected-team">
                    <button className="team-nav-btn">Selected Team</button>
                </Link>
            </nav>
            <hr />
            <Outlet />
        </div>
    );
};

export default DisplayReducer;