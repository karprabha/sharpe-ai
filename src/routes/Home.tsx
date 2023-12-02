import { Link } from "react-router-dom";
import networkOneImgUrl from "../assets/images/network-1.png";

const Home = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="p-8">
                <h1 className="text-6xl font-extrabold text-gray-800">
                    Empower Your Crypto Journey with AI Insights
                </h1>
                <div className="mt-8">
                    <Link to={"/data"}>
                        <button
                            type="button"
                            className="bg-gray-700 text-white px-4 py-2 mr-2 rounded hover:text-yellow-400"
                        >
                            Data
                        </button>
                    </Link>
                    <Link to={"/transaction"}>
                        <button
                            type="button"
                            className="bg-gray-700 text-white px-4 py-2 rounded hover:text-yellow-400"
                        >
                            Transaction
                        </button>
                    </Link>
                </div>
            </div>
            <img
                src={networkOneImgUrl}
                alt="network-1-img"
                className="ml-auto opacity-40 flex-1"
            />
        </div>
    );
};

export default Home;
