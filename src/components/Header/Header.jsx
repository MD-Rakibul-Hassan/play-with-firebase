import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <nav className="container mx-auto px-5 bg-lime-700 text-white flex justify-between items-center py-5">
            <div className="text-xl font-bold hover:bg-slate-400 p-4 rounded-xl">
                <h1>LOGO</h1>
            </div>
            <div>
                <ul className="flex gap-4">
                    <li>
                        <NavLink to='/' className={({ isActive, isPending }) =>
                         isPending ? "pending" : isActive ? "text-blue-500" : ""
                        } >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/contact'
                            className={({ isActive, isPending }) =>
                         isPending ? "pending" : isActive ? "text-blue-500" : ""
                        }>
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/login'
                            className={({ isActive, isPending }) =>
                         isPending ? "pending" : isActive ? "text-blue-500" : ""
                        }>
                            Login
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Header;