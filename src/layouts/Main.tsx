import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <main className="h-full bg-gray-100">
            <div className="max-w-7xl m-auto px-4">
                <Outlet />
            </div>
        </main>
    );
};

export default Main;
