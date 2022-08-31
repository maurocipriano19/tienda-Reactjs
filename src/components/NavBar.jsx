import React from "react";
import CartWidget from "./CartWidget";


const NavBar = () => {
    return (
        <div className="NaviBar">
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Active</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>                        
                    </ul>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <CartWidget/>
                        </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        Nosotros
                        </a>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;