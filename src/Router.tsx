import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import Home from "./routes/Home.tsx";
import Data from "./routes/Data.tsx";
import ErrorPage from "./routes/ErrorPage.tsx";
import Transaction from "./routes/Transaction.tsx";

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            errorElement: <ErrorPage />,
            children: [
                { index: true, element: <Home /> },
                {
                    path: "/transaction",
                    element: <Transaction />,
                },
                {
                    path: "/data",
                    element: <Data />,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
};

export default Router;
