import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-gray-700">
            <div className="max-w-7xl m-auto py-2 flex justify-between items-center px-4">
                <h1 className="text-2xl text-white font-semibold">
                    <Link to={"/"}>Sharpe AI Assignment</Link>
                </h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <NavLink
                                to="/"
                                className="text-white hover:text-yellow-400"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/data"
                                className="text-white hover:text-yellow-400"
                            >
                                Data
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/transaction"
                                className="text-white hover:text-yellow-400"
                            >
                                Transaction
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
