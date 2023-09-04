import { Outlet, Link } from "react-router-dom";
import "../style.css";
import SearchBar from "./SearchBar";
import React, { useState } from "react";

const Layout = () => {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="Layout">
            <nav>
                <ul>
                    <li className="grow">
                        <Link to="/" className="link">
                            Shrektube
                        </Link>
                    </li>
                    <li className="grow">
                        <SearchBar onSearch={setSearchTerm} />
                    </li>

                </ul>
            </nav>
            <Outlet context={searchTerm} />
        </div>
    );
};

export default Layout;
