import { Link } from "react-router-dom";

const Navbar = () => {
    const links = <>
        <li><Link>Home</Link></li>
        <li><Link>Contact Us</Link></li>
        <li><Link>Dashboard</Link></li>
        <li><Link>Our Menu</Link></li>
        <li><Link>Our Shop</Link></li>
    </>
    return (
        <div className="navbar bg-base-100 fixed z-20 bg-opacity-15 max-w-screen-2xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">BISTRO BOSS</a>
            </div>
            <div className="navbar-end">
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <img src="" alt=""  className="w-10 h-10 rounded-full"/>
            </div>
        </div>
    );
};

export default Navbar;