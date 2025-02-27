import { useState, useEffect } from "react";


export default function Navbar() {
    const [searchQuery, setSearchQuery] = useState("");


    
    
    return (
        <>
        <div className="navbar bg-transparant text-[#222222] z-10 fixed">

                <div className="navbar-start">

                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h7"/>
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-[#f4e9cf] text-[#222222] rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <a href="#home">Homepage</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#portfolio">Portfolio</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center p-2">

  <a className="btn btn-ghost text-xl">BDR.DE</a>
</div>
            <div className="navbar-end"> 
                <button className="btn btn-ghost btn-circle">

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                    </svg>
                </button>
            </div>
        </div>
        </>
    )
}
